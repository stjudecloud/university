---
title: Hi-C
---

# Description 
These code block examples can be used to generate a heatmap as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-hi-c-example~37).

Use: The standard Hi-C visualization for chromatin conformation data highlighting  observed linkages between distant genomic regions.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1MQ0Z_AD5moDmaSx2tcn7DyVKGp49TS63pO0cceGL_Ns/edit)

# URL Key Example
Not currently supported in the VisEditor. No URL key enabled.

# File Key Example

!!!warning
If you are using a path on the HPC, the file must exist in a directory in the tp directory. For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section. percentile_max is for the resolution of the Hi-C plot. pyramidup must be 1 to be upward or 0 for downward. enzyme is the restriction enzyme used to cut. .gz and .tbi files are not accepted for Hi-C at this time. 
!!!

**Be sure to update lines 1, 3, 8, and 9** 

``` JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "hicstraw",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg19\/hic\/hic_demo.hic",
            "percentile_max": 95,
            "mincutoff": 1,
            "pyramidup": 1,
            "enzyme": "MboI"
        }
    ]
}
```

