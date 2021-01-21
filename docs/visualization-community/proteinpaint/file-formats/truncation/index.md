---
title: Truncation, N-loss, or C-loss
---

**Truncation of gene transcript**

Truncation of the gene transcript that can lead to either N or
C-terminus loss of the protein.

First line must be the header line, with following columns

-   gene

    -   Gene symbol.

-   isoform

    -   RefSeq/Ensembl accession of the isoform.

-   rnaPosition

    -   RNA nucleotide position of the break point on this gene.

-   Losstype

    -   "n" for N-loss, "c" for C-loss.

Optional columns:

-   Patient

-   Sample

-   Sampletype

-   disease

Data lines starting with "#" will be ignored.
