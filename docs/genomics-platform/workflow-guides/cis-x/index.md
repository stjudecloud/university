---
title: cis-X
---

|                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authors**           | Yu Liu<sup>1,2,\*,#</sup>, Chunliang Li<sup>3,\*</sup>, Shuhong Shen<sup>1,4,\*</sup>, Xiaolong Chen<sup>2</sup>, Karol Szlachta<sup>2</sup>, Michael N. Edmonson<sup>2</sup>, Ying Shao<sup>2</sup>, Xiaotu Ma<sup>2</sup>, Judith Hyle<sup>3</sup>, Shaela Wright<sup>3</sup>, Bensheng Ju<sup>2</sup>, Michael C. Rusch<sup>2</sup>, Yanling Liu<sup>2</sup>, Benshang Li<sup>1,4</sup>, Michael Macias<sup>2</sup>, Liqing Tian<sup>2</sup>, John Easton<sup>2</sup>, Maoxiang Qian<sup>5</sup>, Jun J. Yang<sup>5,6,7</sup>, Shaoyan Hu<sup>8</sup>, A. Thomas Look<sup>9,10</sup> and Jinghui Zhang<sup>2,#</sup> |
| **Publication**       | "Discovery of regulatory non-coding variants in individual cancer genomes using cis-X" (in submission)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Technical Support** | [Contact Us](https://stjude.cloud/contact)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Overview

Activating regular variants usually cause the cis-activation of target genes. To find cis-activated genes, allelic specific/imbalance expressions (ASE) and
outlier high expression (OHE) signals are used. Variants in the same topologically associated domains with the candidates can then be searched, including structural variants (SV), copy number aberrations (CNA), and single nucleotide variations (SNV) and insertion/deletions (indel).

A transcription factor binding analysis is also done, using motifs from [HOCOMOCO] v10 models.

cis-X currently only works with hg19 (GRCh37).

[HOCOMOCO]: http://hocomoco11.autosome.ru/

## Inputs

| Name                         | Type    | Description                                                                                                                       | Example        |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Sample ID                    | String  | The ID of the input sample                                                                                                        | SJALL018373_D1 |
| Disease subtype              | String  | The disease name under analysis. Must be either NBL or TALL.                                                                      | TALL           |
| [Single nucleotide variants] | File    | Tab-delimited file containing raw sequence variants                                                                               | *.txt          |
| [CNV/LOH regions]            | File    | Tab-delimited file containing any aneuploidy region existing in the tumor genome under analysis                                   | *.txt          |
| RNA-Seq BAM                  | File    | BAM file aligned to hg19 (GRCh37)                                                                                                 | *.bam          |
| RNA-Seq BAM index            | File    | BAM index for the given BAM                                                                                                       | *.bam.bai      |
| [Gene expression table]      | File    | Tab-delimited file containing gene level expressions for the tumor under analysis in FPKM                                         | *.txt          |
| [Somatic SNV/indels]         | File    | Tab-delimited file containing somatic SNV/indels in the tumor genome                                                              | *.txt          |
| [Somatic SVs]                | File    | Tab-delimited file containing somatic acquired structural variants in the tumor genome                                            | *.txt          |
| [Somatic CNVs]               | File    | Tab-delimited file containing copy number aberrations in the tumor genome                                                         | *.txt          |
| CNV/LOH action               | String  | The behavior when handling markers in CNV/LOH regions. Can be either `keep` or `drop`. [default: keep]                            | drop           |
| Minimum coverage for WGS     | Integer | The minimum coverage in WGS to be included in the analysis [default:  10]                                                         | 10             |
| Minimum coverage for RNA-Seq | Integer | The minimum coverage in RNA-Seq to be included in the analysis [default: 10]                                                      | 5              |
| Candidate FPKM threshold     | Float   | The FPKM threshold for the nomination of a cis-activated candidate [default: 5.0]                                                 | 0.1            |
| User annotations             | File    | User applied annotations [optional]                                                                                               | *.bed          |
| chr Prefix                   | String  | Whether the names in the reference sequence dictionary are prefixed with "chr". Must be either `TRUE` or `FALSE`. [default: TRUE] | TRUE           |
| TAD annotations              | File    | TAD annotations [optional]                                                                                                        | *.bed          |

[Single nucleotide variants]: #single-nucleotide-variants
[CNV/LOH regions]: #cnvloh-regions
[Gene expression table]: #gene-expression-table
[Somatic SNV/indels]: #somatic-snvindels
[Somatic SVs]: #somatic-svs
[Somatic CNVs]: #somatic-cnvs


### Input file configuration

cis-X requires six tab-delimited input files to be prepared in advance. These
files can be uploaded via the [command line](../../analyzing-data/command-line).


!!!note
Even though CNV/LOH regions, somatic SNV/indels, somatic SVs, and
somatic CNVs can be "empty", using such inputs will produce results with a
much higher false positive rate.
!!!

#### Single Nucleotide Variants

A list of single nucleotide markers is a tab-delimited file with the
following columns:

  * `Chr`: chromosome name for the marker
  * `Pos`: genomic start location for the marker
  * `Chr_Allele`: reference allele
  * `Alternative_Allele`: alternative allele
  * `reference_tumor_count`: reference allele count in the tumor genome
  * `alternative_tumor_count`: alternative allele count in the tumor genome
  * `reference_normal_count`: reference allele count in the matched normal genome
  * `alternative_normal_count`: alternative count in the matched normal genome

This file can be generated with Bambino.

<h5>Example</h5>

| Chr   |   Pos | Chr_Allele | Alternative_Allele | reference_tumor_count | alternative_tumor_count | reference_normal_count | alternative_normal_count |
| ----- | ----: | ---------- | ------------------ | --------------------: | ----------------------: | ---------------------: | ------------------------ |
| chr11 | 61396 | TT         |                    |                     0 |                       3 |                      0 | 10                       |
| chr11 | 72981 |            | T                  |                     1 |                       3 |                      2 | 3                        |


#### CNV/LOH regions

The CNV/LOH regions are all the genomic regions carrying copy number
variations (CNV) or loss of heterozygosity (LOH), which will be filtered out
during analysis.

This is a tab-delimited file in the bed format. It must have at least the
following three columns:

  * `chrom`: chromosome name
  * `loc.start`: genomic start location
  * `loc.end`: genomic end location

If no CNV/LOH are in the genome under analysis, a file with no rows (but
including headers) can be provided.

This file can be generated with CONSERTING.

<h5>Example</h5>

| chrom | loc.start |  loc.end | Sample         |    seg.mean | LogRatio | source |
| ----- | --------: | -------: | -------------- | ----------: | -------: | ------ |
| chr9  |     10712 | 37855747 | SJALL018373_D1 | 0.471181417 |          | LOH    |
| chr9  |  20276901 | 20703900 | SJALL018373_D1 |      -0.978 |   -5.696 | CNV    |


#### Gene expression table


The gene expression table is a tab-delimited file containing gene level
expressions for the tumor under analysis. The expressions are in FPKM
(fragments per kilobase of transcript per million mapped reads).

  * `GeneID`: gene [Ensembl] ID
  * `GeneName`: gene symbol
  * `Type`: [transcript type](https://www.gencodegenes.org/gencode_biotypes.html)
  * `Status`: transcript status (must be `KNOWN`, `NOVEL`, or `PUTATIVE`)
  * `Chr`: chromosome name
  * `Start` genomic start location
  * `End`: genomic end location
  * [SampleID...]: FPKM for the given sample

This file can be generated with the output of HTseq-count preprocessed
through `mergeData_geneName.pl` (available with the distribution of cis-X).
The data must be able to match values in the given gene specific reference
expression matrices generated from a larger cohort.

<h5>Example</h5>

| GeneID            | GeneName | Type    | Status | Chr   |    Start |      End | SJALL018373_D1 |
| ----------------- | -------- | ------- | ------ | ----- | -------: | -------: | -------------: |
| ENSG00000261122.2 | 5S_rRNA  | lincRNA | NOVEL  | chr16 | 34977639 | 34990886 |         0.0000 |
| ENSG00000249352.3 | 7SK      | lincRNA | NOVEL  | chr5  | 68266266 | 68325992 |         4.5937 |


#### Somatic SNV/indels

This is a tab-delimited file containing somatic sequence mutations present in
the genome under analysis. It includes both single nucleotide variants (SNV)
and small insertion/deletions (indel). The file must have the following
columns:

  * `chr`: chromosome name
  * `pos`: genomic start location
  * `ref`: reference nucleotide
  * `mutant`: mutant nucleotide
  * `type`: mutation type (must be either `snv` or `indel`)

Note that the coordinate used for an indel is after the inserted sequence.

If no SNV/indels are in the sample under analysis, a file with no rows
(but including headers) can be provided.

This file can can be created with Bambino and then preprocessed using the
steps taken in "[The genetic basis of early T-cell precursor acute lymphoblastic leukaemia][22237106]".

[22237106]: https://www.ncbi.nlm.nih.gov/pubmed/22237106

<h5>Example</h5>

| chr   |      pos | ref | mut | type |
| ----- | -------: | --- | --- | ---- |
| chr1  | 24782720 | G   | A   | snv  |
| chr11 | 82896176 | T   | C   | snv  |


#### Somatic SVs

This is a tab-delimited file containing somatic-acquired structural variants
(SV) in the cancer genome. The file must have the following columns:

  * `chrA`: chromosome name of the left breakpoint
  * `posA`: genomic location of the left breakpoint
  * `ortA`: strand orientation of the left breakpoint
  * `chrB`: chromosome name of the right breakpoint
  * `posB`: genomic location of the right breakpoint
  * `ortB`: strand orientation of the right breakpoint

Strand orientations are denoted with a `+` for a sense or coding strand and
`-` for a antisense or non-coding strand.

If no somatic SVs are in the sample under analysis, a file with no rows (but
including headers) can be provided.

This file can be generated by CREST.

<h5>Example</h5>

| chrA  |     posA | ortA | chrB |      posB | ortB | type |
| ----- | -------: | ---- | ---- | --------: | ---- | ---- |
| chr11 | 33913169 | +    | chr7 | 142494049 | -    | CTX  |
| chr11 | 64219334 | +    | chr2 | 205042527 | -    | CTX  |


#### Somatic CNVs

This is a tab-delimited file containing the genomic
regions with somatic-acquired copy number aberrations (CNA) in the cancer
genome.

  * `chr`: chromosome name
  * `start`: genomic start location
  * `end`: genomic end location
  * `logR`: log2 ratio

If no somatic CNVs are in the sample under analysis, a file with no rows
(but including headers) can be provided.

This file can be generating by CONSERTING.

<h5>Example</h5>

| chr  |    start |      end |   logR |
| ---- | -------: | -------: | -----: |
| chr9 | 20276901 | 20703900 | -5.696 |


## Outputs

| Name                        | Description                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [cis-activated candidates]  | cis-activated candidates in the tumor genome under analysis                                                        |
| [SV candidates]             | Structural variant (SV) candidates predicted as the causal for the cis-activated genes in the regulatory territory |
| [CNA candidates]            | Copy number aberrations (CNA) predicted as the causal for the cis-activated genes in the regulatory territory      |
| [SNV/indel candidates]      | SNV/indel candidates predicted as functional and predicted transcription factors                                   |
| [OHE results]               | Raw outlier high expression (OHE) results                                                                          |
| [Gene level ASE results]    | Raw gene level allelic specific expression (ASE) results                                                           |
| [Single marker ASE results] | Raw single marker allelic specific expression (ASE) results                                                        |

[cis-activated candidates]: #cis-activated-candidates
[SV candidates]: #sv-candidates
[CNA candidates]: #cna-candidates
[SNV/indel candidates]: #snvindel-candidates
[OHE results]: #ohe-results
[Gene level ASE results]: #gene-level-ase-results
[Single marker ASE results]: #single-marker-ase-results



## Creating a workspace
Before you can run one of our workflows, you must first create a workspace in DNAnexus for the run. Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#getting-started) to learn how to create a DNAnexus workspace for each workflow run.

You can navigate to the Cis-X workflow page [here](https://platform.stjude.cloud/workflows/cis-x)

## Uploading Input Files

cis-X requires a total of eight files to be uploaded, as [input](#input-file-configuration). 

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#uploading-files) to learn how to upload input files to the workspace you just created.


## Running the Workflow

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#running-the-workflow) to learn how to launch the workflow, hook up input files, adjust parameters, start a run, and monitor run progress.

## Analysis of Results
Each tool in St. Jude Cloud produces a visualization that makes understanding results more accessible than working with excel spreadsheet or tab delimited files. This is the primary way we recommend you work with your results. 

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#custom-visualizations) to learn how to access these visualizations.

We also include the raw output files for you to dig into if the visualization is not sufficient to answer your research question.

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#raw-results-files) to learn how to access raw results files.

## Interpreting results

### cis-activated candidates

The main result file contains the cis-activated candidates in the tumor genome
under analysis.

  * `gene`: gene accession number ([RefSeq] ID)
  * `gsym`: gene symbol
  * `chrom`: chromosome name
  * `strand`: strand orientation
  * `start`: genomic start location
  * `end`: genomic end location
  * `cdsStartStat`: coding sequence (CDS) start status
  * `cdsEndStat`: coding sequence (CDS) end status
  * `markers`: number of heterozygous markers in this gene
  * `ase_markers`: number of heterozygous markers showing allelic specific expressions (ASE)
  * `average_ai_all`: average B-allele frequency (BAF) difference between RNA and DNA for all heterozygous markers
  * `average_ai_ase`: average BAF difference between RNA and DNA for ASE markers
  * `pval_all_markers`: p-value for each marker in the ASE test
  * `pval_ase_markers`: p-value for ASE markers in the ASE test
  * `ai_all_markers`: BAF difference between RNA and DNA for all heterozygrous markers
  * `ai_ase_markers`: BAF difference between RNA and DNA for ASE markers
  * `comb.pval`: combined p-value for the ASE test
  * `mean.delta`: average BAF difference between RNA and DNA for all markers
  * `rawp`: raw p-value for the ASE test
  * `Bonferroni`: adjusted p-value for the ASE test (single-step Bonferroni)
  * `ABH`: adjusted p-value for the ASE test (Benjamini-Hochberg)
  * `FPKM`: FPKM value
  * `loo.source`: which reference expression matrix was used in the outlier high expression (OHE) test
  * `loo.cohort.size`: number of cases in the reference expression matrix for this gene
  * `loo.pval`: p-value of the OHE test
  * `loo.rank`: rank of the case under analysis among the reference cases
  * `imprinting.status`: imprinting status of the gene
  * `candidate.group`: status of the gene, combining both ASE and outlier tests

Strand orientations are denoted with a `+` for a sense or coding strand and
`-` for a antisense or non-coding strand.

Coding sequence status is typically one of "none" (not specified), "unk"
(unknown), "incmpl" (incomplete), or "cmpl" (complete).

<h5>Example</h5>

| gene      | gsym  | chrom | strand |    start |      end | cdsStartStat | cdsEndStat | markers | ase_markers | average_ai_all | average_ai_ase | pval_all_markers                                                        | pval_ase_markers                                                        | ai_all_markers        | ai_ase_markers        |            comb.pval |        mean.delta |                 rawp |           Bonferroni |                  ABH |   FPKM | loo.source | loo.cohort.size |           loo.pval | loo.rank | imprinting.status | candidate.group |
| --------- | ----- | ----- | ------ | -------: | -------: | ------------ | ---------- | ------: | ----------: | -------------: | -------------: | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------- | --------------------- | -------------------: | ----------------: | -------------------: | -------------------: | -------------------: | -----: | ---------- | --------------: | -----------------: | -------: | ----------------- | --------------- |
| NM_145804 | ABTB2 | chr11 | -      | 34172533 | 34379555 | cmpl         | cmpl       |       5 |           5 |            0.5 |          0.500 | 0.001953125,0.001953125,0.001953125,6.10351562500001e-05,0.000244140625 | 0.001953125,0.001953125,0.001953125,6.10351562500001e-05,0.000244140625 | 0.5,0.5,0.5,0.5,0.5   | 0.5,0.5,0.5,0.5,0.5   | 0.000644290972057077 |               0.5 | 0.000644290972057077 |    0.632049443587993 |   0.0110866672927557 | 7.6776 | bi_cohort  |              40 | 0.0367241086505276 |        1 |                   | ase_outlier     |
| NM_003189 | TAL1  | chr1  | -      | 47681961 | 47698007 | cmpl         | cmpl       |       2 |           2 |          0.482 |          0.482 | 6.66361745922277e-28,3.30872245021211e-24                               | 6.66361745922277e-28,3.30872245021211e-24                               | 0.464912280701754,0.5 | 0.464912280701754,0.5 | 4.69553625126628e-26 | 0.482456140350877 | 4.69553625126628e-26 | 4.60632106249222e-23 | 6.11761294450693e-24 | 8.8168 | white_list |             167 | 0.0139385771987089 |        1 |                   | ase_outlier     |

### SV candidates

Structural variant (SV) candidates include candidates predicted as the causal
for the cis-activated genes in the regulatory territory.

  * `left.candidate.inTAD`: cis-activated candidate near the left breakpoint
  * `right.candidate.inTAD`: cis-activated candidate near the right breakpoint
  * `chrA`: chromosome name of the left breakpoint
  * `posA`: genomic location of the left breakpoint
  * `ortA`: strand orientation of the left breakpoint
  * `chrB`: chromosome name of the right breakpoint
  * `posB`: genomic location of the right breakpoint
  * `ortB`: strand orientation of the right breakpoint
  * `type`: type of translocation

<h5>Example</h5>

| left.candidate.inTAD | right.candidate.inTAD | chrA  |     posA | ortA | chrB |      posB | ortB | type |
| -------------------- | --------------------- | ----- | -------: | ---- | ---- | --------: | ---- | ---- |
| LMO2                 |                       | chr11 | 33913169 | +    | chr7 | 142494049 | -    | CTX  |

### CNA candidates

Copy number aberration (CNA) candidates include candidates predicted as the
causal for the cis-activated genes in the regulatory territory.

  * `candidate.inTAD`: cis-activated candidate by the CNA
  * `chr`: chromosome name
  * `start`: genomic start position
  * `end`: genomic end location
  * `logR`: log ratio of the CNA

### SNV/indel candidates

SNV/indel candidates include predicted candidates as functional and predicted
transcription factors. The mutations are also annotated for known regulatory
elements reported by the [NIH Roadmap Epigenomics Project] by collecting 111
cell lines.

  * `chrom`: chromosome name
  * `pos`: genomic start position
  * `ref`: reference allele genotype
  * `mut`: mutant allele genotype
  * `type`: mutation type (either `snv` or `indel`)
  * `target`: cis-activated candidate
  * `dist`: distance between the mutation and transcription start sites of the target gene
  * `tf`: transcription factors predicted to have the binding motif introduced by the mutation
  * `EpiRoadmap_enhancer`: enhancer regions that overlap with the mutation (from the [NIH Roadmap Epigenomics Project])
  * `EpiRoadmap_promoter`: promoter regions that overlap with the mutation (from the [NIH Roadmap Epigenomics Project])
  * `EpiRoadmap_dyadic`: dyadic regions that overlap with the mutation (from the [NIH Roadmap Epigenomics Project])

<h5>Example</h5>

| chrom |      pos | ref | mut | type | target | dist | tf                          | EpiRoadmap_enhancer | EpiRoadmap_promoter                                                          | EpiRoadmap_dyadic |
| ----- | -------: | --- | --- | ---- | ------ | ---- | --------------------------- | ------------------- | ---------------------------------------------------------------------------- | ----------------- |
| chr1  | 47696311 | C   | T   | snv  | TAL1   | 1696 | BCL11A,CEBPG,PBX2,YY1,ZBTB4 |                     | Brain,Digestive,ES-deriv,ESC,HSC & B-cell,Heart,Muscle,Other,Sm. Muscle,iPSC |                   |

### OHE results

OHE results are the raw results for the outlier expression test.

  * `Gene`: gene symbol
  * `fpkm.raw`: FPKM value
  * `size.bi`: number of cases in the bi-allelic reference cohort
  * `p.bi`: p-value in the outlier test using the bi-allelic reference cohort
  * `rank.bi`: rank of the expression level in the case under analysis compared to the bi-allelic reference cohort
  * `size.cohort`: number of cases in the entire reference cohort
  * `p.cohort`: p-value in the outlier test using the entire reference cohort
  * `rank.cohort`: rank of the expression level in the case under analysis compared to the entire reference cohort
  * `size.white`: number of cases in the whitelist reference cohort
  * `p.white`: p-value in the outlier test using the whitelist reference cohort
  * `rank.white`: rank of the expression level in the case under analysis compared to the whitelist reference cohort

<h5>Example</h5>

| Gene | fpkm.raw | size.bi |              p.bi | rank.bi | size.cohort |          p.cohort | rank.cohort | size.white | p.white | rank.white |
| ---- | -------: | ------: | ----------------: | ------: | ----------: | ----------------: | ----------: | ---------: | ------: | ---------: |
| 7SK  |   4.5937 |      na |                na |      na |         264 | 0.716284011918374 |         162 |         na |      na |         na |
| A1BG |   0.2312 |      24 | 0.900132642257996 |      21 |         264 |  0.84055666600945 |         222 |         na |      na |         na |

### Gene level ASE results

Gene level ASE results are the raw results from the gene level ASE test.

  * `gene`: gene accession number ([RefSeq] ID)
  * `gsym`: gene symbol
  * `chrom`: chromosome name
  * `strand`: strand orientation
  * `start`: genomic start location
  * `end`: genomic end location
  * `cdsStartStat`: coding sequence (CDS) start status
  * `cdsEndStat`: coding sequence (CDS) end status
  * `markers`: number of heterozygous markers in this gene
  * `ase_markers`: number of heterozygous markers showing allelic specific expressions (ASE)
  * `average_ai_all`: average B-allele frequency (BAF) difference between RNA and DNA for all heterozygous markers
  * `average_ai_ase`: average BAF difference between RNA and DNA for ASE markers
  * `pval_all_markers`: p-value for each marker in the ASE test
  * `pval_ase_markers`: p-value for ASE markers in the ASE test
  * `ai_all_markers`: BAF difference between RNA and DNA for all heterozygrous markers
  * `ai_ase_markers`: BAF difference between RNA and DNA for ASE markers
  * `comb.pval`: combined p-value for the ASE test
  * `mean.delta`: average BAF difference between RNA and DNA for all markers
  * `rawp`: raw p-value for the ASE test
  * `Bonferroni`: adjusted p-value for the ASE test (single-step Bonferroni)
  * `ABH`: adjusted p-value for the ASE test (Benjamini-Hochberg)

<h5>Example</h5>

| gene      | gsym     | chrom | strand |     start |       end | cdsStartStat | cdsEndStat | markers | ase_markers | average_ai_all | average_ai_ase | pval_all_markers                     | pval_ase_markers | ai_all_markers                         | ai_ase_markers |         comb.pval |         mean.delta |              rawp | Bonferroni |               ABH |
| --------- | -------- | ----- | ------ | --------: | --------: | ------------ | ---------- | ------: | ----------: | -------------: | -------------: | ------------------------------------ | ---------------- | -------------------------------------- | -------------- | ----------------: | -----------------: | ----------------: | ---------: | ----------------: |
| NM_024684 | AAMDC    | chr11 | +      |  77532207 |  77583398 | cmpl         | cmpl       |       2 |           0 |          0.079 |             na | 0.924775093657227,0.0331439677875056 | na               | 0.00892857142857145,0.149122807017544  | na             | 0.175073458624837 | 0.0790256892230577 | 0.175073458624837 |          1 | 0.480780882445856 |
| NM_015423 | AASDHPPT | chr11 | +      | 105948291 | 105969419 | cmpl         | cmpl       |       2 |           0 |          0.023 |             na | 0.749258624760841,1                  | na               | 0.0384615384615384,0.00769230769230766 | na             |  0.86559726476049 |  0.023076923076923 |  0.86559726476049 |          1 | 0.873257417545981 |

### Single marker ASE results

Single marker ASE results are the raw results from the single marker ASE test.

  * `chrom`: chromosome name
  * `pos`: genomic start position
  * `ref`: reference allele genotype
  * `mut`: non-reference allele genotype
  * `cvg_wgs`: coverage of the marker from the whole genome sequence (WGS)
  * `mut_freq_wgs`: non-reference allele fraction in the WGS
  * `cvg_rna`: coverage of the marker from the RNA-Seq
  * `mut_freq_rna`: non-reference allele fraction in the RNA-Seq
  * `ref.1`: read count of the reference allele in the RNA-Seq
  * `var`: read count of the non-reference allele in the RNA-Seq
  * `pvalue`: p-value from the binomial test
  * `delta.abs`: absolute difference of the non-reference allele fraction between the WGS and RNA-Seq

<h5>Example</h5>

| chrom |    pos | ref | mut | cvg_wgs | mut_freq_wgs | cvg_rna | mut_freq_rna | ref.1 |  var |               pvalue |          delta.abs |
| ----- | -----: | --- | --- | ------: | -----------: | ------: | -----------: | ----: | ---: | -------------------: | -----------------: |
| chr11 | 204147 | G   | A   |      36 |        0.472 |      85 |        0.553 |    38 |   47 |    0.385669420119278 | 0.0529411764705883 |
| chr11 | 205198 | C   | A   |      23 |        0.522 |      83 |        0.313 |    57 |   26 | 0.000877551780002863 |  0.186746987951807 |

## Frequently asked questions

None yet! If you have any questions not covered here, feel free to reach
out on [our contact form](https://hospital.stjude.org/apps/forms/fb/st-jude-cloud-contact/).

[Ensembl]: http://www.ensembl.org/
[RefSeq]: https://www.ncbi.nlm.nih.gov/refseq/
[NIH Roadmap Epigenomics Project]: https://egg2.wustl.edu/roadmap/web_portal/index.html

## Similar Topics

[Running our Workflows](../../analyzing-data/running-sj-workflows)  
[Working with our Data Overview](../../managing-data/working-with-our-data)   
[Upload/Download Data (local)](../../managing-data/upload-local)   

<h2 id="Footnotes">Footnotes</h2>

<small>

  <sup>1</sup> Pediatric Translational Medicine Institute, Shanghai Children's
  Medical Center, Shanghai Jiao Tong University School of Medicine, Shanghai,
  China

  <sup>2</sup> Department of Computational Biology, St. Jude Children's
  Research Hospital, Memphis, TN 38105, USA

  <sup>3</sup> Department of Tumor Cell Biology, St. Jude Children's Research
  Hospital, Memphis, TN 38105, USA

  <sup>4</sup> Key Laboratory of Pediatric Hematology & Oncology Ministry of
  Health, Department of Hematology & Oncology, Shanghai Children's Medical
  Center, Shanghai Jiao Tong University School of Medicine, Shanghai, China

  <sup>5</sup> Department of Pharmaceutical Sciences, St. Jude Children's
  Research Hospital, Memphis, TN 38105, USA

  <sup>6</sup> Hematological Malignancies Program, St. Jude Children's Research
  Hospital, Memphis, TN 38105, USA

  <sup>7</sup> Department of Oncology, St. Jude Children's Research Hospital,
  Memphis, TN 38105, USA

  <sup>8</sup> Children's Hospital of Soochow University, Suzhou, Jiangsu,
  China

  <sup>9</sup> Department of Pediatric Oncology, Dana-Farber Cancer Institute,
  Harvard Medical School, Boston, MA 02215, USA

  <sup>10</sup> Division of Pediatric Hematology-Oncology, Boston Children's
  Hospital, MA 02115, USA

  <sup>\*</sup> Contributed equally to this work.

  <sup>#</sup> Correspondence should be addressed to Y.L. (liuyu@scmc.com.cn)
  or J.Z. (jinghui.zhang@stjude.org).

</small>
