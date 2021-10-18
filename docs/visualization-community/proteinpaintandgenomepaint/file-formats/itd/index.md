---
title: Internal tandem duplications 
---

**ITD: internal tandem duplication**

First line must be the header line, with following columns. Order of
columns does not matter.

-   gene

    -   Gene symbol.

-   isoform

    -   RefSeq/Ensembl accession of the isoform.

-   rnaPosition

    -   optional

    -   RNA nucleotide position of the 5' end of the duplicated region on the gene transcript, relative to transcription start site. 1-based.

-   rnaDuplength

    -   RNA nucleotide length of the duplicated region, required if rnaPosition is used.

-   chr

    -   Chromosome name, optional

-   chr_start

    -   Start genomic position, required if "chr" is used.

-   Chr_stop

    -   Stop genomic position, required if "chr" is used.

Other optional columns:

-   Patient

-   Sample

-   Sampletype

-   disease

Data lines starting with "#" will be ignored.
