---
title: Profile Gene Value (PGV) 
---
# Description 
These code block examples can be used to generate a profile gene value (pvg) as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-profile-gene-value-example~35)

Use: Used to display gene. expression results from RNA seq across a cohort of samples.

[ProteinPaint Google Docs](https://docs.google.com/document/d/1yrRpDUZWSRGuCa0snGwRuo721WRHgdYTX7GWIsZ_fSY/)

!!!warning
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section. The <file> keys can be switched with <url> keys. Legendimg is optional.
!!!


# URL Parameter EXAMPLE
**Be sure to update line 2, 3, 8, 12, 16. BEDJ keys need to be updated**
```JS
{
	"block": true,
	"genome": "hg19",
    "position": "chr14:24549316-24584223",
    "tracks": [
        {
            "type": "profilegenevalue",
            "genevaluetrack": {
                "file": "proteinpaint_demo/hg19/pgv/pgvdemo.fpkm.gz"
            },
            "genevaluetype": "FPKM",
            "legendimg": {
                "file": "proteinpaint_demo/hg19/pgv/HMM.png",
                "width": 400,
                "height": 400
            },
            "name": "Demo chromHMM",
            "genevaluematchname": "sampleID",
            "tracks": [
                {
                    "type": "bedj",
                    "file": "proteinpaint_demo/hg19/pgv/sample1.gz",
                    "stackheight": 18,
                    "stackspace": 1,
                    "toppad": 1,
                    "bottompad": 1,
                    "onerow": 1,
                    "name": "Sample 1",
                    "sampleID": "101"
                },
                {
                    "type": "bedj",
                    "file": "proteinpaint_demo/hg19/pgv/sample2.gz",
                    "stackheight": 18,
                    "stackspace": 1,
                    "toppad": 1,
                    "bottompad": 1,
                    "onerow": 1,
                    "name": "Sample 2",
                    "sampleID": "102"
                },
                {
                    "type": "bedj",
                    "file": "proteinpaint_demo/hg19/pgv/sample3.gz",
                   "stackheight": 18,
                    "stackspace": 1,
                    "toppad": 1,
                    "bottompad": 1,
                    "onerow": 1,
                    "name": "Sample 3",
                    "sampleID": "103"
                },
                {
                    "type": "bedj",
                    "file": "proteinpaint_demo/hg19/pgv/sample4.gz",
                    "stackheight": 18,
                    "stackspace": 1,
                    "toppad": 1,
                    "bottompad": 1,
                    "onerow": 1,
                    "name": "Sample 4",
                    "sampleID": "104"
                },
                {
                    "type": "bedj",
                    "file": "proteinpaint_demo/hg19/pgv/sample5.gz",
                    "stackheight": 18,
                    "stackspace": 1,
                    "toppad": 1,
                    "bottompad": 1,
                    "onerow": 1,
                    "name": "Sample 5",
                    "sampleID": "105"
                },
                {
                    "type": "bedj",
                    "file": "proteinpaint_demo/hg19/pgv/sample6.gz",
                    "stackheight": 18,
                    "stackspace": 1,
                    "toppad": 1,
                    "bottompad": 1,
                    "onerow": 1,
                    "name": "Sample 6",
                    "sampleID": "106"
                }
            ]
        }
    ]
}
```