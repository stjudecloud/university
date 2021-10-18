---
title: URL Parameters
---


URL parameter works in this way:

```
https://proteinpaint.stjude.org/?genome=hg19&gene=ALK&dataset=pediatric
```

It generates links of customized views that can be bookmarked or
published.

URL parameters consist of "key=value" pairs. The keys are listed below,
they are case-insensitive.

## `"gene"`

Generates view for a gene. Example:

[https://proteinpaint.stjude.org/?genome=hg19&gene=ALK&dataset=clinvar](https://proteinpaint.stjude.org/?genome=hg19&gene=ALK&dataset=clinvar)

-   Display a gene by given name. Value can be gene symbol or isoform
    accession, value is case-insensitive

-   Requires "**genome**"

-   Optionally, specify built-in datasets using parameter "**dataset**":

    -   If more than 1, join by comma

    -   Dataset must be hosted on the PP server

    -   Value is case-insensitive

    -   Example to load the "Pediatric" dataset:

        -   [https://proteinpaint.stjude.org/?genome=hg19&gene=ALK&dataset=pediatric](https://proteinpaint.stjude.org/?genome=hg19&gene=ALK&dataset=pediatric)

    -   When using datasets, highlight certain mutations matching with
        given name

        -   Effect: any groups of mutation showing a match with the
            given name will be shown as expanded. All the rest of
            groups are folded.

        -   This feature is only intended for point mutation AA change
            name. The provided name must exactly match with the
            content in the DB or VCF file

        -   Example:

            -   [https://proteinpaint.stjude.org/?genome=hg19&gene=ALK&dataset=pediatric&hlaachange=G574R,F1174L](https://proteinpaint.stjude.org/?genome=hg19&gene=ALK&dataset=pediatric&hlaachange=G574R,F1174L)

-   All types of custom track parameters can be used as well, as defined
    in the "block" section below.

## `block`

Launches a genome browser. Example:

[https://proteinpaint.stjude.org/?block=on&genome=hg19&position=chr17:7568451-7591984&bigwigurl=UCSC_phyloP,http://hgdownload.soe.ucsc.edu/goldenPath/hg19/phyloP100way/hg19.100way.phyloP100way.bw](https://proteinpaint.stjude.org/?block=on&genome=hg19&position=chr17:7568451-7591984&bigwigurl=UCSC_phyloP,http://hgdownload.soe.ucsc.edu/goldenPath/hg19/phyloP100way/hg19.100way.phyloP100way.bw)

### `genome`

Required. Provides reference genome name.

### Genomic regions

Optional. Specify genomic regions.

#### `position`

-   Coordinates are 0-based, example

    -   ?block=on&genome=hg19&position=chr1:1234-5678

#### `regions`

-   Using "**regions**" to join more than 1 region by comma

    -   `?block=on&genome=hg19&regions=chr1:111-222,chr2:333-444`

-   There is a bug of incorrect genomic ruler rendering when providing multiple regions.

#### `hlregion`

Optional. Provide one or more regions to highlight. Each region is in
the format of "chr:start-stop". Do not use commas in start or stop
positions. Join multiple regions by comma.

There is a bug that it will highlight regions that are outside of view
range.

## Tracks

Optional. There is no parameter called "tracks", but many different
parameters to provide different types of tracks.

#### `bigwigfile`

#### `bigwigurl`

To provide "bigWig" tracks. [Learn how to generate a bigWig file](https://genome.ucsc.edu/goldenpath/help/bigWig.html)

-   Provide one or more bigwig tracks, each in the form of
    "name,path-or-url", all joined by comma. When using file, the
    files are hosted in the <TP> directory of the ProteinPaint
    server

-   Example
    -   `?bigwigfile=[name1],[path/to/file1.bw],[name2],[path/to/file2.bw],....`
    -   `?bigwigurl=[name1],[url1],[name2],[url2]`

-   Note that this method won't allow setting Y scale or other
    configurations

#### `vcffile`

#### `vcfurl`

Provide one or more VCF tracks. Requires [VCF 4.2 format](https://samtools.github.io/hts-specs/VCFv4.2.pdf). Each in the form of "name,path-or-url", all joined by comma.

URL format:

```
?vcffile=[name1],[path/to/file1],...
?vcfurl=[name1],[path/to/url1],...
```

Example:

#### `junctionfile`

#### `junctionurl`

Provide one or more junction tracks, see [junction file format](https://docs.google.com/document/d/1PFva3Mn-U4VPNW0vHHC-CSnYBeotRnqbhCMQPmyLQG4/edit?usp=sharing).
Each in the form of "name,path-or-url", all joined by comma.

URL format:

```
?junctionfile=[name1],[path/to/file1.gz],[name2],[path/to/file2.gz],....
```

Note that this method won't allow configuring the junction type.

#### `mdsjunctionfile`

"MDS junction" track is the v2.0 of the junction track,
work-in-progress. This parameter will provide one or more tracks, the
file of which are hosted on the ProteinPaint server.

URL format:

```
?mdsjunctionfile=[name1],[path/to/file1.gz],[name2],[path/to/file2.gz],....
```

#### `bedjfile`

#### `bedjurl`

Provide one or more JSON-BED tracks, see [JSON-BED file format](https://drive.google.com/open?id=1GP81rer7YEb0RpIej2XXfx-k7SCAL1Od9At_oczf06A).
Each in the form of "name,path-or-url", all joined by comma.

#### `bampilefile`

[bampile file format](https://drive.google.com/open?id=1ZS0v_t1WvZ4NX8LRhWRM9twl-M3IZt7b4tRCPKyYW1M)

```
?bampilefile=[name1],[path/to/file1.gz],[name2],[path/to/file2.gz],...
```

#### `aicheckfile`

[aicheck file format](https://drive.google.com/open?id=1dZIOoLLbQE-kmZ31Ia_5cud30d9UeRodP4hRCSw3HII)

```
?aicheckfile=[name1],[path/to/file1.gz],[name2],[path/to/file2.gz],...
```

#### `svcnvfpkmurl`

#### `svcnvfpkmfile`

Manuscript in prep... will add user tutorial later.

Submits a custom GenomePaint track, must have the "svcnv" file. FPKM and
VCF files are optional.

URL format:

```
?svcnvfpkmurl=[track_name],svcnv,[URL to svcnv.gz file],fpkm,[URL to fpkm.gz file],vcf,[URL to vcf.gz file]
```

#### `mds`

Manuscript in prep...

Launches an official GenomePaint track.

URL format:

```
?mds=[dataset_label],[query_key]
```

## `study`

Loads a study using the JSON file location.

URL format:

```
?study=path/to/mystudy.json
```

On PP server, the corresponding file is <TP>/path/to/mystudy.json

View this tutorial on [how to organize data into a study](https://drive.google.com/open?id=121SsSYiCb3NCU8jz0bF7UujFSN-1Y20b674dqa30iXE).
