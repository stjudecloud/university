---
title: ProteinPaint & GenomePaint
---
Do you have genomic or epigenomic datasets that need to be curated into visualizations but have no idea how? 

## Overview of ProteinPaint
[ProteinPaint](https://pecan.stjude.cloud/proteinpaint) is the flagship protein-based visualization tool created at St. Jude. You can use it to examine the domains of genes, known isoforms of a given gene, hotspot mutations for single nucleotide variations (SNVs), insertions and deletions (Indels), and structual variations (SVs) in both pediatric and adult cancers, and RNA-Seq expression of a given protein in different tumour types. To find out more, see the [documentation](./proteinpaint) or read the ProteinPaint [paper](https://www.nature.com/articles/ng.3466). 

The image below shows an example ProteinPaint of the gene [TP53](https://pecan.stjude.cloud/proteinpaint/TP53) annotated with descriptions of the many interactive elements of a ProteinPaint visualization. As you can see, there is a lot to explore.

![](./protein_paint_overview.png)


**The list below summarizes all classes of mutations used by ProteinPaint.**

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


**The list below summarizes all origins of mutations used by ProteinPaint**

| Mutation Origin | Description                                             |
| --------------- | ------------------------------------------------------- |
| Germline        | a variant found in a normal sample of a cancer patient. |
| Somatic         | a variant found only in a tumor sample.                 |
| Relapse         | a variant that arose in recurrence tumor.               |

**Advanced ProteinPaint Customizations**

There are several more advanced customizations you can leverage with ProteinPaint such as creating custom tracks, importing your own data, and embedding interactive visualizations on your web page. For instructions on these topics, navigate to the [guide](https://docs.google.com/document/d/1JWKq3ScW62GISFGuJvAajXchcRenZ3HAvpaxILeGaw0/edit). 

## Overview of GenomePaint

[GenomePaint](https://genomepaint.stjude.cloud/) is a visualization browser for simultaneously viewing genomic, transcriptomic, and epigenomic pediatric cancer mutation datasets across a multitude of disease cohorts. 

Datasets: WGS | WES | RNA-Seq | SNP-chip | ChIP-Seq | Hi-C data visualized over the hg19 reference genome. 

You can use GenomePaint to interpret the impact of somatic coding and noncoding alterations from ~3,800 pediatric trumors, along with multi-omics information to reveal oncogene activation by noncoding alterations, enhancer hijacking, aberrant splicing, mutual-exclusivity, mutation signature, and perform Kaplan-Meier analysis. It can be used to visualize your own data with easy customization and embedding on your own page.

The GenomePaint browser homepage lands on a dense cohort view of the TAL1 gene region of chromosome 1. Each section of the display can be interacted with by clicking, dragging, or hovering. Filter the information displayed on the tracks by clicking buttons in the legend. Customize the legend display by hiding/showing classes. Click **CONFIG** to the right of tracks for additional display customization.

![](./genome_paint_overview.png)

To navigate tracks,

* Pan left or right by clicking on the middle part of the track and dragging
* Zoom in by dragging the genomic coordinate ruler on top or zoom in 1 fold by clicking on the **IN** button
* Zoom out by *x* fold by clicking on an **OUT** button.

![](./navigation.gif)

You can even zoom in to display mutations at bp resolution. 

![](./bp_resolution.png)

GenomePaint offers three different views: cohort view, sample view, and matrix view. The figure below summarizes how each view is connected.

![](./genome_paint_views.png)


**Cohort View**
The cohort view shows mutations from all samples over a genomic region, along with the gene expression ranks for each of the samples. By default the mutation track displays the cohort view in dense mode, a compact display showing density plots for SVs and SNV/indels. You can toggle the view to expanded mode by clicking the **CONFIG** button to the right of the mutation track and then clicking Expanded.

![](./dense_expand_toggle.gif)

In Expanded mode (see below) all types of mutations are shown for each sample, one row per sample. Circles represent SV/fusion breakpoints, and x marks represent SNV/indels, each of which are displayed together with CNV/LOH. SNV/indels and breakpoints are always shown on top of CNV and LOH. Text labels can be shown for SV/fusion/SNV/indel, if available.

![](./expanded_view.png)

**Sample View**
The sample view shows mutations for one sample alone, along with any available genomic assay tracks. You can open a sample view from the expanded cohort view by clicking on any type of single mutation within the sample, and then selecting *Focus*. This brings up a new browser view showing data tracks from this sample in the region surrounding the mutation.

![](./sample_view.gif)

On the sample view you can explore expression rank, tumor mutations, structural variants, splice junctions, WES coverage, and RNA-Seq coverage. Customize the display by zooming in/out, hiding and/or rearranging tracks, or editing **CONFIG** options.

**Matrix View**
The matrix view combines the mutation profiles of multiple genomic regions in one view, in the form of a sample-by-region matrix. Such a matrix can be generated for samples from one cancer type. To open a matrix view, select a disease cohort from the cohort view and then select Matrix view. This organizes the selected cohort tumors with mutations in the genomic region you are viewing into a single-column matrix.

![](./matrix_view-1.gif)

Next, go back to the cohort view and type another gene or region of interest into the genome coordinate box and press ENTER. The cohort view will now show data at the new genomic location. Click on the same disease cohort and then select Matrix view.

![](./matrix_view-2.gif)

This will add the new genomic variant as a second column in the matrix. You can continue adding columns to this matrix in the same manner.

**Advanced Customizations**

There are several more advanced customizations you can leverage with GenomePaint such as creating custom tracks, importing your own data, and embedding interactive visualizations on your web page. For instructions on these topics, please see our [detailed tutorial](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit). Please excuse the different location and formatting as we work to incorporate this into our main documentation pages.
