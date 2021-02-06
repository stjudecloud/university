---
title: ProteinPaint
---

# ProteinPaint

[ProteinPaint](https://pecan.stjude.cloud/proteinpaint) is a web application for simultaneously visualizing genetic lesions (including sequence mutations and gene fusions) and RNA expression in pediatric cancers. You can find the ProteinPaint [paper here](https://www.nature.com/articles/ng.3466). 

## Overview
The image below shows an example ProteinPaint of the gene [TP53](https://pecan.stjude.cloud/proteinpaint/TP53) annotated with descriptions of the many interactive elements of a ProteinPaint visualization. As you can see, there is a lot to explore.

![](./protein_paint_overview.png)


## Glossary of Classes 

The list below summarizes all classes of mutations used by ProteinPaint.

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

## Glossary of Origins

The list below summarizes all origins of mutations used by ProteinPaint.

| Mutation Origin | Description                                             |
| --------------- | ------------------------------------------------------- |
| Germline        | a variant found in a normal sample of a cancer patient. |
| Somatic         | a variant found only in a tumor sample.                 |
| Relapse         | a variant that arose in recurrence tumor.               |

## Advanced Customizations

There are several more advanced customizations you can leverage with ProteinPaint such as creating custom tracks, importing your own data, and embedding interactive visualizations on your web page. For instructions on these topics, please see our [detailed tutorial](https://docs.google.com/document/d/1JWKq3ScW62GISFGuJvAajXchcRenZ3HAvpaxILeGaw0/edit). Please excuse the different location and formatting as we work to incorporate this into our main documentation pages.
