---
title: The Data Explained
---
The PeCan Knowledgebase is comprised of curated pediatric cancer genomics data including variants, mutational signatures, and gene expression data in addition to histological slide images from over 9000 hematological, CNS, and non-CNS solid tumor patient samples.

# Variants 

**ONCOPRINT METHODS**
All oncoprints generated are supported by ProteinPaint's mutational landscape [study](https://proteinpaint.stjude.org/?appcard=study) views. 

**ONCOPRINT DATA**
The data used for these oncoprints are generated from collaborations such as DKFZ, TARGET, Shanghai Children's Medical Hospital, and St. Jude Children's Research Hospital.
The gene lists provided are not curated, however, there are `Associated Study` link-outs when a subset of data is used for specific visualizations and/or publications. 

!!!tip
An example of an `Associated Study` can be found [here](https://pecan-v2.staging.stjude.cloud/variants/oncoprint/BT%7CMB) for Medulloblastoma. 
!!!

**VARIANT PREVALENCE METHODS**
Variant Prevalence views are custom built using rules that are decsribed below:

***Mutation type proportion rules:***
The gene lists provided are not curated, however, for each diagnosis, the occurrences of genes in the population of samples for that diagnoses are counted and ranked. A select number of diagnoses have curated gene pathways. We provide 20 genes if no gene pathways are found, else 50 are returned. [Here](https://www.gsea-msigdb.org/gsea/msigdb/index.jsp) is the GSEA resource that can be helpful for determining gene pathways that may not be found in our platform. 

!!!note
TTN, MUC16, LPR1B, C11orf95, and IGH are genes primarily not focused in pediatric cancer, so these genes may not show in this view.
!!!

***Variant selection rules:***
SNV/INDEL variant classes that are included are: Proteinins, Intron, 3' UTR, 5' UTR, Splice Region, Frameshift, Missense, Proteindel, Splice, Exon, Nonsense. Silent mutations and also variants with mRNA accessions that do not start with 'NM' are excluded in our data. CNV variant classes that are included are: CNV Loss, CNV Gain. 

***Glossary of Classes***

The list below summarizes all classes of mutations.

| Mutation Class | Description                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| MISSENSE       | a substitution variant in the coding region resulting in altered protein coding                                  |
| FRAMESHIFT     | an insertion or deletion variant that alters the protein coding frame                                            |
| NONSENSE       | a variant altering protein coding to produce a premature stopgain or stoploss.                                   |
| PROTEINDEL     | a deletion resulting in a loss of one or more codons from the product, but not altering the protein coding frame |
| PROTEININS     | an insertion introducing one or more codons into the product, but not altering the protein coding frame          |
| SPLICE         | a variant near an exon edge that may affect splicing functionality                                               |
| SILENT         | a substitution variant in the coding region that does not alter protein coding                                   |
| SPLICE_REGION  | a variant in an intron within 10 nt of an exon boundary                                                          |
| UTR_5          | a variant in the 5' untranslated region                                                                          |
| UTR_3          | a variant in the 3' untranslated region                                                                          |
| EXON           | a variant in the exon of a non-coding RNA                                                                        |
| INTRON         | an intronic variant                                                                                              |

**Table 1. Mutation Class.** Definition of classes seen in oncoprint, variant prevalence, and ProteinPaint views.

***Variant origin count rules:***
If the variant origin is not null nor germline, then it is counted as somatic which also includes the relapse samples. When the variant origin is not null and is germline, the record is counted as germline.

***Glossary of Origins***

The list below summarizes all origins of mutations.

| Mutation Origin | Description                                             |
| --------------- | ------------------------------------------------------- |
| Germline        | a variant found in a normal sample of a cancer patient. |
| Somatic         | a variant found only in a tumor sample.                 |
| Relapse         | a variant that arose in recurrence tumor.               |

**Table 2. Mutation Origin.** Definitition of origins listed.  

***Total # Mutations rules:***
This is the total number of variants (including those with a value of null) for that given gene for the selected diagnosis and/or subtype divided by the gene with the largest variant total (rounded to the nearest 50) for that selected diagnosis and/or subtype. 

**VARIANT PREVALENCE DATA**
The most prevelant genes are shown based on the rules described above for variant selection and variant origin. The legend (Mutation Type) is the same as seen in the oncoprint tab. 

!!!warning
* Variant prevalence data will not consider the CNV records from DKTK, MAGIC and PCGP. 
* Inferring data per gene or pathway should be analyzed thoroughly.
!!!

The variants that will be used for the Variant Prevalence page are indicated in the below table.

| dataset_label | sample_count | snv_indel_sample_count | cnv_sample_count | sv_sample_count | fusion_genes_sample_count |
| ------------- | ------------ | ---------------------- | ---------------- | --------------- | ------------------------- |
| BROAD         | 95           | 76                     | 0                | 7               | 0                         |
| DKFZ          | 576          | 551                    | 0                | 5               | 0                         |
| DKTK          | 321          | 253                    | 0                | 0               | 0                         |
| MAGIC         | 94           | 90                     | 0                | 0               | 0                         |
| PCGP          | 2339         | 1925                   | 0                | 743             | 545                       |
| SCMC          | 209          | 205                    | 0                | 196             | 58                        |
| SJCRH         | 133          | 26                     | 0                | 7               | 0                         |
| TARGET        | 1728         | 1680                   | 424              | 620             | 618                       |
| UTSMC         | 15           | 15                     | 0                | 0               | 0                         |

**Table 3: Variant Prevelance.** The table provides the number of samples per data set with the available variant information which are represented in PeCan. 

**GENOMEPAINT METHODS**

Documentation can be found [here](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit?usp=sharing). 

**GENOMEPAINT DATA** 

The `Pediatric2` dataset expands the original `Pediatric` dataset by adding non-coding variants and expression data. The additional data includes Genome for Kids (PMID: [34301788](https://pubmed.ncbi.nlm.nih.gov/34301788/)), Shanghai Children's Medical Center relapsed ALL cohort (PMID: [32632335](https://pubmed.ncbi.nlm.nih.gov/32632335/)), St Jude's Clinical cancer genomic profiling by three-platform sequencing study (PMID: [30262806](https://pubmed.ncbi.nlm.nih.gov/30262806/)), and St Jude's Pan-neuroblastoma analysis data study (PMID: [33056981](https://pubmed.ncbi.nlm.nih.gov/33056981/)).

| Ref Genome | Dataset            |
| ---------- | ------------------ |
| hg19       | Pediatric, PAN-ALL |
| hg38       | Pediatric, SJLIFE  |

**Table 4. GenomePaint datasets.** GenomePaint supports different datasets depending on reference genome (hg19/hg38). 

**PROTEINPAINT METHODS**

Documentation can be found [here](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit?usp=sharing). 

**PROTEINPAINT DATA**
The `Pediatric` dataset consists of somatic variants and tumor RNA-seq data shown in the protein view. The dataset is comprised of the GRCh37/hg19 genome as well as data from the Pediatric Cancer Genome Project ([PCGP](https://permalinks.stjude.cloud/permalinks/pcgp)), NCI TARGET cohort, the Pan-TARGET study (PMID: [29489755](https://pubmed.ncbi.nlm.nih.gov/29489755/)), and the Shanghai Children's Medical Center T-ALL cohort (PMID: [32632335](https://pubmed.ncbi.nlm.nih.gov/32632335/)). A liftover of genomic variants and gene internals created the GRCh/hg38 dataset. The NCI's Genomic Data Commmons ([GDC](https://gdc.cancer.gov/about-gdc)) coagulates data from NCI-supported programs, such as TCGA and TARGET. The Clinical Interpretation of Variants in Cancer ([ClinVar](https://civicdb.org/)) is "an open-source platform for crowdsourced and expert-moderated cancer variant curation." Supported by the NIH, NHGRI, and NCI, CIViC is a richly curated oncology dataset (PMID: [28138153](https://pubmed.ncbi.nlm.nih.gov/28138153/)).

| Ref Genome | Dataset                         |
| ---------- | ------------------------------- |
| hg19       | Pediatric, COSMIC, ClinVar      |
| hg39       | Pediatric, GDC, COSMIC, ClinVar |

**Table 5. ProteinPaint dataset.** ProteinPaint supports different datasets depending on reference genome (hg19/hg38). 

See below for more information regarding the glossary for origins and mutation classes.

**MUTATIONAL SIGNATURES (SNV) METHODS** 

TBD

**MUTATIONAL SIGNATURES DATA**
Identification of [COSMIC SBS signatures](https://cancer.sanger.ac.uk/signatures/sbs/)(v3.1) upon consideration of WGS somatic variants were performed using SigProfilerSingleSample (v3.1) for G4K, PCGP, Clinical Pilot and Real-Time Clincal Genomics (RTCG) samples. 

!!!tip
An example of 790 samples plotted can be found in [Figure 5 of McLeod et al](https://cancerdiscovery.aacrjournals.org/content/11/5/1082.long).
!!!

# EXPRESSION

**EXPRESSION METHODS**
[RAPID RNA-Seq workflow](https://university.stjude.cloud/docs/genomics-platform/workflow-guides/rapid-rnaseq/) hosted on [St. Jude Cloud's Genomics Platform ](https://platform.stjude.cloud/workflows) was employed and plotted using [ProteinPaint's](https://proteinpaint.stjude.org/) scatterplot. 

**EXPRESSION DATA**
The data used to generate the tSNE is comprised of G4K, PCGP, Clinical Pilot and Real-Time Clinical Genomics samples. 

!!!tip
An example of 1,574 samples plotted can be found in [McLeod et al](https://cancerdiscovery.aacrjournals.org/content/11/5/1082.long) and accessed [here](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/pediatric-blood-solid-and-brain-tumor-rna-seq-t-sne-plot-1574-samples~24).
!!!

# Histology 

**HISTOLOGY METHODS**
All slides (with H&E staining) come off the microscope in .svs format which are then uploaded and processed in Azure. Currently, each sample is only accompanied by one slide but we plan on extending this feature for multiple slides per sample. 

**HISTOLOGY DATA**
All histological images are shared from the [COMET Blue Sky Initiatve](https://www.stjude.org/research/initiatives/blue-sky.html) led by [Dr. Mike Dyer](https://www.stjude.org/directory/d/michael-dyer.html). Slides can be downloaded or shared on the individual slide image pages.

!!!tip
An example of a slide image page can be found [here](https://pecan-v2.staging.stjude.cloud/histology/sample/SJMEL001003_D2).
!!!

# VARIANT DETAILS

**VARIANT DETAILS METHOD:** 
All variant details are shown in the hg19 reference genome and also have been run through our Medal Ceremony pipeline. A subset of variants have also been classified by our St. Jude Germline Committee reviewers. 

**VARIANT PAGE DATA:**
Variants that are classified as pathogenic or likely pathogenic have been added to our repository.  

# COMING SOON
CSV download for functionality will exist in a later version. 