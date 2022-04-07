---
title: GenomePaint
---
# Description
GenomePaint is track-based visualization app that enables the ready comparison of genomic localized data from multiple methods including RNA seq, ChIP seq, HiC, SNV, SV, CNV, and methylation data.

Use: Explore coding and non-coding variants in pediatric cancer. 
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit)


# URL Key Example

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
In order to render .gz files they must also have the .tbi file associated. What happens is that the ProteinPaint looks for the .tbi file and cannot parse the .gz so we must give it an alternate path to the .tbi file.
!!!

**Be sure to update lines 1, 3, 8, 9, 10, 12, 13, 16, 17** 
```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "BCL11A",
    "block": true,
    "tracks": [
        {
            "type": "mdssvcnv",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/Jv2gz6GzjPf4jFbjBKj6gQb6G9BvGk5VP4v2Y15X\/TCGA_DLBC.CNV.gz",
            "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/ZxG3XXjjGkbz5zQ62PjXgGx5Z1Bk10gBkB27J667\/TCGA_DLBC.CNV.gz.tbi",
            "checkvcf": {
                "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/3kjygy5y3Bpbz8zJK3bZQyzVqkvp1QV1y80PV3Fp\/TCGA_DLBC.vcf.gz",
                "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/3Q294j76KFX21QPVYB5zkQbpf434p9G50z0qXpQ9\/TCGA_DLBC.vcf.gz.tbi"
            },
            "checkexpressionrank": {
                "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/pbXv48vp54GBQv8JQFQy2FB6Yfxyzj4ZFVKGV68G\/TCGA_DLBC.fpkm.gz",
                "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/BfKvpZJ828ZkYB2x5qkXp568FXfxVFV0fZ9X8jf8\/TCGA_DLBC.fpkm.gz.tbi"
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

**Be sure to update lines 1, 3, 8, 9, 11, 14** 
```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "BCL11A",
    "block": true,
    "tracks": [
        {
            "type": "mdssvcnv",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg38\/GP\/TCGA_DLBC.vcf.gz",
            "checkvcf": {
                "file": "proteinpaint_demo\/hg38\/GP\/TCGA_DLBC.vcf.gz"
            },
            "checkexpressionrank": {
                "file": "proteinpaint_demo\/hg38\/GP\/TCGA_DLBC.fpkm.gz"
            }
        }
    ]
}
```