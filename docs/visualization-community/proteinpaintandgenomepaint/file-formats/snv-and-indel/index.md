---
title: SNV and Indel
---


**SNV/Indel Data Format**

###  File uploading procedure

[See the uploading procedure here.](https://docs.google.com/document/d/15NtAMVNtLNxJ7YAWFk2P6iE2jYDR6YSnXb46HVujT3g/edit?usp=sharing)

### General notes

-   Input file is a tabular text file, with specified columns described below.

-   First line must be the header line.

-   Order of columns does not matter.

-   Extra columns are allowed and can be viewed in mutation table.

-   Lines starting with "#" are ignored.

-   Patient name and sample types are case sensitive. Please keep them consistent.

### Required columns

-   **gene**

    -   The gene symbol, e.g. "TP53"

-   **refseq**

    -   The RefSeq accession of the gene isoform, e.g. "NM_000546" (but not version name NM_000546.5)

-   **chromosome**

    -   Can be either "chr1" or "1", case-insensitive

-   **start**

    -   Genomic coordinate, 1-based

-   **aachange**

    -   A string describing the amino acid change caused by the mutation, can be any string, will be displayed as-is as the label on the right of the discs

-   **class**

    -   Mutation class about the amino acid change, will allow ProteinPaint to render the mutation using predefined colors. Names of supported classes:

        -   missense

        -   nonsense

            -   representing stoploss, nonstop, and stopgain

        -   frameshift

        -   silent

        -   proteinDel

            -   in-frame deletion

        -   proteinIns

            -   in-frame insertion

        -   splice

        -   splice_region

        -   utr_3

        -   utr_5

        -   intron

        -   noncoding.

### Optional columns describing samples

-   **disease**

    -   Name of the disease, if provided, the disease listing will be available upon loading the file

-   **origin**

    -   The variant origin, supported values are listed below, case insensitive:

        -   somatic

        -   germline

        -   relapse

        -   germline pathogenic

        -   germline non-pathogenic

-   **patient**

    -   Name of patient, required if sample type is specified.

-   **sample**

    -   Sample name.

-   **sampletype**

    -   A special field for distinguish multiple samples of the same patient or individual, e.g. "diagnosis" or "relapse". Not to be confused with variant origin.

    -   If sampletype is specified, patient name should be provided, so that multiple samples from the same patient can be correctly identified. In this case, sample name becomes optional. When not provided, ProteinPaint will combine patient name and sample type to get sample name. If provided, ProteinPaint requires that different samples from the same patient must have different sample names.

### Optional columns describing mutations

-   **mutant_in_tumor**

    -   Number of reads with the mutant allele in tumor sample

-   **total_in_tumor**

    -   Total number of reads in tumor sample over the mutation locus

    -   By providing "mutant_in_tumor" and "total_in_tumor", the "maf-coverage" plot can be generated.

-   **mutant_in_normal**

    -   Number of reads with the mutant allele in normal sample

-   **total_in_normal**

    -   Total number of reads in normal sample over the mutation locus

-   **REF**

    -   Reference allele

-   **ALT**

    -   Alternative allele

-   **VAF**

    -   Variant fraction

### VCF format

[Please check out the VCF format if you want to submit the SNV/indel data in the form of a VCF track.](../../advanced-guides/using-a-vcf-file/)
