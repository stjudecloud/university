---
title: Splice Junction
---

# Description 

These code block examples can be used to generate a splice junction from a cohort as seen in 
[Viscom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-splice-junction-example~39).

Use: See splice junctions of a cohort
[ProteinPaint Google Docs](https://docs.google.com/document/d/1e0JVdcf1yQDZst3j77Xeoj_hDN72B6XZ1bo_cAd2rss/edit#heading=h.s58v64uwsl45)


# URL Parameter EXAMPLE

**Be sure to update lines 8, 13 and 14** 
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
      "type": "junction",
      "url": "enter link here",
      "name": "name of track"
    }
  ]
});
```

# Path to File EXAMPLE

**Be sure to update lines 8, 13 and 14** 
```JS
rrunproteinpaint({
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
      "type": "junction",
      "file": "nametopath/file.gz",
      "name": "name of track"
    }
  ]
});
```

