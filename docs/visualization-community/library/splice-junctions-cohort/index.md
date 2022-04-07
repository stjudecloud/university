---
title: Splice Junction
---

# Description 

These code block examples can be used to generate a splice junction from a cohort as seen in [Viscom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-splice-junction-of-a-cohort-example~109).

Use: This visualization displays the number and color codes the type of mapped junction reads precisely along with a gene model for multiple samples including canonical and non-canonical splice forms.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1e0JVdcf1yQDZst3j77Xeoj_hDN72B6XZ1bo_cAd2rss/edit#heading=h.s58v64uwsl45)


# URL Key Example
This currently is not supported with a url key at this time. 

!!!tip
If you are using a path on the HPC, the file must exist in a directory in the /tp directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!


# File Key Example

**Be sure to update lines 1, 3, 8, and 9** 
```JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "mdsjunction",
            "name": "Track name",
            "file2": "proteinpaint_demo\/hg19\/junction\/file.gz"
        }
    ]
}
```

