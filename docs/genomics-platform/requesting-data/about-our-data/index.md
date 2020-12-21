---
title: About Our Data
---

# About Our Data
    
## File Formats

St. Jude Cloud hosts both raw genomic data files and processed results files:

| File Type      | Short Description                                                                                                  | Details                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| BAM            | HG38 aligned BAM files produced by [Microsoft Genomics Service][msgen] (DNA-Seq) or STAR 2-pass mapping (RNA-Seq). | [Click here](#bam-files)            |
| gVCF           | [Genomic VCF][gvcf-spec] files produced by [Microsoft Genomics Service][msgen].                                    | [Click here](#gvcf-files)           |
| Somatic VCF    | Curated list of somatic variants produced by the St. Jude somatic variant analysis pipeline.                       | [Click here](#somatic-vcf-files)    |
| CNV            | List of somatic copy number alterations produced by St. Jude CONSERTING pipeline.                                  | [Click here](#cnv-files)            |
| Feature Counts | Curated list of read counts mapped to each gene produced by [HTSeq](https://htseq.readthedocs.io/en/master/)       | [Click here](#feature-counts-files) |


### BAM files

In St. Jude Cloud, we store aligned sequence reads in BAM file format for whole genome sequencing, whole exome sequencing, and RNA-seq. For more information on SAM/BAM files, please refer to the [SAM/BAM specification][bam-spec]. For research samples, we require the standard 30X coverage for whole genome and 100X for whole exome sequencing. For clinical samples, we require higher coverage, 45X, for whole genome sequencing due to tumor purity issues found in clinical tumor specimens. For RNA-Seq, since only a subset of genes are expressed in a specific tissue, we require 30% of the exons to have 20X coverage in order to ensure that at least 30% of the expressed genes have sufficient coverage.

### gVCF files

We provide gVCF files produced by the [Microsoft Genomics Service][msgen]. gVCF files are derived from the BAM files produced above as called by [GATK's haplotype caller][gatk-haplotype-caller]. Today, we defer to [the official specification document][gvcf-spec] from the Broad Institute, as well as [this discussion][gvcf-diff-from-vcf] on the difference between VCF and gVCF files. For more information about how Microsoft Genomics produces gVCF files or any other questions regarding data generation, please refer to [the official Microsoft Genomics whitepaper][msgen-whitepaper].

### Somatic VCF files

Somatic VCF files contain HG38 based SNV/Indel variant calls from the St. Jude somatic variant analysis pipeline as follows. Broadly speaking:

1. Reads were aligned to HG19 using [bwa backtrack][bwa] (`bwa aln` + `bwa sampe`) using default parameters.
2. Post processing of aligned reads was performed using [Picard][picard] `CleanSam` and `MarkDuplicates`.
3. Variants were called using the [Bambino][bambino-paper] variant caller (you can download Bambino [here][bambino-download] or by navigating to the [Zhang Lab page][bambino-program] where the  "Bambino package" is listed as a dependency under the CONSERTING section).
4. Variants were post-processed using an in-house post-processing pipeline that cleans and annotates variants. This pipeline is not currently publicly available.
5. Variants were manually reviewed by analysts and published with [the relevant Pediatric Cancer Genome Project (PCGP) paper][pcgp-landing-page].
6. Post-publication, variants were lifted over to HG38 (the original HG19 coordinates are stored in the `HG19` INFO field.).

!!!note
**Our Somatic VCF files were designed specifically for St. Jude Cloud visualization purposes. Variants in these files were manually curated from analyses across multiple sequencing types including WGS and WES.**  
For more information on variants for each of the individuals, please refer to the relevant PCGP paper. For more information on the variant calling format (VCF), please see the latest specification for VCF document listed [here][hts-specs].
!!!


### CNV files

CNV files contain copy number alteration (CNA) analysis results for paired tumor-normal WGS samples. Files are produced by running paired tumor-normal BAM files through the [CONSERTING][conserting] pipeline which identifies CNA through iterative analysis of (i) local segmentation by read depth within boundaries identified by structural variation (SV) breakpoints followed by (ii) segment merging and local SV analysis. [CREST][crest] was used to identify local SV breakpoints. CNV files contain the following information:

| Field         | Description                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| chrom         | chromosome                                                                                                                                                   |
| loc.start     | start of segment                                                                                                                                             |
| loc.end       | end of segment                                                                                                                                               |
| num.mark      | number of windows retained in the segment (gaps and windows with low mappability are excluded)                                                               |
| length.ratio  | The ratio between the length of the used windows to the genomic length                                                                                       |
| seg.mean      | The estimated GC corrected difference signal (2 copy gain will have a seg.mean of 1)                                                                         |
| GMean         | The mean coverage in the germline sample (a value of 1 represents diploid)                                                                                   |
| DMean         | The mean coverage in the tumor sample                                                                                                                        |
| LogRatio      | Log2 ratio between tumor and normal coverage                                                                                                                 |
| Quality score | A empirical score used in merging                                                                                                                            |
| SV_Matching   | Whether the boundary of the segments were supported by SVs (3: both ends supported, 2: right end supported, 1: left end supported, 0: neither end supported) |


[crest]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3527068/
[conserting]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4591043/
[bwa]: http://bio-bwa.sourceforge.net/
[picard]: https://broadinstitute.github.io/picard/
[bambino-paper]: https://academic.oup.com/bioinformatics/article/27/6/865/236751
[bambino-program]: https://www.stjuderesearch.org/site/lab/zhang
[bambino-download]: http://ftp.stjude.org/pub/software/conserting/bambino-1.0.jar
[pcgp-landing-page]: https://www.stjude.org/research/pediatric-cancer-genome-project.html
[hts-specs]: https://samtools.github.io/hts-specs/
[msgen]: https://azure.microsoft.com/en-us/services/genomics/
[msgen-whitepaper]: https://azure.microsoft.com/en-us/resources/accelerate-precision-medicine-with-microsoft-genomics/
[gatk-haplotype-caller]: https://software.broadinstitute.org/gatk/documentation/tooldocs/3.8-0/org_broadinstitute_gatk_tools_walkers_haplotypecaller_HaplotypeCaller.php
[gvcf-spec]:https://software.broadinstitute.org/gatk/documentation/article?id=11004
[gvcf-diff-from-vcf]: https://software.broadinstitute.org/gatk/documentation/article?id=4017
[bam-spec]: https://samtools.github.io/hts-specs/SAMv1.pdf
[star-manual]: https://github.com/alexdobin/STAR/blob/a22ad18600c827841e3fcd74118e9baac75669f4/doc/STARmanual.pdf
[ercc]: https://www.thermofisher.com/order/catalog/product/4456740

### Feature Counts files

Feature counts are text files that contain counts of reads aligned to genomic features. St. Jude Cloud feature files are generated using HTSeq. The detailed command is documented in our [RNA-Seq V2 RFC][rnaseq-rfc]. The files contain a count of the number of reads overlapping each genomic feature, in this case, genes as specified in [GENCODE V31][gencode]. St. Jude Cloud uses the gene name as feature key. The files are tab-delimited text and contain the feature key and read count for that feature. 

[rnaseq-rfc]: https://stjudecloud.github.io/rfcs/0001-rnaseq-workflow-v2.0.0.html#specification
[gencode]: https://www.gencodegenes.org/human/release_31.html

## Sequencing Information 

### Whole Genome and Whole Exome
Whole Genome Sequence (WGS) and Whole Exome Sequence (WES) BAM files were produced by the [Microsoft Genomics Service][msgen] aligned to HG38 (GRCh38 no alt analysis set). For more information about how Microsoft Genomics produces BAM files or any other questions regarding data generation, please refer to [the official Microsoft Genomics whitepaper][msgen-whitepaper].

### RNA-Seq

RNA-Seq BAM files are mapped to HG38. For alignment, `STAR` v2.7.1a 2-pass mapping is used. Below is the `STAR` command used during alignment. For more information about any of the parameters used, please refer to the [STAR manual][star-manual] for v2.7.1a. The complete RNA-Seq WDL pipeline is available on [GitHub](https://github.com/stjudecloud/workflows/blob/master/workflows/rnaseq/rnaseq-standard.wdl). The STAR alignment parameters are also available on [GitHub](https://github.com/stjudecloud/workflows/blob/master/tools/star.wdl). 

```bash
    STAR \
             --readFilesIn $(cat read_one_fastqs_sorted.txt) $(cat read_two_fastqs_sorted.txt) \
             --genomeDir ~{stardb_dir} \
             --runThreadN $n_cores \
             --outSAMunmapped Within \
             --outSAMstrandField intronMotif \
             --outSAMtype BAM Unsorted \
             --outSAMattributes NH HI AS nM NM MD XS \
             --outFilterMultimapScoreRange 1 \
             --outFilterMultimapNmax 20 \
             --outFilterMismatchNmax 10 \
             --alignIntronMax 500000 \
             --alignMatesGapMax 1000000 \
             --sjdbScore 2 \
             --alignSJDBoverhangMin 1 \
             --outFilterMatchNminOverLread 0.66 \
             --outFilterScoreMinOverLread 0.66 \
             --outFileNamePrefix ~{output_prefix + "."} \
             --twopassMode Basic \
             --limitBAMsortRAM ~{(memory_gb - 2) + "000000000"} \
             --outSAMattrRGline $(cat read_groups_sorted.txt)
```

## Data Access Units
We currently have the five [Data Access Units (DAU)](../glossary/#data-access-unit) listed below. [Basic clinical data](#clinical-and-phenotypic-information) is available for relevant subjects in each DAU. Click on the DAU's abbreviation below to navigate directly to that DAU's [Study page](../../studies/) for more detailed information.

### Pediatric Cancer Genome Project (PCGP)
**[PCGP](https://stjude.cloud/studies/pediatric-cancer-genome-project) is a paired-tumor normal dataset focused on discovering the genetic origins of pediatric cancer.**
The Pediatric Cancer Genome Project is a collaboration between St. Jude Children's Research Hospital and the McDonnell Genome Institute at Washington University School of Medicine that sequenced the genomes of over 600 pediatric cancer patients. 

### St. Jude Lifetime (SJLIFE)
**[SJLIFE](https://sjlife.stjude.org/) is a germline-only dataset focused on studying the long-term adverse outcomes associated with cancer and cancer-related therapy.**
St. Jude Lifetime (SJLIFE) is a longevity study from St. Jude Children's Research Hospital that aims to identify all inherited genome sequence and structural variants influencing the development of childhood cancer and occurrence of long-term adverse outcomes associated with cancer and cancer-related therapy. This cohort contains unpaired germline samples and does not contain tumor samples. 

### Clinical Genomics (Clinical Pilot, G4K, and RTCG)
**[Clinical Genomics](https://stjude.cloud/studies/clinical-genomics) is a paired tumor-normal dataset focused on identifying variants that influence the development and behavior of childhood tumors.**
Clinical Genomics is a cohort from St. Jude Children's Research Hospital, comprised of three studies: Clinical Pilot, Genomes4Kids, and Real-time Clinical Genomics. Clinical Pilot is a smaller, pilot study generated to asses the validity and accuracy of moving forward with the G4K study. The RTCG study aims to release Clinical Genomics data in real time to the research community. The goal of these studies is to identify all inherited and tumor-acquired (somatic) genome sequence and structural variants influencing the development and behavior of childhood tumors. 

### Sickle Cell Genome Project (SGP)
**[SGP](https://sickle-cell.stjude.cloud/) is a germline-only dataset of Sickle Cell Disease (SCD) patients from birth to young adulthood.**
The Sickle Cell Genome Project (SGP) is a collaboration between St. Jude Children’s Research Hospital and Baylor College of Medicine focused on identifying genetic modifiers that contribute to various health complications in SCD patients. Additional objectives include, but are not limited to, developing accurate methods to characterize germline structural variants in highly homologous globin locus and blood typing.

### Childhood Cancer Survivor Study (CCSS)
**[CCSS](https://stjude.cloud/studies/clinical-genomics) is a germline-only dataset consisting of whole genome sequencing of childhood cancer survivors.**
CCSS is a multi-institutional, multi-disciplinary, NCI-funded collaborative resource established to evaluate long-term outcomes among survivors of childhood cancer. It is a retrospective cohort consisting of >24,000 five-year survivors of childhood cancer who were diagnosed between 1970-1999 at one of 31 participating centers in the U.S. and Canada. The primary purpose of this sequencing of CCSS participants is to identify all inherited genome sequence and structural variants influencing the development of childhood cancer and occurrence of long-term adverse outcomes associated with cancer and cancer-related therapy. 

!!!warning "CCSS: Potential Bacterial Contamination"

Samples for the Childhood Cancer Survivorship Study were collected by sending out Buccal swab kits to enrolled participants and having them complete the kits at home. This mechanism of collecting saliva and buccal cells for sequencing is highly desirable because of its non-invasive nature and ease of execution. However, collection of samples in this manner also has higher probability of contamination from external sources (as compared to, say, samples collected using blood). We have observed some samples in this cohort which suffer from bacterial contamination. To address this issue, we have taken the following steps:

1. We have estimated the bacterial contamination rate and annotated each of the samples in the CCSS cohort. For each sample, you will find the estimated contamination rate in the `Description` field of the `SAMPLE_INFO.txt` file that is vended with your data (and as a property on the DNAnexus file). For information on this field, see the [Metadata specification](#metadata).
2. Using this estimated contamination rate, we have removed 82 samples which exhibited large rates of bacterial contamination.
3. For the remaining samples, we have provided the `BAM` file as aligned with `bwa mem` with default parameters. We have observed that there are instances of reads originating from bacterial contamination that are erroneously mapped to the human genome and display a *very* low mapping quality. Please be advised that we have kept these reads as they were aligned and have not yet made any attempt to unmap these reads. Any analysis you perform on these samples will need to take this into account!
4. Last, we will be working over the coming months to unmap the reads originating from bacterial contamination and release updated `BAM` files along with the associated `gVCF` files from Microsoft Genomics Service.

With any questions on the nature or implications of this warning, please contact us at [support@stjude.cloud](mailto:support@stjude.cloud).
!!!

### Pan-Acute Lymphoblastic Leukemia (PanALL)
PanALL comprises cases of B-progenitor and T-lineage ALL encompassing the spectrum of ALL subtypes across the age continuum. Samples sequenced were obtained from multiple sites, centers and cooperative groups including St. Jude Children’s Research Hospital, The Children’s Oncology Group, The Alliance – Cancer and Leukemia Group B, the Eastern Cooperative Oncology Group, The Southwestern Oncology group, MD Anderson Cancer Center, City of Hope National Medical Center, Princess Margaret Cancer Center, Northern Italy Leukemia Group, and UKALL.

## Metadata 

Each data request includes a text file called `SAMPLE_INFO.txt` that provides a number of file level properties (sample identifiers, clinical attributes, etc).

### Standard Metadata

 Below are the set of tags which *may* exist for any given file in St. Jude Cloud. All optional metadata will have `sj_` prepended to their tag name.

| Property             | Description                                                                                                                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| file_path            | The path to the file in your St. Jude Cloud project.                                                                                                                                                                                                                               |
| subject_name         | A unique subject identifier assigned internally at St. Jude.                                                                                                                                                                                                                       |
| sample_name          | A unique sample identifier assigned internally at St. Jude.                                                                                                                                                                                                                        |
| sample_type          | One of Autopsy, Cell line, Diagnosis, Germline, Metastasis, Relapse, or Xenograft.                                                                                                                                                                                                 |
| sequencing_type      | Whether the file was generated from Whole Genome (WGS), Whole Exome (WES), or RNA-Seq.                                                                                                                                                                                             |
| file_type            | One of the file types available in St. Jude Cloud.                                                                                                                                                                                              |
| description          | Optional field that may contain additional file information.                                                                                                                                                                                                                       |
| sj_diseases          | If your data request was process after August 18, 2020, the field should be interpreted as the harmonized St. Jude Cloud diagnosis based on the best available information (data provided by the lab or PI and followup by scientists on the St. Jude Cloud team). If your data request was processed before August 18, 2020, this field should be interpreted as the disease identifier assigned at the time of genomic sequencing (keyly, the diagnosis known at the time of genomic testing may not be the best available information). **If your data request was processed after August 18, 2020 and you'd like to use the most up to date, harmonized diagnosis**, we recommend using `sj_diseases` when including diagnosis in your analysis. If your data request was made before this time *or* if you wish to use the values exactly as provided by the lab or PI, we recommend using the lab-provided value in `attr_diagnosis`. |
| sj_datasets          | If present, the datasets in the data browser which this file is associated with.                                                                                                                                                                                                   |
| sj_pmid_accessions   | If the file was associated with a paper, the related [Pubmed][pubmed] accession number.                                                                                                                                                                                            |
| sj_ega_accessions    | If the file was associated with a paper, the related [EGA][ega] accession number.                                                                                                                                                                                                  |
| sj_dataset_accession | If present, the permanent accession number assigned in St. Jude Cloud.                                                                                                                                                                                                             |
| sj_embargo_date      | The [embargo date](../glossary/#embargo-date), which specifies the first date which the files can be used in a publication.                                                                                                                                                         |

### Clinical and Phenotypic Information

Also included is a set of phenotypic information queried from the physician or research team's records at the time of sample submission to St. Jude Cloud. These are all considered to be *optional*, as the level of information gathered for each sample varies. If empty, the physician or research team did not indicate a value for the field. All basic clinical or phenotypic information will have `attr_` prepended to their tag name.

| Property                   | Description                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| attr_age_at_diagnosis      | Age at first diagnosis. This field is normalized as a decimal value. If empty, the physician or research team did not indicate a value for this field. |
| attr_diagnosis             | Unharmonized primary diagnosis as reported by the lab or PI upon submission of data to St. Jude Cloud.                                                 |
| attr_ethnicity             | Self-reported ethnicity. Values are normalized according to the [US Census Bureau classifications][censusburea].                                       |
| attr_race                  | Self-reported race. Values are normalized according to the [US Census Bureau classifications][censusburea].                                            |
| attr_sex                   | Self-reported sex.                                                                                                                                     |
| attr_oncotree_disease_code | The disease code (assigned at the time of genomic sequencing) as specified by [Oncotree Version 2019-03-01][oncotree_2019_03_01].                      |

### Diagnosis Codes

!!!note
During the release of the St. Jude Cloud paper, we undertook a massive effort to curate and harmonize diagnosis values within St. Jude Cloud. We provide two values for diagnosis, and you should select carefully which value you use based on your use case:
    
1. `sj_diseases`, which, since August 18, 2020, represents the harmonized diagnosis value curated by scientists on the St. Jude Cloud team (before that time it represented the diagnosis known at time of sequencing).
2. `attr_diagnosis`, which contains the unharmonized diagnosis value directly as it was submitted to us from the lab or PI.

**If your data request was processed after August 18, 2020 and you'd like to use the most up to date, harmonized diagnosis**, we recommend using `sj_diseases` field. If your data request was made before this time *or* if you wish to use the values exactly as provided by the lab or PI, we recommend using the value in `attr_diagnosis`.
!!!

The `SAMPLE_INFO.txt` file that comes with your data request will contain the list of associated harmonized diagnosis codes (`sj_diseases`) for each sample. These codes represent the harmonized diagnosis values curated by the St. Jude Cloud team and reflect the most up to date information about the sample. Below, we include the full set of diagnosis values in St. Jude Cloud Genomics Platform, the category of the tumor, and the closest available OncoTree term. We regularly work with the OncoTree committee to update new subtypes, so any discrepancies between our diagnosis code and the OncoTree term can be interpreted as more granular classifications that OncoTree does not yet account for.

| Tumor Category         | Diagnosis                                                      | Diagnosis Code | Corresponding Oncotree Code |
| ---------------------- | -------------------------------------------------------------- | -------------- | --------------------------- |
| Brain Tumor            | Astrocytoma, NOS                                               | ASTR           | ASTR                        |
| Brain Tumor            | Atypical Meningioma                                            | ATM            | ATM                         |
| Brain Tumor            | Atypical Teratoid/Rhabdoid Tumor                               | ATRT           | ATRT                        |
| Brain Tumor            | Central Neurocytoma                                            | CNC            | CNC                         |
| Brain Tumor            | Choroid Plexus Carcinoma                                       | CPC            | CPC                         |
| Brain Tumor            | Craniopharyngioma, Adamantinomatous Type                       | ACPG           | ACPG                        |
| Brain Tumor            | Craniopharyngioma, NOS                                         | CPG            | SELT                        |
| Brain Tumor            | Desmoplastic/Nodular Medulloblastoma                           | DMBL           | DMBL                        |
| Brain Tumor            | Dysembryoplastic Neuroepithelial Tumor                         | DNT            | DNT                         |
| Brain Tumor            | Embryonal Tumor with Multilayered Rosettes, Brain              | ETMR           | EMBT                        |
| Brain Tumor            | Embryonal Tumor, Brain                                         | EBMT           | EMBT                        |
| Brain Tumor            | Ependymomal Tumor                                              | EPMT           | EPMT                        |
| Brain Tumor            | Ependymomal Tumor, Posterior Fossa                             | EPMTPF         | EPMT                        |
| Brain Tumor            | Ependymomal Tumor, Spinal Tumor                                | EPMTST         | EPMT                        |
| Brain Tumor            | Ependymomal Tumor, Supratentorial                              | EPMTSU         | EPMT                        |
| Brain Tumor            | Fibrillary Astrocytoma                                         | FASTR          | DASTR                       |
| Brain Tumor            | Gangliocytoma                                                  | GNG            | GNG                         |
| Brain Tumor            | Glioblastoma                                                   | GB             | GB                          |
| Brain Tumor            | Glioma, NOS                                                    | GNOS           | GNOS                        |
| Brain Tumor            | High-Grade Glioma, NOS                                         | HGGNOS         | HGGNOS                      |
| Brain Tumor            | High-Grade Neuroepithelial Tumor                               | HGNET          | HGNET                       |
| Brain Tumor            | Low-Grade Glioma, NOS                                          | LGGNOS         | LGGNOS                      |
| Brain Tumor            | Medulloblastoma                                                | MBL            | MBL                         |
| Brain Tumor            | Medulloblastoma, Group 3                                       | MBLG3          | MBL                         |
| Brain Tumor            | Medulloblastoma, Group 4                                       | MBLG4          | MBL                         |
| Brain Tumor            | Medulloblastoma, SHH subtype                                   | MBLSHH         | MBL                         |
| Brain Tumor            | Medulloblastoma, WNT subtype                                   | MBLWNT         | MBL                         |
| Brain Tumor            | Medulloepithelioma                                             | MDEP           | MDEP                        |
| Brain Tumor            | Meningioma                                                     | MNG            | MNG                         |
| Brain Tumor            | Miscellaneous Brain Tumor                                      | MBT            | MBT                         |
| Brain Tumor            | Mixed Myxopapillary Anaplastic Ependymoma, Spinal Tumor        | MEPMST         | EPMT                        |
| Brain Tumor            | Myxopapillary Ependymoma                                       | MPE            | MPE                         |
| Brain Tumor            | Myxopapillary Ependymoma, Fourth Ventrice                      | MPEFV          | MPE                         |
| Brain Tumor            | Myxopapillary Ependymoma, Posterior Fossa                      | MPEPF          | MPE                         |
| Brain Tumor            | Neuroepithelioma                                               | NEP            | <NA>                        |
| Brain Tumor            | Oligodendroglioma                                              | ODG            | ODG                         |
| Brain Tumor            | Papillary Ependymoma, NOS                                      | PEPNOS         | EPMT                        |
| Brain Tumor            | Peripheral Primitive Neuroectodermal Tumor                     | PPNET          | PNET                        |
| Brain Tumor            | Pilocytic Astrocytoma                                          | PAST           | PAST                        |
| Brain Tumor            | Pineoblastoma                                                  | PBL            | PBL                         |
| Brain Tumor            | Pleomorphic Xanthoastrocytoma                                  | PXA            | PXA                         |
| Brain Tumor            | Primitive Neuroectodermal Tumor                                | PNET           | PNET                        |
| Brain Tumor            | Subependymal Giant Cell Astrocytoma                            | SEGA           | <NA>                        |
| Germ Cell Tumor        | Choriocarcinoma                                                | CCA            | <NA>                        |
| Germ Cell Tumor        | Dysgerminoma                                                   | DYS            | <NA>                        |
| Germ Cell Tumor        | Dysgerminoma, Ovarian                                          | ODYS           | ODYS                        |
| Germ Cell Tumor        | Dysgerminoma, Pelvis                                           | PDYS           | <NA>                        |
| Germ Cell Tumor        | Embryonal Carcinoma, NOS                                       | ECNOS          | <NA>                        |
| Germ Cell Tumor        | Germ Cell Tumor, Brain                                         | BGCT           | BGCT                        |
| Germ Cell Tumor        | Germ Cell Tumor, NOS                                           | GCT            | <NA>                        |
| Germ Cell Tumor        | Germinoma                                                      | GMN            | GMN                         |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, Brain                                   | BMGCT          | BMGCT                       |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, NOS                                     | MGCTNOS        | <NA>                        |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, Ovary and Lymph Node                    | OMGCT          | OMGCT                       |
| Germ Cell Tumor        | Mixed Germ Cell Tumor, Testis                                  | MGCT           | MGCT                        |
| Germ Cell Tumor        | Teratocarcinoma                                                | TTC            | <NA>                        |
| Germ Cell Tumor        | Teratoma, NOS                                                  | TTNOS          | <NA>                        |
| Germ Cell Tumor        | Yolk Sac Tumor, Brain                                          | BYST           | BYST                        |
| Germ Cell Tumor        | Yolk Sac Tumor, NOS                                            | YSTNOS         | <NA>                        |
| Hematologic Malignancy | Acute Leukemias of Ambiguous Lineage                           | ALAL           | ALAL                        |
| Hematologic Malignancy | Acute Lymphoblastic Leukemia, NOS                              | ALL            | LNM                         |
| Hematologic Malignancy | Acute Megakaryoblastic Leukemia                                | AMKL           | AMKL                        |
| Hematologic Malignancy | Acute Myeloid Leukemia                                         | AML            | AML                         |
| Hematologic Malignancy | Acute Myeloid Leukemia, Core Binding Factor                    | CBF            | AMLRGA                      |
| Hematologic Malignancy | Acute Myeloid Leukemia, KMT2A rearrangement                    | AML            | AMLRGA                      |
| Hematologic Malignancy | Acute Promyelocytic Leukemia                                   | APLPMLRARA     | APLPMLRARA                  |
| Hematologic Malignancy | Acute Undifferentiated Leukemia, KMT2A rearrangement           | AULKMT2A       | AUL                         |
| Hematologic Malignancy | Anaplastic Large Cell Lymphoma                                 | ALCL           | ALCL                        |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, BCR-ABL1                  | BALLBCRABL1    | BLLBCRABL1                  |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, BCR-ABL1 like             | BALLBCRABL1L   | BLLBCRABL1L                 |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, DUX4-IGH                  | BALLDUX4IGH    | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, DUX4-IGH like             | BALLDUX4IGHL   | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ETV6-RUNX1                | BALLETV6RUNX1  | BLLETV6RUNX1                |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ETV6-RUNX1 like           | BALLETV6RUNX1L | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, HLF rearrangement         | BALLHLF        | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, Hyperdiploidy             | BALLHYPER      | BLLHYPER                    |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, Hypodiploidy              | BALLHYPO       | BLLHYPO                     |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, iAMP21                    | BALLIAMP21     | BLLIAMP21                   |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, IGH-CEBPD                 | BALLIGHCEBPD   | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, KMT2A rearrangement       | BALLKMT2A      | BLLKMT2A                    |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, MEF2D rearrangement       | BALLMEF2D      | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, MYC rearrangement         | BALLMYC        | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, NOS                       | BALLNOS        | BLLNOS                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, NUTM1 rearrangement       | BALLNUTM1      | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, PAX5 Alteration           | BALLPAX5       | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, PAX5 P80R                 | BALLPAX5P80R   | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, TCF3-PBX1                 | BALLTCF3PBX1   | BLLTCF3PBX1                 |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ZNF384 rearrangement      | BALLZNF384     | BLLRGA                      |
| Hematologic Malignancy | B-cell Acute Lymphoblastic Leukemia, ZNF384 rearrangement like | BALLZNF384L    | BLLRGA                      |
| Hematologic Malignancy | Blood Cancer of Unknown Primary                                | BCUP           | CUP                         |
| Hematologic Malignancy | Burkitt Lymphoma                                               | BL             | BL                          |
| Hematologic Malignancy | Chronic Myeloid Leukemia                                       | CML            | CML                         |
| Hematologic Malignancy | Diffuse Large B-cell Lymphoma, NOS                             | DLBCLNOS       | DLBCLNOS                    |
| Hematologic Malignancy | General Leukemia                                               | SJGENLK        | <NA>                        |
| Hematologic Malignancy | Hodgkin Lymphoma                                               | HL             | HL                          |
| Hematologic Malignancy | Langerhans Cell Histiocytosis                                  | LCH            | LCH                         |
| Hematologic Malignancy | Lymphocyte-Depleted Classical Hodgkin Lymphoma                 | LDCHL          | LDCHL                       |
| Hematologic Malignancy | Lymphocyte-Rich Classical Hodgkin Lymphoma                     | LRCHL          | LRCHL                       |
| Hematologic Malignancy | Mixed Cellularity Classical Hodgkin Lymphoma                   | MCCHL          | MCCHL                       |
| Hematologic Malignancy | Mycosis Fungoides                                              | MYCF           | MYCF                        |
| Hematologic Malignancy | Myelodysplastic Syndromes                                      | MDS            | MDS                         |
| Hematologic Malignancy | Myeloid Sarcoma                                                | MS             | MS                          |
| Hematologic Malignancy | Nodular Lymphocyte-Predominant Hodgkin Lymphoma                | NLPHL          | NLPHL                       |
| Hematologic Malignancy | Nodular Sclerosis Classical Hodgkin Lymphoma                   | NSCHL          | NSCHL                       |
| Hematologic Malignancy | Non-Hodgkin Lymphoma                                           | NHL            | NHL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia                            | TALL           | TLL                         |
| Hematologic Malignancy | T-cell Acute Lymphoblastic Leukemia, KMT2A rearrangement       | TALLKMT2A      | TLL                         |
| Hematologic Malignancy | T-cell Lymphoblastic Lymphoma                                  | TLL            | TLL                         |
| Non-Malignancy         | Non-Malignancy                                                 | SJNM           | <NA>                        |
| Normal                 | SJLIFE Normal Control                                          | SJNORM         | <NA>                        |
| Sickle Cell Disease    | Sickle Cell Disease                                            | SJSCD          | <NA>                        |
| Solid Tumor            | Acinar Cell Carcinoma                                          | ACN            | ACN                         |
| Solid Tumor            | Adenocarcinoma, NOS                                            | ADNOS          | ADNOS                       |
| Solid Tumor            | Adrenocortical Carcinoma                                       | ACC            | ACC                         |
| Solid Tumor            | Alveolar Rhabdomyosarcoma                                      | ARMS           | ARMS                        |
| Solid Tumor            | Alveolar Soft Part Sarcoma                                     | ASPS           | ASPS                        |
| Solid Tumor            | Angiomatoid Fibrous Histiocytoma                               | AFH            | AFH                         |
| Solid Tumor            | Basal Cell Carcinoma                                           | BCC            | BCC                         |
| Solid Tumor            | Botryoid Type Embryonal Rhabdomyosarcoma                       | BERMS          | ERMS                        |
| Solid Tumor            | Carcinoma, NOS                                                 | CNOS           | CUP                         |
| Solid Tumor            | Chondroblastic Osteosarcoma                                    | CHOS           | CHOS                        |
| Solid Tumor            | Chondrosarcoma                                                 | CHS            | CHS                         |
| Solid Tumor            | Chordoma                                                       | CHDM           | CHDM                        |
| Solid Tumor            | Clear Cell Sarcoma of Kidney                                   | CCSK           | CCSK                        |
| Solid Tumor            | Congenital Mesoblastic Nephroma                                | CMN            | RCC                         |
| Solid Tumor            | Dermatofibrosarcoma Protuberans                                | DFSP           | DFSP                        |
| Solid Tumor            | Desmoid/Aggressive Fibromatosis                                | DES            | DES                         |
| Solid Tumor            | Desmoplastic Small Round Cell Tumor                            | DSRCT          | DSRCT                       |
| Solid Tumor            | Embryonal Rhabdomyosarcoma                                     | ERMS           | ERMS                        |
| Solid Tumor            | Endometrioid Adenocarcinoma, NOS                               | EACNOS         | ADNOS                       |
| Solid Tumor            | Epithelioid Hemangioendothelioma                               | EHAE           | EHAE                        |
| Solid Tumor            | Epithelioid Sarcoma                                            | EPIS           | EPIS                        |
| Solid Tumor            | Ewing Sarcoma                                                  | EWS            | ES                          |
| Solid Tumor            | Fibroblastic Osteosarcoma                                      | FIOS           | FIOS                        |
| Solid Tumor            | Fibromyxoid Sarcoma                                            | FMS            | <NA>                        |
| Solid Tumor            | Fibrosarcoma, NOS                                              | FIBS           | FIBS                        |
| Solid Tumor            | Follicular Thyroid Cancer                                      | THFO           | THFO                        |
| Solid Tumor            | Ganglioneuroblastoma                                           | GNBL           | GNBL                        |
| Solid Tumor            | Ganglioneuroma                                                 | GN             | GN                          |
| Solid Tumor            | Gastrointestinal Stromal Tumor                                 | GIST           | GIST                        |
| Solid Tumor            | General Bone Tumor                                             | SJGENBN        | <NA>                        |
| Solid Tumor            | Giant Cell Tumor, NOS                                          | GICT           | GCTB                        |
| Solid Tumor            | Granulosa Cell Tumor                                           | GRCT           | GRCT                        |
| Solid Tumor            | Hepatoblastoma                                                 | HB             | LIHB                        |
| Solid Tumor            | Hepatocellular Carcinoma                                       | HCC            | HCC                         |
| Solid Tumor            | Infantile Fibrosarcoma                                         | IFS            | IFS                         |
| Solid Tumor            | Leiomyosarcoma, NOS                                            | LMS            | LMS                         |
| Solid Tumor            | Liposarcoma                                                    | LIPO           | LIPO                        |
| Solid Tumor            | Liver Malignancy, NOS                                          | LMNOS          | <NA>                        |
| Solid Tumor            | Malignant Fibrous Histiocytoma                                 | MFH            | MFH                         |
| Solid Tumor            | Malignant Mesenchymoma                                         | MME            | <NA>                        |
| Solid Tumor            | Malignant Mesenchymoma of the Liver                            | MMEL           | <NA>                        |
| Solid Tumor            | Malignant Peripheral Nerve Sheath Tumor                        | MPNST          | MPNST                       |
| Solid Tumor            | Malignant Rhabdoid Tumor of the Liver                          | MRTL           | MRTL                        |
| Solid Tumor            | Melanoma                                                       | MEL            | MEL                         |
| Solid Tumor            | Mesenchymal Chondrosarcoma                                     | MCHS           | MCHS                        |
| Solid Tumor            | Mixed Spindle Cell and Embryonal Rhabdomyosarcoma              | MSCERMS        | RMS                         |
| Solid Tumor            | Mucinous Adenocarcinoma of the Colon and Rectum                | MACR           | MACR                        |
| Solid Tumor            | Mucinous Adenocarcinoma, NOS                                   | MACNOS         | <NA>                        |
| Solid Tumor            | Mucoepidermoid Carcinoma                                       | MUCC           | MUCC                        |
| Solid Tumor            | Nasopharyngeal Carcinoma                                       | NPC            | NPC                         |
| Solid Tumor            | Neuroblastoma                                                  | NBL            | NBL                         |
| Solid Tumor            | Neurofibroma                                                   | NFIB           | NFIB                        |
| Solid Tumor            | Osteosarcoma                                                   | OS             | OS                          |
| Solid Tumor            | Pancreatic Neuroendocrine Tumor                                | PANET          | PANET                       |
| Solid Tumor            | Papillary Renal Cell Carcinoma                                 | PRCC           | PRCC                        |
| Solid Tumor            | Papillary Thyroid Cancer                                       | THPA           | THPA                        |
| Solid Tumor            | Paraganglioma                                                  | PGNG           | PGNG                        |
| Solid Tumor            | Parosteal Osteosarcoma                                         | PAOS           | PAOS                        |
| Solid Tumor            | Periosteal Osteosarcoma                                        | PEOS           | PEOS                        |
| Solid Tumor            | Pleuropulmonary Blastoma                                       | PPB            | PPB                         |
| Solid Tumor            | Renal Cell Carcinoma                                           | RCC            | RCC                         |
| Solid Tumor            | Renal Clear Cell Carcinoma                                     | CCRCC          | CCRCC                       |
| Solid Tumor            | Retinoblastoma                                                 | RBL            | RBL                         |
| Solid Tumor            | Rhabdoid Cancer, Kidney                                        | MRT            | MRT                         |
| Solid Tumor            | Rhabdomyosarcoma                                               | RMS            | RMS                         |
| Solid Tumor            | Round Cell Sarcoma, NOS                                        | RCSNOS         | RCSNOS                      |
| Solid Tumor            | Serous Surface Papillary Carcinoma                             | SSPC           | <NA>                        |
| Solid Tumor            | Small Cell Osteosarcoma                                        | SCOS           | SCOS                        |
| Solid Tumor            | Soft Tissue Sarcoma, NOS                                       | STSNOS         | CUP                         |
| Solid Tumor            | Solid Cancer of Unknown Primary                                | SCUP           | CUP                         |
| Solid Tumor            | Solitary Fibrous Tumor/Hemangiopericytoma                      | SFT            | SFT                         |
| Solid Tumor            | Spindle Cell Rhabdomyosarcoma                                  | SCRMS          | SCRMS                       |
| Solid Tumor            | Spindle Cell Sarcoma, NOS                                      | SCSNOS         | <NA>                        |
| Solid Tumor            | Spindle Cell/Sclerosing Rhabdomyosarcoma                       | SCSRMS         | SCSRMS                      |
| Solid Tumor            | Spindle Epithelial Tumor with Thymus-Like Differentiation      | SETTLE         | <NA>                        |
| Solid Tumor            | Squamous Cell Carcinoma, NOS                                   | SCCNOS         | SCCNOS                      |
| Solid Tumor            | Stomach Inflammatory Pseudotumor                               | SIPT           | <NA>                        |
| Solid Tumor            | Synovial Sarcoma                                               | SYNS           | SYNS                        |
| Solid Tumor            | Telangiectatic Osteosarcoma                                    | TEOS           | TEOS                        |
| Solid Tumor            | Undifferentiated Embryonal Sarcoma of the Liver                | UESL           | UESL                        |
| Solid Tumor            | Wilms                                                          | WT             | WT                          |
| Solid Tumor            | Wilms, Bilateral                                               | WTB            | WT                          |



[pubmed]: https://www.ncbi.nlm.nih.gov/pubmed/
[ega]: https://www.ebi.ac.uk/ega/home
[censusburea]: https://www.census.gov/mso/www/training/pdf/race-ethnicity-onepager.pdf
[oncotree_2019_03_01]: http://oncotree.mskcc.org/#/home?version=oncotree_2019_03_01


## Similar Topics

[About our Decision Process & Terminology](../glossary)  
[Making a Data Request](../making-a-data-request)  
[Managing Data Overview](../../managing-data/working-with-our-data)  
