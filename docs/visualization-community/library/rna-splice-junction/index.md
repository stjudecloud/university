---
title: RNA Splice Junction
---

# Description 

These code block examples can be used to generate a RNA splice junction from a cohort as seen in [Viscom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-splice-junction-example~39).

Use: See splice junctions of RNA
[ProteinPaint Google Docs](https://docs.google.com/document/d/1PFva3Mn-U4VPNW0vHHC-CSnYBeotRnqbhCMQPmyLQG4/edit)


# URL Parameter EXAMPLE

**Be sure to update lines 8, 13, 14, 17, 18, 21, 22** 
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    nativetracks: "refgene",
    tracks: [
        {
            type: "junction",
            url: "enter link here",
            name: "RNA splice junction demo",
            list_description: [
                {
                    k: "Test 1",
                    v: "Description 1"
                },
                {
                    k: "Test 2",
                    v: "Description 2"
                }
            ]
        }
    ]
})
```

# Path to File EXAMPLE

**Be sure to update lines 8, 13, 14, 17, 18, 21, 22** 
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    nativetracks: "refgene",
    tracks: [
        {
            type: "junction",
            file: "proteinpaint_demo/hg19/junction/file.gz",
            name: "RNA splice junction demo",
            list_description: [
                {
                    k: "Test 1",
                    v: "Description 1"
                },
                {
                    k: "Test 2",
                    v: "Description 2"
                }
            ]
        }
    ]
})
```

