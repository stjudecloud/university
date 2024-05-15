---
title: Metadata and Clinical Information
redirect_from:
  - /docs/guides/data/metadata/
---


## Metadata

Each data request includes a text file called `SAMPLE_INFO.txt` that provides a number of file level properties (sample identifiers, clinical attributes, etc).

### Definitions
Below are the set of tags which may exist for any given file in St. Jude Cloud. Tags with ‘sj_’ prepended are required fields. Tags with ‘attr_’ prepended are information queried from the physician or research team’s records at the time of sample submission to St. Jude Cloud and are considered optional, as the level of information gathered for each sample varies.

| Property             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file_path`            | The path to the file in your St. Jude Cloud. |
| `file_id`              | A unique identifier for the file on DNAnexus, you can see this value listed as “ID” in the DNAnexus user interface. |
| `subject_name`         | A unique subject identifier assigned internally at St. Jude.|
| `sample_name`          | A unique sample identifier assigned internally at St. Jude. |
| `sample_type`          | One of Autopsy, Cell line, Diagnosis, Germline, Metastasis, Relapse, or Xenograft.|
| `sequencing_type`      | Whether the file was generated from Whole Genome (WGS), Whole Exome (WES), or RNA-Seq. |
| `file_type`            | File type to be rendered in the St. Jude Cloud Genomics Platform data browser. Note that indices will be marked as the file type they accompany, and this is because these files will be vended together in our data browser. If you wish to be able to distinguish these file types, please parse the `file_path`. |
| `description`          | Optional field that may contain additional file information. |
| `file_size`            | The size of the file in bytes, not exceeding 12 integers. | 
| `sj_dataset_accession` | The permanent accession number assigned in St. Jude Cloud. |
| `sj_embargo_date`      | The [embargo date](../../requesting-data/glossary/#embargo-date), which specifies the first date which the files can be used in a publication. |
| `sj_long_disease_name` | The complete written name of the sj_diseases diagnosis or disease identifier - see sj_diseases for important information. For more information about our ontology go [here](https://university.stjude.cloud/docs/genomics-platform/about-our-data/ontology).|
| `attr_age_at_diagnosis`      | Age at first diagnosis. This field is normalized as a decimal value. If empty, the physician or research team did not indicate a value for this field. |
| `attr_diagnosis`             | Unharmonized primary diagnosis as reported by the lab or PI upon submission of data to St. Jude Cloud. |   
| `attr_sex`                   | Self-reported sex. |    
| `attr_ethnicity`             | Self-reported ethnicity. Values are normalized according to the [US Census Bureau classifications][censusburea]. |
| `attr_race`                  | Self-reported race. Values are normalized according to the [US Census Bureau classifications][censusburea]. |
| `attr_oncotree_disease_code` | The disease code (assigned at the time of genomic sequencing) as specified by [Oncotree Version 2019-03-01][oncotree_2019_03_01]. | 
| `attr_library_selection_protocol` | The laboratory method used to prepare and select the DNA or RNA for sequencing from a sample. The possible values are PCR, PolyA, Total, Random, Not Available, or Not Applicable. | 
| `attr_read_length` | The read length used, when available. |  
| `attr_sequencing_platform` | Which sequencing platform was used to generate the data, when available. |
| `attr_read_type` | The sequencing read type, if available. | 
| `attr_inferred_strandedness` | Computationally determined strandedness of RNA-seq data, if applicable. | 
| `sj_publication_titles` | The title of associated publications(s), if the file was associated with a paper(s). | 
| `sj_pub_accessions`    | The related St. Jude Cloud accession number(s), if the file was associated with a paper(s). These group the files into publications as displayed on the Genomics Platform data browser. |
| `sj_pmid_accessions`   | The related [Pubmed][pubmed] accession number, if the file was associated with a paper. |
| `attr_subtype_biomarkers`    | A molecular mutation, SV or fusion event associated with a particular disease subtype that is used to define membership in that subtype. |
| `sj_associated_diagnoses`    | This list captures each diagnosis across all samples associated with the provided subject_name.|
| `attr_germline_sample` | The germline sample that was used when creating the Somatic VCF file, if applicable. |
| `attr_diagnosis_group`       | Each file is categorized into one of five diagnosis groups based on the type of tumor - hematologic malignancy, solid tumor, brain tumor, germ cell tumor, or not applicable (for germline samples). |
| `sj_ega_accessions`    | The related [EGA][ega] accession number, if the file was associated with a paper. |
| `sj_access_unit` | Lists which Data Access Unit(s) (DAU) the file belongs to. For more on Data Access Units, see here. (https://university.stjude.cloud/docs/genomics-platform/about-our-data/dau-and-datasets/#data-access-unit) |
| `sj_diseases`          | If your data request was process after August 18, 2020, the field should be interpreted as the harmonized St. Jude Cloud diagnosis based on the best available information (data provided by the lab or PI and followup by scientists on the St. Jude Cloud team). If your data request was processed before August 18, 2020, this field should be interpreted as the disease identifier assigned at the time of genomic sequencing (keyly, the diagnosis known at the time of genomic testing may not be the best available information). **If your data request was processed after August 18, 2020 and you'd like to use the most up to date, harmonized diagnosis**, we recommend using `sj_diseases` when including diagnosis in your analysis. If your data request was made before this time *or* if you wish to use the values exactly as provided by the lab or PI, we recommend using the lab-provided value in `attr_diagnosis`. For more information about our ontology go [here](https://university.stjude.cloud/docs/genomics-platform/about-our-data/ontology). |
| `sj_datasets`          | The datasets in the data browser which this file is associated with. |
| `sj_pipeline_name` | Specifies which specific version of the pipeline was used when generating the file. |
| `attr_tissue_preservative`   | The preservation method used for the tissue sample, with two options: FFPE (formalin-fixed, paraffin-embedded) or Fresh/Frozen. |
| `attr_lab_strandedness` | Lab reported strandedness of RNA-seq data. |


### Disease Codes

!!!note
During the release of the St. Jude Cloud paper, we undertook a massive effort to curate and harmonize diagnosis values within St. Jude Cloud. We provide two values for diagnosis, and you should select carefully which value you use based on your use case:

1. `sj_diseases`, which, since August 18, 2020, represents the harmonized diagnosis value curated by scientists on the St. Jude Cloud team (before that time it represented the diagnosis known at time of sequencing). For more information about our ontology go [here](https://university.stjude.cloud/docs/genomics-platform/about-our-data/ontology).
2. `attr_diagnosis`, which contains the unharmonized diagnosis value directly as it was submitted to us from the lab or PI.

**If your data request was processed after August 18, 2020 and you'd like to use the most up to date, harmonized diagnosis**, we recommend using `sj_diseases` field. If your data request was made before this time *or* if you wish to use the values exactly as provided by the lab or PI, we recommend using the value in `attr_diagnosis`. For more information about our ontology go [here](https://university.stjude.cloud/docs/genomics-platform/about-our-data/ontology).
!!!

The `SAMPLE_INFO.txt` file that comes with your data request will contain the list of associated harmonized diagnosis codes (`sj_diseases`) for each sample. These codes represent the harmonized diagnosis values curated by the St. Jude Cloud team and reflect the most up to date information about the sample. For more information about our full ontology, please navigate to our [St. Jude Cloud Ontology section](https://university.stjude.cloud/docs/genomics-platform/about-our-data/ontology) to read our white paper and access our downloadable disease ontology.


[pubmed]: https://www.ncbi.nlm.nih.gov/pubmed/
[ega]: https://www.ebi.ac.uk/ega/home
[censusburea]: https://www.census.gov/mso/www/training/pdf/race-ethnicity-onepager.pdf
[oncotree_2019_03_01]: http://oncotree.mskcc.org/#/home?version=oncotree_2019_03_01


## Similar Topics

[About our Decision Process & Terminology](../../requesting-data/glossary)

[Making a Data Request](../../requesting-data/making-a-data-request)

[Managing Data Overview](../../managing-data/working-with-our-data)
