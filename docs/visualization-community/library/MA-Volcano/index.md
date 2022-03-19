---
title: MA+Volcano 
---
# Description 
These code block examples can be used to generate MA+Volcano plot by using a BigWig Stranded file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-mavolcano-plots-example~43)

Use: Differential gene expression
[ProteinPaint Google Docs](https://docs.google.com/document/d/1gEhywyMzMQRM10NFvsObw1yDSWxVY7pxYjsQ2-nd6x4/edit)


Supported by the Traditional Code Editor only. 
You can switch out the <file> key with <url> key. 

**Be sure to update lines 4, 7, 9, 12, 14 and 17** 
```JS
{
"genome":"hg19",
"mavolcanoplot": {
    "url": "https://pecan.stjude.cloud/static/pp-support/example.files/DIPG_H33K27MvsWT_noACVR_adj.txt",
    "tracks": [
      {
        "name": "Demo RNA-seq coverage",
        "strand1": {
          "file": "proteinpaint_demo/hg19/mavb/mavb_demo_sense.bw"
        },
        "strand2": {
          "file": "proteinpaint_demo/hg19/mavb/mavb_demo_antisense.bw",
          "normalize": {
            "dividefactor": -1
          }
        },
        "type": "bigwigstranded"
      }
    ]
  }
}