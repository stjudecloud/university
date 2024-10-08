---
title: Neoepitope
---

|                       |                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Authors**           | Ti-Cheng Chang                                                                                                                 |
| **Publication**       | [The Neoepitope Landscape in Pediatric Cancers. Genome Medicine. 2017. 9.1: 78](https://www.ncbi.nlm.nih.gov/pubmed/28854978). |
| **Technical Support** | [Contact Us](https://stjude.cloud/contact/)                                                                                    |

## Overview

Cancers are caused by somatically acquired alterations including single 
nucleotide variations (SNVs), small insertion/deletions (indels),
translocations, and other types of rearrangements. The genes affected by
these mutations may produce altered proteins, some of which may lead to
the emergence of tumor-specific immunogenic epitopes. We developed an
analytical workflow for identification of putative neoepitopes based on
somatic missense mutations and gene fusions using whole genome
sequencing data. The workflow has been used to characterize neoepitope
landscape of 23 subtypes of pediatric cancer in the Pediatric Cancer
Genome Project[^1].

## Inputs

| Name                                           | Type       | Description                                                                      | Example                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| FASTQ files (*required* if using FASTQ inputs) | Input file | Gzipped FASTQ files generated by experiment.                                     | Sample_R1.fastq.gz and Sample_R2.fastq.gz |
| BAM files (*required* if using BAM inputs)     | Input file | BAM files aligned against hg19/hg38 (WGS, WES or RNA-Seq).                       | Sample.bam                                |
| BAM indices (*required* if using BAM inputs)   | Input file | Corresponding BAM index of the BAM files above.                                  | Sample.bam.bai                            |
| Mutation file (*required*)                     | Input file | File describing the mutations present in the sample (special format, see below). | *.txt (tab-delimited)                     |
| SNV or fusion                                  | Parameter  | Specify the mutation file contains SNV or gene fusion.                           | SNV                                       |
| Peptide size                                   | Parameter  | Size of the peptide.                                                             | 9                                         |
| Affinity threshold                             | Parameter  | Affinity cutoff for epitope prediction report.                                   | 500                                       |


### Input file configuration

Users need to provide a mutation file for SNV or gene fusion. The format
of the mutation file is shown in the following example. The file can be
prepared in Excel and saved as a tab-delimited text file to use as
input.

The HLA alleles for testing will be derived from the HLA typing module
using the workflow. The peptide size and affinity cutoff can be modified
by users. 

**Mutation file format**

| GeneName | Sample  | Chr   | Postion_hg19 | Class    | AAChange | mRNA_acc | ReferenceAllele | MutantAllele |
| -------- | ------- | ----- | ------------ | -------- | -------- | -------- | --------------- | ------------ |
| Gene1    | SampleA | chr10 | 106150600    | missense | R663H    | NM_00101 | A               | T            |
| Gene2    | SampleA | chr2  | 32330151     | missense | N329N    | NM_00102 | T               | G            |

!!!example Notes on preparing the above file
-   The chromosome requires a 'chr' prefix.
-   The position requires a suffix of hg19/hg38 to indicate the human genome assembly version.
-   Only the missense mutations/gene fusion is supported currently and the other types of mutations will not be processed.
!!!

**Mutation file example**

![](./mutation-file-example.png)

## Outputs

| Name                               | Description                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| Epitope affinity prediction (html) | Epitope affinity. The peptide with affinity &lt; cutoff will be highlighted. |
| Epitope affinity prediction (xlsx) | Excel tables for the information of all epitopes                             |
| Affinity (raw output)              | Epitope affinity                                                             |
| Peptide sequence (raw output)      | Peptide sequences in Fasta format                                            |

## Workflow Steps

### HLA Typing Algorithm

The HLA typing algorithm is used to predict the HLA class I alleles.
Users can either provide FASTQ (paired or single end reads) or a BAM
file as input. When using a BAM file as input, the reads surrounding the
HLA loci and unmapped reads will be extracted. The reads will be fed
into Optitype for HLA typing. The default settings for Optitype are
used. The output of the HLA type can be combined with the our epitope
detection algorithm to perform affinity prediction of neoepitopes.

If you use **FASTQ** files as input:  

1. The input FASTQs will be aligned against the Optitype HLA reference
    sequences using razers3 (see <https://github.com/FRED-2/OptiType>).
2. The fished FASTQs will be used for HLA typing using Optitype.

If you use **BAM** files as input:  

1. The reads falling within the HLA loci and their paralogous loci will
    be extracted.
2. The reads unmapped to the human genome will be extracted.
3. The reads from step 1 and 2 will be combined and deduplicated (in
    FASTQ format).
4. The input FASTQs will be aligned against the Optitype HLA reference
    sequences using razers3 (see <https://github.com/FRED-2/OptiType>).
5. The fished FASTQs will be used for HLA typing using Optitype.

### Epitope Prediction Algorithm

The epitope prediction algorithm first extracts peptides covering an array
of tiling peptides (size defined by users) overlapping each missense
mutation or gene fusion. Fusion junctions can be identified using RNA-Seq
by fusion detection tools (Li et. al, unpublished). NetMHCcons[^3] is subsequently 
used to predict affinities of the peptide array for each HLA receptor in 
each sample. The neoepitope with affinity lower than the threshold will 
be highlighted in output file (default 500 nM). Below is an outline of internal steps the algorithm performs in order to generate the final report.

1. Check the version of the genomic position of the input SNV/fusion
    file.
2. Lift over the genomic coordinates if the reference genomic
    position is not hg19. Currently, the internal genome annotation was
    based on hg19 and the genome coordinates of the mutation files will
    be adjusted to hg19 for peptide extraction.
3. Extract the peptide flanking the mutations.
4. Run NetMHCcons to obtain the affinity prediction of the peptides.
5. Produce the affinity report of each peptide.

## Creating a workspace
Before you can run one of our workflows, you must first create a workspace in DNAnexus for the run. Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#getting-started) to learn how to create a DNAnexus workspace for each workflow run.

You can navigate to the NeoepitopePred workflow page [here](https://platform.stjude.cloud/workflows/neoepitopepred).

## Uploading Input files

NeoepitopePred takes the following files as [input](#inputs):

* A pair of Gzipped FASTQ files or an hg19/hg38 aligned BAM file. These can be
  generated from whole genome sequencing, whole exome sequencing, or RNA-Seq. 
* A file describing the mutations in a sample. 

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#uploading-files) to learn how to upload input files to the workspace you just created.

## Running the Workflow

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#running-the-workflow) to learn how to launch the workflow, hook up input files, adjust parameters, start a run, and monitor run progress.

!!!warning
This pipeline assumes hg19 coordinates in the mutation file. If the
coordinates are based on hg38, the coordinates will lifted over to hg19
to perform epitope affinity prediction.
!!!


## Analysis of Results
Each tool in St. Jude Cloud produces a visualization that makes understanding results more accessible than working with excel spreadsheet or tab delimited files. This is the primary way we recommend you work with your results. 

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#custom-visualizations) to learn how to access these visualizations.

We also include the raw output files for you to dig into if the visualization is not sufficient to answer your research question.

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#raw-results-files) to learn how to access raw results files.

### Interpreting results

**HLA typing**

The output of this app contain the prediction of the HLA class I alleles
from OptiType.

* A folder stamped with the time will present in the output folder
  (optitype), which contains the raw output.

![](./hlatype-result.png)

* The file contains the predicted HLA alleles of the sample.

![](./hlatype-result2.png)

**Neoepitope prediction**

The output contains one summary HTML, one folder with raw output, and one
folder with outputs in Excel formats:

![](./epitope-result.png)

**Epitope_affinity_prediction.html** (shown below):   

* This file provides a summary of the epitope prediction that can be visualized directly from web browser.  
* The peptides with affinity lower than user-defined cutoff will be highlighted in green in the webpage.  

![](./epitope-result2.png)

**Raw_output** (shown below): this folder contains the raw output of the affinity
prediction. There will two major types files present here: affinity.out and flanking.seq.

![](./epitope-result3.png)


![](./epitope-result4.png)

**affinity.out**: these files are the prediction results from the
    netMHCcons for each peptide.

![](./epitope-result5.png)

The following columns will be shown in the output:

| Column           | Description                                                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Gene name        | the name of the genes                                                                                                                                                                                                                                        |
| Sample           | the name of the samples                                                                                                                                                                                                                                      |
| Chromosome (chr) | the chromosome location of the variation                                                                                                                                                                                                                     |
| Position         | the chromosomal position of the variation. Currently, the position will be lifted over to hg19 to ensure correct translation of peptid sequences based on the internal annotation database of the pipeline. Therefore, the position will be labeled as hg19. |
| Class            | class of the variation                                                                                                                                                                                                                                       |
| Reference allele | reference allele at the position                                                                                                                                                                                                                             |
| Mutant allele    | mutated allele at the position                                                                                                                                                                                                                               |
| mRNA_acc         | NCBI accession number of the mRNA                                                                                                                                                                                                                            |
| Allele           | HLA allele tested                                                                                                                                                                                                                                            |
| Peptide          | the neoepitope sequences tested                                                                                                                                                                                                                              |
| Gene_variant     | the gene and variant residues                                                                                                                                                                                                                                |
| 1-log50k         | Prediction score from netMHCcons                                                                                                                                                                                                                             |
| nM               | Affinity as IC50 values in nM                                                                                                                                                                                                                                |
| %Rank            | % Rank of prediction score to a set of 200.000 random natural 9mer peptides                                                                                                                                                                                  |
| HLAtype          | All of the hla alleles predicted in the specific sample                                                                                                                                                                                                      |

**flanking.seq**: these files contain the sequences used for the prediction.

![](./epitope-result6.png)

**XLSX**: this folder contains the raw output of the affinity prediction as
described above in Excel files. The files can be downloaded and opened with Excel for downstream filtering and analyses.

![](./epitope-result7.png)

## Frequently asked questions

None yet! If you have any questions not covered here, feel free to reach
out on [our contact form](https://hospital.stjude.org/apps/forms/fb/st-jude-cloud-contact/).


## Similar Topics

[Running our Workflows](../../analyzing-data/running-sj-workflows)  
[Working with our Data Overview](../../managing-data/working-with-our-data)   
[Upload/Download Data (local)](../../managing-data/upload-local)   


[^1]: Downing JR, Wilson RK, Zhang J, et al. The Pediatric Cancer Genome
Project. Nature genetics. 2012;44(6):619-622.
[^2]: Szolek A, Schubert B, Mohr C, Sturm M, Feldhahn M, Kohlbacher O:
OptiType: precision HLA typing from next-generation sequencing
data. Bioinformatics 2014, 30:3310-3316.
[^3]: Karosiene E, Lundegaard C, Lund O, Nielsen M: NetMHCcons: a
consensus method for the major histocompatibility complex class I
predictions. Immunogenetics 2012, 64:177-186.

