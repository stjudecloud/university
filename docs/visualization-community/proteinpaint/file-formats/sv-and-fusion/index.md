---
title: SV and fusion transcript
---

**Tabular data format for SV and fusion events**

First line must be the header line, with following columns.

-   gene_a

    -   gene on 5' end of a fusion. Do not apply value for intergenic break-end.

-   isoform_a

    -   The RefSeq/Ensembl accession of gene_a. Leave blank for intergenic break-end.

-   chr_a

    -   Chromosome name of gene_a. In case of intergenic translocation, use the 5' end of the break point. Use name "chr10" but not "10".

-   position_a

    -   Chromosomal position of the 5' end break point, 0-based.

-   strand_a

    -   + or -

-   gene_b

    -   Gene on 3' end of a fusion. In case of intergenic translocation, leave unspecified.

-   isoform_b

    -   The RefSeq/Ensembl accession of gene_b. Leave blank for intergenic break-end.

-   chr_b

    -   Chromosome name of gene_b. In case of intergenic translocation, use the 3' end of the break point.

-   position_b

    -   Chromosomal position of the 3' end break point, 0-based.

-   strand_b

    -   + or -

Optional columns:

-   Patient

-   Sample

-   Sampletype

Order of column doesn't matter.

Lines starting with "#" will be ignored.
