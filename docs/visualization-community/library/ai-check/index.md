---
title: Allelic-Imbalance 
---
# Description 
These code block examples can be used to generate an allelic-imblance figure as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-allelic-imbalance-example~32). 

Use: Displays the allelic imbalance of the heterozygous SNP markers in a tumor genome as compared to this patient’s germline genome, as a way of indicating loss-of-heterozygosity.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1dZIOoLLbQE-kmZ31Ia_5cud30d9UeRodP4hRCSw3HII/)


# URL Key Example

!!!tip
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
In order to render <gz> files they must also have the <tbi> file associated. What happens is that the ProteinPaint looks for the <tbi> file and cannot parse the <gz> so we must give it an alternate path to the <tbi> file.>
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
            "type": "aicheck",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/zYf5XqZ04fBKk6VbQFQbv8P8BG8xyGyQp3FzFkG8z/\aicheck.gz",
            "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/b0YJQx5F110Z90P9q7ZZFXqv03Gv41Qfy0yX7gYK/\aicheck.gz.tbi"
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
            "type": "aicheck",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg19\/aicheck\/file.gz" 
        }
    ]
}
```

