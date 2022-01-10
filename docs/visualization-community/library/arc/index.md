---
title: Arc
---
# Description 
These code block examples can be used to generate an allelic-imblance figure as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-arc-track-example~108).

Use: View pair-wise chromatin interactions at a locus
[ProteinPaint Google Docs](https://docs.google.com/document/d/1MQ0Z_AD5moDmaSx2tcn7DyVKGp49TS63pO0cceGL_Ns/edit#heading=h.8zct8j3cscak)


# URL Key Example

**Be sure to update lines 8, 9, 14 and 15**

``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    position: "chr11:7839893-9165172",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "hicstraw",
            url: "enter link here",
            name: "name of track",
            percentile_max: 99,
            mode_arc: true,
            mode_hm: false
        }
    ]
})
```


# File Key Example

**Be sure to update lines 8, 9, 14 and 15**

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    position: "chr11:7839893-9165172",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "hicstraw",
            bedfile: "name/path_to_file.hic",
            name: "name of track",
            percentile_max: 99,
            mode_arc: true,
            mode_hm: false
        }
    ]
})
```