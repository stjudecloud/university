---
title: The Data Explained
---
The PeCan Knowledgebase is comprised of curated pediatric cancer genomics data including variants, mutational signatures, and gene expression data in addition to histological slide images from ~9000 hematological, CNS, and non-CNS solid tumor patient samples.

# Variants 

**ONCOPRINT METHODS**
All oncoprint visualizations have been generated using ProteinPaint's mutational landscape [study](https://proteinpaint.stjude.org/?appcard=study) views. 

**ONCOPRINT DATA**
Variant data represented within oncoprint visualizations are sourced from published studies from organizations including St. Jude Children’s Research Hospital, NCI-TARGET [TARGET](https://ocg.cancer.gov/programs/target), German Cancer Research Center [DKFZ](https://www.dkfz.de/en/index.html), and Shanghai Children's Medical Hospital. 

A user can access associated studies that involve a subset of the data displayed in the onocprint by clicking `Associated Study` where applicable. 

!!!tip
- The gene lists provided are not curated, however, a user may access `Associated Study` links that involve a subset of data shown.
    - An example of accessing an `Associated Study` for Medulloblastoma in the Variants data facet can be found [here](https://pecan-v2.staging.stjude.cloud/variants/oncoprint/BT%7CMB).
!!!

**VARIANT PREVALENCE METHODS**
Variant Prevalence is a custom interface portraying barplots (for selected genes) conveying the prevalence of each variant types for the displayed genes (selected as *described below*). In addition, Variant Origin, and Total number of Mutations are displayed.

***Mutation type proportion rules:***
Note that the gene lists provided are not curated, however, for each selected diagnosis cohort of samples, the occurrence gene among the samples therein are counted and ranked. A select number of diagnoses have curated gene pathways. If pathway information is available for the diagnosis cohort, 20 genes are listed, else we return a list of the top 50 genes.

!!!note
TTN, MUC16, LPR1B, C11orf95, and IGH are genes primarily not ranked in pediatric cancer, so these genes may not show in Variant Prevalence.
!!!

***Variant selection rules:***
Variant classes are found below with the definition of each. 

***Glossary of Classes***

| Mutation Class | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| MISSENSE       | a substitution variant in the coding region resulting in altered protein coding.                                  |
| FRAMESHIFT     | an insertion or deletion variant that alters the protein coding frame.                                            |
| NONSENSE       | a variant altering protein coding to produce a premature stopgain or stoploss.                                    |
| PROTEINDEL     | a deletion resulting in a loss of one or more codons from the product, but not altering the protein coding frame. |
| PROTEININS     | an insertion introducing one or more codons into the product, but not altering the protein coding frame.          |
| SPLICE         | a variant near an exon edge that may affect splicing functionality.                                               |
| SILENT         | a substitution variant in the coding region that does not alter protein coding.                                   |
| SPLICE_REGION  | a variant in an intron within 10 nt of an exon boundary.                                                          |
| UTR_5          | a variant in the 5' untranslated region.                                                                          |
| UTR_3          | a variant in the 3' untranslated region.                                                                          |
| EXON           | a variant in the exon of a non-coding RNA.                                                                        |
| INTRON         | an intronic variant.                                                                                              |
| CNV LOSS       | a copy number loss.                                                                                               |
| CNV GAIN       | a copy number gain.                                                                                               |

**Table 1. Mutation Class glossary.** Definition of variant classes that are provided in Oncoprint, Variant Prevalence, and ProteinPaint views. 

!!!warning
- Silent mutations and variants occurring within genes with mRNA accessions that do not start with 'NM' are excluded in our data. 
- UTR variants are only shown in ProteinPaint if coordinates are used to view between genes, otherwise variants may be hidden.
- CNV variant classes are not displayed in ProteinPaint.
!!!

***Variant origin count rules:***
If the variant origin is not recorded as germline, then it is counted as somatic, which also includes the relapse samples. When the variant origin is germline, the record is counted as germline.

***Glossary of Origins***

| Mutation Origin | Description                                             |
| --------------- | ------------------------------------------------------- |
| Germline        | a variant found in a normal sample of a cancer patient. |
| Somatic         | a variant found only in a tumor sample.                 |
| Relapse         | a variant that arose in recurrence tumor.               |

**Table 2. Mutation Origin glossary.** Definitition of origins listed.  

***Total # Mutations rules:***
This is the total number of variants for that given gene for the selected diagnosis and/or subtype divided by the gene with the largest variant total (*rounded to the nearest 50*) for that selected diagnosis and/or subtype. 

**VARIANT PREVALENCE DATA**
The most prevelant genes are shown based on the rules described above for variant selection and variant origin. The legend **Mutation Type** is the same variant classes used for the oncoprints. View **Glossary of Classes** above to learn more. 

!!!warning
* CNV data is only considered in the variant prevalence display for TARGET samples. 
!!!

The variants that will be used for the Variant Prevalence page are indicated in the below table.

| dataset_label | variant type                 |
| ------------- | ---------------------------- |
| BROAD         | snv, indel, sv               |
| DKFZ          | snv, indel, sv               |
| DKTK          | snv, indel                   |
| MAGIC         | snv, indel                   |
| PCGP          | snv, indel, sv, fusions      |
| SCMC          | snv, indel, sv, fusions      |
| SJCRH         | snv, indel, sv               |
| TARGET        | snv, indel, cnv, sv, fusions |
| UTSMC         | snv, indel                   |

**Table 3: Variant Prevelance.** The table provides the available variant information which are represented in PeCan per dataset. 

**GENOMEPAINT METHODS**

Documentation can be found [here](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit?usp=sharing). 

**GENOMEPAINT DATA** 

The `Pediatric2` dataset expands the original `Pediatric` dataset by adding non-coding variants and expression data. The additional data includes Genome for Kids (PMID: [34301788](https://pubmed.ncbi.nlm.nih.gov/34301788/)), Shanghai Children's Medical Center relapsed ALL cohort (PMID: [32632335](https://pubmed.ncbi.nlm.nih.gov/32632335/)), St Jude's Clinical cancer genomic profiling by three-platform sequencing study (PMID: [30262806](https://pubmed.ncbi.nlm.nih.gov/30262806/)), and St Jude's Pan-neuroblastoma analysis data study (PMID: [33056981](https://pubmed.ncbi.nlm.nih.gov/33056981/)).

| Ref Genome | Dataset            |
| ---------- | ------------------ |
| hg19       | Pediatric, PAN-ALL |
| hg38       | Pediatric, SJLIFE  |

**Table 4. GenomePaint datasets.** GenomePaint supports different combinations of datasets for each reference genome (hg19/hg38). 

**PROTEINPAINT METHODS**

Documentation can be found [here](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit?usp=sharing). 

**PROTEINPAINT DATA**
The `Pediatric` dataset consists of somatic variants and tumor RNA-seq data shown in the protein view. The dataset is comprised of the GRCh37/hg19 genome as well as data from the Pediatric Cancer Genome Project ([PCGP](https://permalinks.stjude.cloud/permalinks/pcgp)), NCI TARGET cohort, the Pan-TARGET study (PMID: [29489755](https://pubmed.ncbi.nlm.nih.gov/29489755/)), and the Shanghai Children's Medical Center T-ALL cohort (PMID: [32632335](https://pubmed.ncbi.nlm.nih.gov/32632335/)). A liftover of genomic variants and gene internals created the GRCh/hg38 dataset. The NCI's Genomic Data Commmons ([GDC](https://gdc.cancer.gov/about-gdc)) coagulates data from NCI-supported programs, such as TCGA and TARGET. The Clinical Interpretation of Variants in Cancer ([ClinVar](https://civicdb.org/)) is "an open-source platform for crowdsourced and expert-moderated cancer variant curation." Supported by the NIH, NHGRI, and NCI, CIViC is a richly curated oncology dataset (PMID: [28138153](https://pubmed.ncbi.nlm.nih.gov/28138153/)).

| Ref Genome | Dataset                         |
| ---------- | ------------------------------- |
| hg19       | Pediatric, COSMIC, ClinVar      |
| hg39       | Pediatric, GDC, COSMIC, ClinVar |

**Table 5. ProteinPaint dataset.** ProteinPaint supports different combinations of datasets for each reference genome (hg19/hg38). 

See below for more information regarding the glossary for origins and mutation classes.

**MUTATIONAL SIGNATURES (SNV) METHODS** 

Identification of COSMIC SBS signatures (v3.3) upon consideration of [somatic variants](https://university.stjude.cloud/docs/genomics-platform/about-our-data/file-formats-and-sequencing/#somatic-vcf-files) was performed using SigProfilerExtractor (v1.1.20) on pediatric tumor samples grouped by subtype.

**MUTATIONAL SIGNATURES DATA**
Sample data from G4K, PCGP, Clinical Pilot and Real-Time Clincal Genomics (RTCG) samples were considered for mutational signature detection analysis. 

!!!tip
An example of 790 tumor samples can be found in [Figure 5 of McLeod et al](https://cancerdiscovery.aacrjournals.org/content/11/5/1082.long).
!!!

# EXPRESSION

**EXPRESSION METHODS**
[RAPID RNA-Seq workflow](https://university.stjude.cloud/docs/genomics-platform/workflow-guides/rapid-rnaseq/) hosted on [St. Jude Cloud's Genomics Platform ](https://platform.stjude.cloud/workflows) was employed for the analysis of RNA-seq gene expression count data and plotted using [ProteinPaint's](https://proteinpaint.stjude.org/) scatterplot. 

**EXPRESSION DATA**
The sample data used to generate the expression scatterplot maps are from the G4K, PCGP, Clinical Pilot and Real-Time Clinical Genomics studies. 

!!!tip
An example of 1,574 RNA-Seq samples can be found in [McLeod et al](https://cancerdiscovery.aacrjournals.org/content/11/5/1082.long) and accessed [here](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/pediatric-blood-solid-and-brain-tumor-rna-seq-t-sne-plot-1574-samples~24).
!!!

# Histology 

**HISTOLOGY METHODS**
All slides (with H&E staining) come off the microscope in `.svs` format which are then uploaded and processed in Azure. Currently, each sample is only accompanied by one slide but we plan on extending this feature for multiple slides per sample. 

**HISTOLOGY DATA**
All histological images are shared by the [COMET Blue Sky Initiatve](https://www.stjude.org/research/initiatives/blue-sky.html) led by [Dr. Mike Dyer](https://www.stjude.org/directory/d/michael-dyer.html). A large subset of COMET slides are pending publication.

Interested in collaborating with your data? Reach out to us at [support@stjude.cloud](support@stjude.cloud).

