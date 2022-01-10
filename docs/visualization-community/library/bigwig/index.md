---
title: BigWig
---
# Description
These code block examples can be used to generate a figure using bigwig data as seen in  [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-bigwig-example~34).

Use: Quantitative data at genomic postions
[ProteinPaint Google Docs](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.6spyog171fm9)


# URL Parameter EXAMPLE

**Be sure to update lines 8, 13, 14 and 15** 
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  nativetracks: "RefGene",
  tracks: [
    {
      "type": "bigwig",
      "url": "enter link here",
      "name": "name of track",
      "height": 100
    },
  ]
})
```

# Path to File EXAMPLE

**Be sure to update lines 8, 13, 14 and 15** 
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  nativetracks: "RefGene",
  tracks: [
    {
      "type": "bigwig",
      "file": "enter name/path_to_file.bw",
      "name": "name of track",
      "height": 100
    },
  ]
})
```