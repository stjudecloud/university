---
title: BigWig
---
# Description
These code block examples can be used to generate a figure using bigwig data as seen in  [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-bigwig-example~34).

Use: This format shows the depths of reads in RNA seq, ChIP seq, or genomic sequence as aligned to a reference genome.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.6spyog171fm9)


# URL Key Example

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
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
            "type": "bigwig",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/gvz3YyGqb2v1gZGZQy67QQbPKfKY70q3yZb8ZZBB\/Nalm6_ATACseq.bw",   
            "height": 100
        }
    ]
}
```

# File Key Example

!!!warning
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
            "type": "bigwig",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg19\/bigwig\/file.bw",  
            "height": 100
        }
    ]
}
```