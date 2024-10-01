---
title: The Data Explained
---
The PeCan Knowledgebase consists of curated pediatric cancer genomics data, including variants, mutational signatures, gene expression data, and histological slide images from ~9000 hematological, CNS, and non-CNS solid tumor samples.

## Variants

### Oncoprint Methods
All oncoprint visualizations are generated using ProteinPaint's mutational landscape [study](https://proteinpaint.stjude.org/?appcard=study) views.

### Oncoprint Data
Variant data is sourced from published studies from St. Jude Children's Research Hospital, NCI-TARGET [TARGET](https://ocg.cancer.gov/programs/target), German Cancer Research Center [DKFZ](https://www.dkfz.de/en/index.html), and Shanghai Children's Medical Hospital. A user can access associated studies by clicking `Associated Study` where applicable.

> **Tip**  
> Gene lists are not curated. Access specific `Associated Study` links for subsets of data, such as the Medulloblastoma example [here](https://pecan-v2.staging.stjude.cloud/variants/oncoprint/BT%7CMB).

### Variant Prevalence Methods
Variant Prevalence uses custom barplots to show the prevalence of each variant type. For some diagnoses, curated gene pathways are available, showing the top 20 genes; otherwise, the top 50 genes are displayed.

### Mutation Class Glossary

| Mutation Class | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| MISSENSE       | A substitution variant altering protein coding.                               |
| FRAMESHIFT     | Insertion or deletion variant altering the protein coding frame.              |
| NONSENSE       | Premature stopgain or stoploss altering protein coding.                       |
| PROTEINDEL     | Deletion removing codons without altering the protein coding frame.           |
| PROTEININS     | Insertion adding codons without altering the protein coding frame.            |
| SPLICE         | Variant near an exon edge potentially affecting splicing functionality.       |
| SILENT         | Substitution variant in the coding region that does not alter protein coding. |
| SPLICE_REGION  | Variant in an intron within 10 nt of an exon boundary.                        |
| CNV LOSS       | Copy number loss.                                                             |
| CNV GAIN       | Copy number gain.                                                             |

> **Warning**  
> Silent mutations and UTR variants are excluded in some views. CNV classes are not displayed in ProteinPaint.

### Variant Origin Glossary

| Origin   | Description                                    |
| -------- | ---------------------------------------------- |
| Germline | Variant found in a normal sample of a patient. |
| Somatic  | Variant found only in a tumor sample.          |
| Relapse  | Variant found in a recurrence tumor.           |

### Variant Prevalence Data
The following table outlines the datasets and variant types used in PeCan:

| Dataset Label | Variant Type                 |
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

---

## GenomePaint

### GenomePaint Methods
Documentation for GenomePaint methods can be found [here](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit?usp=sharing).

### GenomePaint Data
The `Pediatric2` dataset expands the original `Pediatric` dataset by adding non-coding variants and expression data. The additional data includes:

- Genome for Kids (PMID: [34301788](https://pubmed.ncbi.nlm.nih.gov/34301788/))
- Shanghai Children's Medical Center relapsed ALL cohort (PMID: [32632335](https://pubmed.ncbi.nlm.nih.gov/32632335/))
- St. Jude's Clinical cancer genomic profiling by three-platform sequencing study (PMID: [30262806](https://pubmed.ncbi.nlm.nih.gov/30262806/))
- St. Jude's Pan-neuroblastoma analysis data study (PMID: [33056981](https://pubmed.ncbi.nlm.nih.gov/33056981/))

| Reference Genome | Datasets           |
| ---------------- | ------------------ |
| hg19             | Pediatric, PAN-ALL |
| hg38             | Pediatric, SJLIFE  |

**Table 1. GenomePaint datasets.** GenomePaint supports datasets for different reference genomes (hg19/hg38).

---

## ProteinPaint

### ProteinPaint Methods
Documentation for ProteinPaint methods can be found [here](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit?usp=sharing).

### ProteinPaint Data
The `Pediatric` dataset consists of somatic variants and tumor RNA-seq data, using the GRCh37/hg19 genome, as well as data from:

- Pediatric Cancer Genome Project ([PCGP](https://permalinks.stjude.cloud/permalinks/pcgp))
- NCI TARGET cohort
- Pan-TARGET study (PMID: [29489755](https://pubmed.ncbi.nlm.nih.gov/29489755/))
- Shanghai Children's Medical Center T-ALL cohort (PMID: [32632335](https://pubmed.ncbi.nlm.nih.gov/32632335/))

The GRCh38/hg38 dataset was created through liftover of genomic variants and gene internals. Additional data is drawn from NCI's Genomic Data Commons ([GDC](https://gdc.cancer.gov/about-gdc)) and ClinVar, which is supported by NIH, NHGRI, and NCI.

| Reference Genome | Datasets                        |
| ---------------- | ------------------------------- |
| hg19             | Pediatric, COSMIC, ClinVar      |
| hg38             | Pediatric, GDC, COSMIC, ClinVar |

**Table 2. ProteinPaint datasets.** ProteinPaint supports datasets for different reference genomes (hg19/hg38).

---

## Mutational Signatures

### Methods
COSMIC SBS signatures (v3.3) were identified using SigProfilerExtractor (v1.1.20) from pediatric tumor samples grouped by subtype.

### Data
Sample data from G4K, PCGP, Clinical Pilot, and Real-Time Clinical Genomics (RTCG) were used for mutational signature detection.

> **Tip**  
> Example data from 790 tumor samples can be found in [Figure 5 of McLeod et al](https://cancerdiscovery.aacrjournals.org/content/11/5/1082.long).

---

## Expression

### t-SNE Methods
[RAPID RNA-Seq workflow](https://university.stjude.cloud/docs/genomics-platform/workflow-guides/rapid-rnaseq/) was used to generate RNA-seq expression count data and visualized via ProteinPaint's scatterplot.

### t-SNE Data
Sample data comes from G4K, PCGP, Clinical Pilot, and Real-Time Clinical Genomics studies.

> **Tip**  
> Example data from 1,574 RNA-Seq samples can be accessed [here](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/pediatric-blood-solid-and-brain-tumor-rna-seq-t-sne-plot-1574-samples~24).

### Gene Expression Methods
DESeq2's Median of Ratios^1 was applied to ~5500 tumor samples for gene expression analysis. We advocate for this methodology over TPM/CPM due to its stability and resistance to outliers.

#### Key Benefits:
1. Assumes most genes are not differentially expressed, providing a stable reference.
2. Robust against highly expressed genes dominating total read counts.
3. More reliable differential expression results due to geometric mean normalization.
4. Consistent and comparable expression values across samples.

1. Love, M. I., Huber, W., & Anders, S. (2014). Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2. Genome Biology, 15(12), 550. https://doi.org/10.1186/s13059-014-0550-8

---

## Histology

### Methods
H&E-stained histology slides in `.svs` format are uploaded and processed in Azure. Currently, each sample has one slide, with plans to support multiple slides per sample.

### Data
Histological images are provided by the [COMET Blue Sky Initiative](https://www.stjude.org/research/initiatives/blue-sky.html), led by [Dr. Mike Dyer](https://www.stjude.org/directory/d/michael-dyer.html). A large subset of COMET slides are pending publication.

> **Interested in collaborating?**  
> Reach out to us at [support@stjude.cloud](mailto:support@stjude.cloud).
