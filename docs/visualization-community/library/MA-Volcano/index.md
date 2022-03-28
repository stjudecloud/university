---
title: MA+Volcano 
---
# Description 
These code block examples can be used to generate MA+Volcano plot by using a BigWig Stranded file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-mavolcano-plots-example~43)

Use: The MA plot contrasts the magnitude of expression (M) on the x axis against the amplitude (A) of change between two states. The volcano plot compares the amplitude of change (x-axis ) to the statistical reliability of that change (-log transformed p value, y-axis).

[ProteinPaint Google Docs](https://docs.google.com/document/d/1gEhywyMzMQRM10NFvsObw1yDSWxVY7pxYjsQ2-nd6x4/edit)


!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section. Supported by the Traditional Code Editor only.
!!!

# URL Parameter EXAMPLE
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
          "url": "https://westus.dl.azure.dnanex.us/F/D/FqJyV919Y8XGZ0XZ1BFZK53PpzJGqBvV5GKjyx1Z/mavb_demo_sense.bw"
        },
        "strand2": {
          "url": "https://westus.dl.azure.dnanex.us/F/D/FPk82BJpJqp20gZ7Z0ggp1b84XZ8J1KKYx2qz78Z/mavb_demo_sense.bw",
          "normalize": {
            "dividefactor": -1
          }
        },
        "type": "bigwigstranded"
      }
    ]
  }
}
```

# Path to file EXAMPLE
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
```