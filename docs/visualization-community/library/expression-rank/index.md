---
title: Expression Rank
---
# Description 
These code block examples can be used to generate a gene expression rank track by using a fpkm file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/proteinpaint-expression-rank-example~36).

Use: Expression rank based on samples in a cohort
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit#heading=h.q9ccqxkrh30s)


# URL Parameter EXAMPLE

**Be sure to update lines 8, 9, 14, 15 and 16**

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    position: "chr8:127340055-128243343",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "mdsexpressionrank",
            url: "enter hyperlink here",
            name: "name of track",
            sample: "name of sample"
        }
    ]
})
```

# Path to file EXAMPLE

**Be sure to update lines 8, 9, 14, 15 and 16**

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    position: "chr8:127340055-128243343",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "mdsexpressionrank",
            file: " enter name/file_to_path.fpkm.gz ",
            name: "name of track",
            sample: "name of sample"
        }
    ]
})
```