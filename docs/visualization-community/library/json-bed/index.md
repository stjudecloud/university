---
title: JSON BED
---

# Description
These code block examples can be used to generate a figure using JSON BED data as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-json-bed-example~38).

Use: Genomic feature alignment
[ProteinPaint Google Docs](https://docs.google.com/document/d/1GP81rer7YEb0RpIej2XXfx-k7SCAL1Od9At_oczf06A/)


# URL Key Example

**Be sure to update lines 8, 12, 13, 16** 
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  tracks: [
    {
      "type": "bedj",
      "name": "name of track",
      "url": "enter link here",
      "stackheight": 16,
      "stackspace": 1,
      color: "teal"
    }
  ]
});
```

# File Key Example

**Be sure to update lines 8, 12, 13, 16** 
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  tracks: [
    {
      "type": "bedj",
      "name": "name of track",
      "file": "anno/gencode.v34.hg19.gz",
      "stackheight": 16,
      "stackspace": 1,
      color: "teal"
    }
  ]
});
```