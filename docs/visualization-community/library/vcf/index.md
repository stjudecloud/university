---
title: Create a GenomePaint Track with a VCF File
---
# Description 
These code block examples can be used to generate a figure using vcf data as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-vcf-track-example~30).

Use: Explore coding and non-coding variants in cancer 
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit)


# URL Parameter EXAMPLE

**Be sure to update lines 7, 8, 13, 14 and 15**
``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    gene: "name of gene",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "vcf",
            name: "name of track",
            url: "enter link here",
            indexUrl: "enter link here"
        }
    ]
})
```


# Path to File EXAMPLE

**Be sure to update lines 7, 8, 13 and 14**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    gene: "name of gene",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "vcf",
            name: "name of track",
            file: "paste name/path_to_file/vcf.gz here"
        }
    ]
})
```