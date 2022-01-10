---
title: MA+Volcano 
---
# Description 
These code block examples can be used to generate MA+Volcano plot by using a BigWig Stranded file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-mavolcano-plots-example~43)

Use: Differential gene expression
[ProteinPaint Google Docs](https://docs.google.com/document/d/1gEhywyMzMQRM10NFvsObw1yDSWxVY7pxYjsQ2-nd6x4/edit)

# URL Key Example

**Be sure to update lines 4, 7, 9, 12, 14 and 17** 
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    genome: "hg19",
    noheader: 1,
    mavolcanoplot: {
        genome: "hg19",
        noheader: 1,
        url: "enter hyperlink here",
        tracks: [
            {
                name: "name of track",
                strand1: {
                    url: "name/filetopath/sense.bw"
                },
                strand2: {
                    url: "name/filetopath/antisense.bw",
                    normalize: {
                        dividefactor: -1
                    }
                },
                type: "bigwigstranded"
            }
        ]
    }
})
```
# File Key Example

**Be sure to update lines 4, 7, 9, 12, 14 and 17** 
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    genome: "hg19",
    noheader: 1,
    mavolcanoplot: {
        genome: "hg19",
        noheader: 1,
        file: "enter file path here",
        tracks: [
            {
                name: "name of track",
                strand1: {
                    url: "name/filetopath/sense.bw"
                },
                strand2: {
                    url: "name/filetopath/antisense.bw",
                    normalize: {
                        dividefactor: -1
                    }
                },
                type: "bigwigstranded"
            }
        ]
    }
})