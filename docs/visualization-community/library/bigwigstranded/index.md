---
title: BigWig Stranded
---
# Description 
These code block examples can be used to generate a figure using bigwig stranded data as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-stranded-bigwig-example~40).

Use:  RNA-seq coverage data as a pair of bigWig tracks, with forward strand on top and reverse strand on bottom.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.5m3g10g8lvol)

# URL Key Example

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!

**Be sure to update lines 1, 3, 8, 10, and 13**
```JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "bigwigstranded",
            "name": "Track name",
            "strand1": {
                "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/1jG5YJYqxpQqz9JQx6xzJVV2J23p0jG5Bp9f60BJ\/sense.bw"
            },
            "strand2": {
                "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/JK7j09Bb0P33fZ0KFvJ07Gx292BQpXb95kZ2K87X\/antisense.bw",
                "normalize": {
                    "dividefactor": -1
                }
            }
        }
    ]
}
```

# File Key Example

!!!warning
If you are using a path on the HPC, the file must exist in a directory in the /tp directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!

**Be sure to update lines 1, 3, 8, 10, and 13**
```JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "bigwigstranded",
            "name": "Track name",
            "strand1": {
                "file": "proteinpaint_demo\/hg19\/strandedbigwig\/sense.bw"   
            },
            "strand2": {
                "file": "proteinpaint_demo\/hg19\/strandedbigwig\/antisense.bw",   
                "normalize": {
                    "dividefactor": -1
                }
            }
        }
    ]
}
```