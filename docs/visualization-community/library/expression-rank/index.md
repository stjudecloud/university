---
title: Expression Rank
---
# Description 
These code block examples can be used to generate a gene expression rank track by using a fpkm file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/proteinpaint-expression-rank-example~36).

Use: RNA-seq coverage data as a pair of bigWig tracks, with forward strand on top and reverse strand on bottom.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit#heading=h.q9ccqxkrh30s)


# URL Parameter EXAMPLE

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section. The sample parameter must be unique to the file otherwise it will **not** render. 
!!!

**Be sure to update lines 1, 3, 8, 9, 10, and 11**

```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "chr8:127340055-128243343",
    "block": true,
    "tracks": [
        {
            "type": "mdsexpressionrank",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/X5FV210570zX090JvqJ32kxXX0XxGVyFYP1XbX05\/TCGA.fpkm.gz",
            "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/VP5JfbPJKkzBpB5j0KXX33zZfyqjqQjq5VKqXb3J\/TCGA.fpkm.gz.tbi",
            "sample": "TCGA-GS-A9TQ"
        }
    ]
}
```

# Path to file EXAMPLE

!!!warning
If you are using a path on the HPC, the file must exist in a directory in the /tp directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!

**Be sure to update lines 1, 3, 8, 9, and 10**

```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "chr8:127340055-128243343",
    "block": true,
    "tracks": [
        {
            "type": "mdsexpressionrank",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg38\/exprank\/TCGA.fpkm.gz",
            "sample": "TCGA-GS-A9TQ"
        }
    ]
}
```