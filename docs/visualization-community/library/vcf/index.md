---
title: VCF
---
# Description 
These code block examples can be used to generate a figure using vcf data as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-vcf-track-example~30).

Use: This track localizes the variant data on reference genomes and can render frequency data for cohorts.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit)

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
In order to render <gz> files they must also have the <tbi> file associated. What happens is that the ProteinPaint looks for the <tbi> file and cannot parse the <gz> so we must give it an alternate path to the <tbi> file.>
!!!

# Path to file EXAMPLE
**Be sure to update lines 1, 3, 8, and 9**
```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "BCL11A",
    "block": true,
    "tracks": [
        {
            "type": "vcf",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg38\/GP\/TCGA_DLBC.vcf.gz"
        }
    ]
}
```

# URL Parameter EXAMPLE
**Be sure to update lines 1, 3, 8, 9 and 10**
```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "BCL11A",
    "block": true,
    "tracks": [
        {
            "type": "vcf",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/DSYM\/QBPkx3pb635bV1z7z9XK3PpkzVp8XY67yKjj2v6Z\/SJACT004_D.WholeGenome.g.vcf.gz",
            "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/DSYM\/3zkPkpvb54Q5PzJ1k039BP52Zv4kz99p2GpBQ89Y\/SJACT004_D.WholeGenome.g.vcf.gz.tbi"
        }
    ]
}
```