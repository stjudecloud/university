---
title: Allelic-Imbalance 
---
# Description 
These code block examples can be used to generate an allelic-imblance figure as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-allelic-imbalance-example~32). 

Use: From tumor and germline DNA
[ProteinPaint Google Docs](https://docs.google.com/document/d/1dZIOoLLbQE-kmZ31Ia_5cud30d9UeRodP4hRCSw3HII/)


# URL Parameter EXAMPLE

**Be sure to update lines 8, 9, 14, 15**
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  position: "chr8:126890266-132795076",
  nativetracks: "RefGene",
  tracks: [
    {
      type: "aicheck",
      url: "enter link here",
      name: "name of track",
    },
  ]
})
```


# Path to File EXAMPLE

**Be sure to update lines 8, 9, 14, 15**
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  position: "chr8:126890266-132795076",
  nativetracks: "RefGene",
  tracks: [
    {
      type: "aicheck",
      file: "name/path_to_file.gz",
      name: "name of track",
    },
  ]
})
```

