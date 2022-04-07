---
title: RNA Splice Junction
---

# Description 

These code block examples can be used to generate a RNA splice junction from a cohort as seen in [Viscom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-splice-junction-example~39).

Use: This visualization displays the number of mapped junction reads precisely along with a gene model and will include alternative splicing and isoforms if available.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1PFva3Mn-U4VPNW0vHHC-CSnYBeotRnqbhCMQPmyLQG4/edit)

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
In order to render .gz files they must also have the .tbi file associated. What happens is that the runproteinpaint() looks for the .tbi file and cannot parse the .gz so we must give it an alternate path to the .tbi file.
!!!

# URL Parameter EXAMPLE
**Be sure to update lines 1, 3, 8, and 9**
```JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "junction",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg19\/junction\/file.gz"
        }
    ]
}
```

!!!tip
If you are using a path on the HPC, the file must exist in a directory in the /tp directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!


# Path to file EXAMPLE
**Be sure to update lines 1, 3, 8, 9 and 10**
```JS
{
    "genome": "hg19",
    "nativetracks": "RefGene",
    "position": "chr17:7565096-7590856",
    "block": true,
    "tracks": [
        {
            "type": "junction",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/3yqzZzvjPkQkK3jfvQybzZZkYF6VV8byQP0f038k\/file.gz",
            "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/pXPbx91jBjp30Fq62BVjPZK91q774Jp04B42XppZ\/junction.gz.tbi"
        }
    ]
}
```