---
title: Hi-C
---

# Description 
These code block examples can be used to generate a heatmap as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-hi-c-example~37).

Use: View chromatin interactions at a locus
[ProteinPaint Google Docs](https://docs.google.com/document/d/1MQ0Z_AD5moDmaSx2tcn7DyVKGp49TS63pO0cceGL_Ns/edit)

# URL Parameter EXAMPLE
**Be sure to update lines 8, 9, 14, 15 and 19** 

``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    position: "chr7:13749862-20841903",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "hicstraw",
            url: "enter link here",
            name: "name of track",
            percentile_max: 95,
            mincutoff: 1,
            pyramidup: 1,
            enzyme: "name of restriction enzyme"
        }
    ]
})
```

# Path to File EXAMPLE
**Be sure to update lines 8, 9, 14, 15 and 19** 

``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    position: "chr7:13749862-20841903",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "hicstraw",
            file: "enter name/path_to_file.hic",
            name: "name of track",
            percentile_max: 95,
            mincutoff: 1,
            pyramidup: 1,
            enzyme: "name of restriction enzyme"
        }
    ]
})
```