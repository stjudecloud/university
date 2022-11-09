---
title: PeCan
---

PeCan is the definitive pediatric resource that provides a centralized workspace for users to explore data through a subtype-centric or gene-centric user experience. 

![](./Sunburst_placeholder.png)

The data available is composed of various projects at St. Jude Children's Research Hospital such as the [PCGP](https://www.stjude.cloud/studies/pediatric-cancer-genome-project/) dataset along with curated datasets from other collaborating institutions such as [TARGET](https://ocg.cancer.gov/programs/target), [DKFZ](https://www.dkfz.de/en/index.html), and many others. To see all available data, see our [Data Sets](https://university.stjude.cloud/docs/pecan/data/). 

![](./logos.png)

# Homepage 
The [PeCan homepage](https://pecan.stjude.cloud/home) showcases key components available in PeCan. This comprises of the 4 data facets, PIE, and highlights features coming soon. For a seemless user experience to explore data across all a facets, a navigational membrane can be employed which saves the selection from the sunburst. Additionally, a user can search a gene which will direct the user to ProteinPaint which is located in our Variant Resources data facet. This view will default the Pediatric data set (for more information go [here](https://university.stjude.cloud/docs/pecan/data/)).

![](./definitive_placeholder.png)
[ADD GIF here]

# Sunburst
The sunburst plot gives an at-a-glance disease distribution and disease hierarchy which is a custom ontology for St. Jude Cloud. As a user selects subtypes within in the sunburst, the total number of patients and samples will update accordingly. The diseases are categorized in three main root categories: 1) HM -Hematopoietic Malignancies, 2) BT -Brain Tumor, 3) ST -Solid Tumor. A user is encouraged to navigate via a subtype-centric experience by selecting a subtype and then navigating to each data facet with available data for that subtype. Conversely, a user can explore all of the available data within a data facet by clicking directly on the data facet icon instead of filtering by subtype on the sunburst. 

[Click here](../genomics-platform/requesting-data/about-our-data/#short-disease-code-mapping) for a full mapping of disease codes.

![](./Sunburst_placeholder.png)


# Data Facets
Data Facets represent a distinct type of post-processed genomic data for collections of pediatric cancer samples. Each can be explored via a designated interface. For example, Variant Resources is a data facet where all variant data can be visualized across the data that is available with this data type. CSV download functionality will exist in a later version. Check out our data facets section to learn more. 

**[Variant Resources](https://university.stjude.cloud/docs/pecan/variant-resources/)** - visualizations to showcase variant data in an oncoprint format, variant prevalence display, GenomePaint view, ProteinPaint view and specific variant pages.

**[Mutational Signatures](https://university.stjude.cloud/docs/pecan/mut-sigs/)** - samples depicted in a heatmap where COSMIC mutational signatures in pediatric cancer subtypes were analyzed by WGS. 

**[Expression](https://university.stjude.cloud/docs/pecan/expression/)** - the expression landscape of RNA-Seq fresh frozen tumor samples.

**[Histology](https://university.stjude.cloud/docs/pecan/histology/)** - solid tumor samples that have histology imaging (all HNE) with samples linked to the methylation data in the Epigenetic data facet. 

**[Epigenetic (coming soon)](https://university.stjude.cloud/docs/pecan/epigenetic/)** - solid tumor samples methylation profiling that have linked histology images.

# PIE
Pecan PIE (the **Pe**diatric **Can**cer Variant **P**athogenicity **I**nformation **E**xchange) is a cloud-based variant classification and interpretation service. Click [here]() to learn more.