---
title: BAM
---
# Description
These code block examples can be used to generate a figure using bam data as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-bam-track-example-beta~29).

Use: sequence reads alignment
[ProteinPaint Google Docs](https://docs.google.com/presentation/d/1oGI72Vooc25oAKir4DmarNDjDmUcigQk65FU8niSE_k/edit#slide=id.g8398dfdab9_0_0)



# URL Key Example

!!!Tip
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
In order to render <bam> files they must also have the <bai> file associated. What happens is that the <runproteinpaint()> looks for the <abi> file and cannot parse the <bam> so we must give it an alternate path to the <bai> file.>
!!!

**Be sure to update lines 1, 3, 8, 9, and 10**
```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "chr4:55589607-55590007",
    "block": true,
    "tracks": [
        {
            "type": "bam",
            "name": "Track name",
            "url": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/QGf0F8zB4GYBzPQKg27BvkPgqgk90yqyKfz67gVy\/kit.exon8.del.bam",
            "indexURL": "https:\/\/westus.dl.azure.dnanex.us\/F\/D\/gp8VX25X9YkKvKQqkjvfjPgz834zX51V0x6j7zF0\/kit.exon8.del.bam.bai"
        }
    ]
}
```

# File Key Example

!!!Tip
If you are using a path on the HPC, the file must exist in a directory in the <tp> directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!

**Be sure to update lines 1, 3, 8, and 9**
```JS
{
    "genome": "hg38",
    "nativetracks": "RefGene",
    "position": "chr4:55589607-55590007",
    "block": true,
    "tracks": [
        {
            "type": "bam",
            "name": "Track name",
            "file": "proteinpaint_demo\/hg19\/bam\/kit.exon8.del.bam"
        }
    ]
}
```