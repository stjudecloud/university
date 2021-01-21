---
title: Copy Number Variants
---


**CNV format**

This format only works for gene-level CNV data.

First line must be the header with following columns:

-   Gene

    -   The gene name

-   Cnv

    -   Allowed values:

        -   Amplification

        -   Gain

        -   Deletion

        -   loss

Following columns are optional:

-   Sample

-   Patient

-   Sampletype

-   Disease

Lines starting with '#' will be ignored.
