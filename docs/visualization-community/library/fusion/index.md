---
title: Fusion
---

# Description 
This code block example can be used to generate a Fusion Editor as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/proteinpaint-fusioneditor-example-and-app~42.

Use: Used for displaying the structure of gene fusions and the expected translational effects of the fusion.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1DRVzE_WenG490eRYB7VGFOygtSqtF5L97rhK0HOUCNY/).



Please upload CICERO output as a text file. 
https://docs.google.com/document/d/1jkVYRPIJpkWvA9vqtahRlNn63Hk5DehjHbF_BH9k7Rs/

https://pecan.stjude.cloud/static/hg19/fusioneditor/cicero.output

!!!Tip
/n must be used for line reads to work in this JSON format in the VisEditor
!!!

**Be sure to update line 1, 3 and 4**
```JS
{
    "genome": "hg19",
    "fusioneditor": {
        "input": "//enter cicero output here",
        "dataname": "Cicero demo"
    }
}
```