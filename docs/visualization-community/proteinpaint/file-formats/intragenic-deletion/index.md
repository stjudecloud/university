---
title: Intragenic deletion
---


**Intragenic deletion**

First line must be the header line, with following columns. Separate
columns by tab. Order of columns does not matter.

-   gene

    -   Gene symbol.

-   isoform

    -   RefSeq/Ensembl accession of the isoform.

-   rnaPosition

    -   optional.

    -   RNA nucleotide position of the 5' end of the deleted region on the gene transcript, relative to transcription start site. 1-based.

-   rnaDellength

    -   RNA nucleotide length of the deleted region, required if "rnaPosition" is used.

-   chr

    -   Chromosome name, optional

-   chr_start

    -   Start genomic position, required if "chr" is used.

-   chr_stop

    -   Stop genomic position, required if "chr" is used.

Other optional columns:

-   Patient

-   Sample

-   Sampletype

-   disease

Data lines starting with "#" will be ignored.
