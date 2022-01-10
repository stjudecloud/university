---
title: Profile Gene Value (PGV) 
---
# Description 
These code block examples can be used to generate a profile gene value (pvg) as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-profile-gene-value-example~35)

Use: Profiling results & gene-level values
[ProteinPaint Google Docs](https://docs.google.com/document/d/1yrRpDUZWSRGuCa0snGwRuo721WRHgdYTX7GWIsZ_fSY/)

# URL Parameter EXAMPLE

**Be sure to update lines 10, 14, 16, 18, 22, 23, 24 and 25** 

```JS
runproteinpaint({
  "host": "https://proteinpaint.stjude.org",
  "holder": visualizationContainer[0],
  "parseurl": true,
  "block": true,
  "nobox": 1,
  "noheader": 1,
  "genome": "hg19",
  "nativetracks": "RefGene",
  "position": "chr14:24549316-24584223",
  "tracks": [{
    "type": "profilegenevalue",
    "genevaluetrack": {
      "url": "proteinpaint_demo/hg19/pgv/pgvdemo.fpkm.gz"
    },
    "genevaluetype": "FPKM",
    "legendimg": {
      "url": "proteinpaint_demo/hg19/pgv/HMM.png",
      "width": 400,
      "height": 400
    },
    "name": "name of track,
    "genevaluematchname": "sampleID",
    "tracks": [
      {"type": "bedj", "url": "enter file path here", "stackheight": 18, "stackspace": 1, "toppad": 1, "bottompad": 1, "onerow": 1, "name": "Sample 1", "sampleID": "101"}
    ]
  }]
});
```
# URL Parameter EXAMPLE

**Be sure to update lines 10, 14, 16, 18, 22, 23, 24 and 25** 
 
```JS
runproteinpaint({
  "host": "https://proteinpaint.stjude.org",
  "holder": visualizationContainer[0],
  "parseurl": true,
  "block": true,
  "nobox": 1,
  "noheader": 1,
  "genome": "hg19",
  "nativetracks": "RefGene",
  "position": "chr14:24549316-24584223",
  "tracks": [{
    "type": "profilegenevalue",
    "genevaluetrack": {
      "file": "proteinpaint_demo/hg19/pgv/pgvdemo.fpkm.gz"
    },
    "genevaluetype": "FPKM",
    "legendimg": {
      "file": "proteinpaint_demo/hg19/pgv/HMM.png",
      "width": 400,
      "height": 400
    },
    "name": "name of track,
    "genevaluematchname": "sampleID",
    "tracks": [
      {"type": "bedj", "file": "enter file path here", "stackheight": 18, "stackspace": 1, "toppad": 1, "bottompad": 1, "onerow": 1, "name": "Sample 1", "sampleID": "101"}
    ]
  }]
});
```