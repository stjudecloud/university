---
title: Data Sets and Data Access Units
---

## Data Set

A St. Jude Cloud Data Set is a grouping of data which has been curated by St. Jude and can correspond to a study, project, or specific disease. They are available for free to researchers and access to a Data Set can be requested from the data browser. However, access is not granted at the Data Set level, but rather the Data Access Unit. A single Data Set may belong to only one DAU, or it could belong in multiple if it contains data came from different groups. 

An approved Data Access Request grants access to a particular Data Access Unit which includes specific Data Sets that can be selected from the Data Browser. An approved DAR would give access not only to the data selected at the time, but also any additional data that is included in the DAUs which were approved. Only the data initially selected will be vended to a project folder upon approval but returning to the data browser and selecting additional data which falls under the approved DAUs will not require another Data Access Request. 

See [the  list of Data Sets.](#list-of-data-sets)

## Data Access Unit

A St. Jude Cloud **Data Access Unit (DAU)** is a grouping of data that typically corresponds to a project, study, or Data Set generated at the same time at the same institution. Each DAU has its own governing body of researchers, the [Data Access Committee](#data-access-committee), who preside over the data and who may grant or deny access. Each Data Access Committee is responsible for only one DAU and has its own protocols for approving access to their DAU. Please [contact us](mailto:support@stjude.cloud) if you have questions about committee approval protocols. We currently have 6 DAUs: Pediatric Cancer Genome Project (PCGP), St. Jude Lifetime Cohort Study (SJLIFE), Genomes for Kids (G4K) and Clinical Genomics, Sickle Cell Genome Project (SGP), Childhood Cancer Survivor Study (CCSS), and Pan-Acute Lymphoblastic Leukemia (PanALL). See below for a brief description of each DAU. For a more detailed description please see the respective [Schedule 1(s)](../../../citing-stjude-cloud#Data Set-reference-table).

See [the list of Data Access Units.](#list-of-daus)

## Data Access Committee

A St. Jude Cloud **Data Access Committee (DAC)** is a group of St. Jude researchers who oversee access to a particular [Data Access Unit (DAU)](#data-access-unit) and evaluate incoming data requests.

The first time you request access to files in a DAU, it is required that you fill out a [Data Access Agreement (DAA)](../../requesting-data/making-a-data-request/). Access is granted at the DAU level based on the decision of each DAC upon reviewing the DAA.

!!!example
For example, if you make a request asking for all of St. Jude's Acute 
Lymphoblastic Leukemia sequencing data, you might be asking for data from 
multiple different projects (DAUs) here at St. Jude. For the sake of the example,
let's say the data you want is spread across three different Data Sets and two DAUs. Once
you place a request, your application will be routed to the corresponding
two data access committees for approval. Since each DAC is made up of
different individuals using different criteria for evaluation, you may or
may not be approved for access to all of the files.
!!! 

## Embargo Date

The **Embargo Date** specifies the date that a publishing embargo on the file in question has been lifted. Publishing using any of the files _before_ the embargo date has passed is strictly prohibited as outlined in the [Data Access Agreement (DAA)](../../requesting-data/making-a-data-request/). Typically, samples from the same [Data Access Unit (DAU)](#data-access-unit) all have the same embargo date, as they would have been released on St. Jude Cloud at the same time.

**Current Embargo Dates**

| Data Access Unit                 | Embargo Date                  |
| -------------------------------- | ----------------------------- |
| Pediatric Cancer Genome Project  | July 23, 2018                 |
| St. Jude LIFE                    | January 15, 2019              |
| Clinical Genomics                | Rolling based on release date |
| Sickle Cell Genome Project       | September 1, 2019             |
| Childhood Cancer Survivor Study  | November 1, 2019              |
| Pan-Acute Lymphoblastic Leukemia | January 14, 2019              |

## List of DAUs
We currently have the six [Data Access Units (DAU)](#data-access-unit) listed below. [Basic clinical data](../metadata-and-clinical#clinical-and-phenotypic-information) is available for relevant subjects in each DAU. Click on the name below to navigate directly to that DAU's [Study page](../../studies/) for more detailed information.

#### [Childhood Cancer Survivor Study (CCSS)](https://stjude.cloud/studies/clinical-genomics)

#### [Clinical Genomics (Clinical Pilot, G4K, and RTCG)](https://stjude.cloud/studies/clinical-genomics)

#### Pan-Acute Lymphoblastic Leukemia (PanALL)

#### [Pediatric Cancer Genome Project (PCGP)](https://stjude.cloud/studies/pediatric-cancer-genome-project)

#### [Sickle Cell Genome Project (SGP)](https://sickle-cell.stjude.cloud/)

#### [St. Jude Lifetime (SJLIFE)](https://sjlife.stjude.org/)

## List of Data Sets
We currently have the ten [Data Sets](#Data Set) listed below. Additional information can also be seen including which [Data Access Units (DAU)](#data-access-unit) the Data Set belongs to, tissue type, sequencing type, number of samples, additional links, and a brief description.

### Childhood Cancer Survivor Study (CCSS)
**DAU**: CCSS | **Tissue Type**: Germline Only | **Sequencing Type**: WGS | **Samples**: 2912 | **[Additional Information About CCSS](https://ccss.stjude.org/)**

CCSS is a germline-only Data Set consisting of whole genome sequencing of childhood cancer survivors. CCSS is a multi-institutional, multi-disciplinary, NCI-funded collaborative resource established to evaluate long-term outcomes among survivors of childhood cancer. It is a retrospective cohort consisting of >24,000 five-year survivors of childhood cancer who were diagnosed between 1970-1999 at one of 31 participating centers in the U.S. and Canada. The primary purpose of this sequencing of CCSS participants is to identify all inherited genome sequence and structural variants influencing the development of childhood cancer and occurrence of long-term adverse outcomes associated with cancer and cancer-related therapy. 

!!!warning CCSS: Potential Bacterial Contamination

Samples for the Childhood Cancer Survivorship Study were collected by sending out Buccal swab kits to enrolled participants and having them complete the kits at home. This mechanism of collecting saliva and buccal cells for sequencing is highly desirable because of its non-invasive nature and ease of execution. However, collection of samples in this manner also has higher probability of contamination from external sources (as compared to, say, samples collected using blood). We have observed some samples in this cohort which suffer from bacterial contamination. To address this issue, we have taken the following steps:

1. We have estimated the bacterial contamination rate and annotated each of the samples in the CCSS cohort. For each sample, you will find the estimated contamination rate in the `Description` field of the `SAMPLE_INFO.txt` file that is vended with your data (and as a property on the DNAnexus file). For information on this field, see the [Metadata specification](#metadata).
2. Using this estimated contamination rate, we have removed 82 samples which exhibited large rates of bacterial contamination.
3. For the remaining samples, we have provided the `BAM` file as aligned with `bwa mem` with default parameters. We have observed that there are instances of reads originating from bacterial contamination that are erroneously mapped to the human genome and display a *very* low mapping quality. Please be advised that we have kept these reads as they were aligned and have not yet made any attempt to unmap these reads. Any analysis you perform on these samples will need to take this into account!
4. Last, we will be working over the coming months to unmap the reads originating from bacterial contamination and release updated `BAM` files along with the associated `gVCF` files from Microsoft Genomics Service.

With any questions on the nature or implications of this warning, please contact us at [support@stjude.cloud](mailto:support@stjude.cloud).
!!!

### Childhood Solid Tumor Network (CSTN)
**DAU**: PCGP and Clinical Genomics | **Tissue Type**: Paired Tumor-Normal | **Sequencing Type**: WGS, WES, RNA-Seq | **Samples**: 143 | **[Additional Information About CSTN](https://www.stjude.org/research/resources-data/childhood-solid-tumor-network.html)**

The Childhood Solid Tumor Network (CSTN) is a St. Jude Children's Research Hospital initiative to disseminate its childhood solid tumor resources and data. The raw Data Sets from this initiative are made available via St. Jude Cloud. 

### Cicero Benchmark 
**DAU**: PCGP and Clinical Genomics | **Tissue Type**: Paired Tumor-Normal | **Sequencing Type**: RNA-Seq | **Samples**: 124

The CICERO Data Set contains the samples which were selected for use in the [CICERO Paper](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-02043-x).

### Clinical Pilot 
**DAU**: PCGP and Clinical Genomics | **Tissue Type**: Paired Tumor-Normal | **Sequencing Type**: WGS, WES, RNA-Seq | **Samples**: 155 | **[Additional Information About Clinical Genomics](https://www.stjude.cloud/studies/clinical-genomics)**

The Clinical Pilot project was a retrospective study that evaluated the accuracy and demonstrated the feasibility of three-platform sequencing in a CAP/CLIA setting. The findings of this project were published in [Nature Communications](https://pubmed.ncbi.nlm.nih.gov/30262806/)

### Genome 4 Kids (G4K) 
**DAU**: Clinical Genomics | **Tissue Type**: Paired Tumor-Normal | **Sequencing Type**: WGS, WES, RNA-Seq | **Samples**: 571 | **[Additional Information About Clinical Genomics](https://www.stjude.cloud/studies/clinical-genomics)**

The goal of the Genomes 4 Kids (G4K) prospective study was to determine whether the three-platform sequencing protocol laid out in the Clinical Pilot project could generate results on a clinical timeline in practice and to evaluate the prevalence of actionable findings. The study concluded with just over 300 patients, and the publication is currently in review.

### Pan-Acute Lymphoblastic Leukemia (PanALL)
**DAU**: PanALL | **Tissue Type**: Paired Tumor-Normal | **Sequencing Type**: RNA-Seq | **Samples**: 735

PanALL comprises cases of B-progenitor and T-lineage ALL encompassing the spectrum of ALL subtypes across the age continuum. Samples sequenced were obtained from multiple sites, centers and cooperative groups including St. Jude Children’s Research Hospital, The Children’s Oncology Group, The Alliance – Cancer and Leukemia Group B, the Eastern Cooperative Oncology Group, The Southwestern Oncology group, MD Anderson Cancer Center, City of Hope National Medical Center, Princess Margaret Cancer Center, Northern Italy Leukemia Group, and UKALL.

### Pediatric Cancer Genome Project (PCGP)
**DAU**: PCGP and Clinical Genomics | **Tissue Type**: Paired Tumor-Normal | **Sequencing Type**: WGS, WES, RNA-Seq | **Samples**: 3031 | **[Additional Information About PCGP](https://stjude.cloud/studies/pediatric-cancer-genome-project)**

The Pediatric Cancer Genome Project is a collaboration between St. Jude Children's Research Hospital and the McDonnell Genome Institute at Washington University School of Medicine that sequenced the genomes of over 600 pediatric cancer patients.

### Real-time Clinical Genomics (RTCG) 
**DAU**: Clinical Genomics | **Tissue Type**: Paired Tumor-Normal | **Sequencing Type**: WGS, WES, RNA-Seq | **Samples**: 2,371 | **[Additional Information About Clinical Genomics](https://www.stjude.cloud/studies/clinical-genomics)**

Real-time Clinical Genomics (RTCG) is a [first of its kind initiative](https://www.stjude.org/media-resources/news-releases/2019-medicine-science-news/st-jude-cloud-to-provide-access-to-real-time-clinical-genome-sequencing-data.html), whereby St. Jude began releasing data from the clinical NGS service consented for research use to St. Jude Cloud in monthly batches to give researchers access to valuable data as quickly as possible.

### Sickle Cell Genome Project (SGP)
**DAU**: SGP | **Tissue Type**: Germline Only | **Sequencing Type**: WGS | **Samples**: 807 | **[Additional Information About SGP](https://sickle-cell.stjude.cloud/)**

SGP is a germline-only Data Set of Sickle Cell Disease (SCD) patients from birth to young adulthood.The Sickle Cell Genome Project (SGP) is a collaboration between St. Jude Children’s Research Hospital and Baylor College of Medicine focused on identifying genetic modifiers that contribute to various health complications in SCD patients. Additional objectives include, but are not limited to, developing accurate methods to characterize germline structural variants in highly homologous globin locus and blood typing.

### St. Jude LIFE (SJLIFE) 
**DAU**: SJLIFE | **Tissue Type**: Germline Only | **Sequencing Type**: WGS, WES | **Samples**: 4838 | **[Additional Information About SJLIFE](https://sjlife.stjude.org/)**

St. Jude Lifetime (SJLIFE) is a longevity study from St. Jude Children's Research Hospital that aims to identify all inherited genome sequence and structural variants influencing the development of childhood cancer and occurrence of long-term adverse outcomes associated with cancer and cancer-related therapy. This cohort contains unpaired germline samples and does not contain tumor samples. 

