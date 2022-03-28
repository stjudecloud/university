---
title: JSON BED
---

# Description
These code block examples can be used to generate a figure using JSON BED data as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-json-bed-example~38).

Use: This customizable bed format shows defined genomic regions identified by ChIP seq, mass spec or other means.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1GP81rer7YEb0RpIej2XXfx-k7SCAL1Od9At_oczf06A/)


# URL Key Example

!!!tip
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!

**Be sure to update lines 1, 3, 8, 9, 10, and 14** 
```JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "bedj",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/YpGGYBXzpP05Fyv64G1BjVkgFffp24GxyvYzbZ1F\/gencode.gz",
            "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/yf9188G1431Pg6YXkJ07F1238qg5YvF7x3pZfbPx\/gencode.gz.tbi",
            "stackheight": 16,
            "mincutoff": 1,
            "stackspace": 1,
            "color": "teal"
        }
    ]
}
```

# File Key Example

!!!tip
If you are using a path on the HPC, the file must exist in a directory in the <tp> directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!

**Be sure to update lines 1, 3, 8, and 9** 
```JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "bedj",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg19\/bedj\/gencode.gz",
            "stackheight": 16,
            "mincutoff": 1,
            "stackspace": 1,
            "color": "teal"
        }
    ]
}
```