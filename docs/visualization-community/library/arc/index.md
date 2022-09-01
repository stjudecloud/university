---
title: Arc
---
# Description 
These code block examples can be used to generate an arc figure as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-arc-track-example~108).

Use: Used to display chromatin capture data by focusing on the frequency of links between distant genomic regions.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1MQ0Z_AD5moDmaSx2tcn7DyVKGp49TS63pO0cceGL_Ns/edit#heading=h.8zct8j3cscak)

!!!warning
mode_arc must be true with mode_hm set to false for the arc to render. If mode_arc is false, then it behaves like a Hi-C where the pyramid is up. Additional configs can be found in the UI of the visualization. percentile_max is for the resolution of the Hi-C plot.
!!!

# URL Key Example

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
In order to render .gz files they must also have the .tbi file associated. What happens is that the ProteinPaint looks for the .tbi file and cannot parse the .gz so we must give it an alternate path to the .tbi file. These are also going to be under a new key: bedURL and bedindexURL. If you are using .hic files, check out the hic examples instead.
!!!

**Be sure to update lines 1, 3, 9, and 10**

``` JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr11:7839893-9165172",
    "block": true,
    "tracks": [
        {
            "type": "hicstraw",
            "name": "Track name",
            "bedurl": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/FbJ88pZ7jFz60Y5Jj8BvbyG5QGfZX7fZ3ppK53Bf\/mango.gz",
            "bedindexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/1q8FYk4gyBxVbGyQPpP460gk67g5YGpKZZY0pF0b\/mango.gz.tbi",
            "percentile_max": 99,
            "mode_arc": true,
            "mode_hm": false
        }
    ]
}
```


# File Key Example

!!!warning
If you are using a path on the HPC, the file must exist in a directory in the /tp directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section. If you are using a .gz file use bedfile key instead.
!!!

**Be sure to update lines 1, 3, 8, 9, and 10**

```JS
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
            "percentile_max": 99,
            "mode_arc": true,
            "mode_hm": false
        }
    ]
}
```