---
title: Create a HiC plot
---

# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a hi-C plot by using a .hic file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-hi-c-example~37).

Use: View chromatin interactions at a locus
[ProteinPaint Google Docs](https://docs.google.com/document/d/1MQ0Z_AD5moDmaSx2tcn7DyVKGp49TS63pO0cceGL_Ns/edit)


!!!tip
* The code block below remains static for any visualization (except *nativetracks* for Lollipop)

``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    nativetracks: "RefGene",
```

*   Genome and position can change values.

``` JS
genome: 
postion: 
```

*	Tracks contain different parameters.

``` JS
    tracks: [
        {
            type: "hicstraw",
            bedfile: "proteinpaint_demo/hg19/arc/mango.gz",
            name: "Arc Track Demo",
            percentile_max: 99,
            mode_arc: true,
            mode_hm: false
        }
    ]
})
```
*	RefGene is static unless building a Lollipop plot.
*	Tracks are where the differentiation will be for each visualization.
*	ProteinPaint has case sensitive parameters like *indexUrl* vs *indexurl*.
*   Expert customization can be found in Google Docs hyperlink above.
!!!

## Getting started:
*   Login to VisCom and create a new visualization.
*   Copy the code block example that best fits where your data lives.
*   Update the genome parameter, line 8.
*   Update the position parameter, line 9.
*   Update the name in the track, line 15 in either example.

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the .hic data into DNAnexus.
*	Locate your .hic in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .hic file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 14 in the example below.
*   Edit genome in line 6.
*   Edit enzyme in line 19.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

!!!tip
* Other free storage software is compatible to use with the URL parameter.
* Follow the DNAnexus steps, but replace the URL accordingly.
!!!

**URL Parameter EXAMPLE**

``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    position: "chr7:13749862-20841903",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "hicstraw",
            url: "enter link here",
            name: "name of track",
            percentile_max: 95,
            mincutoff: 1,
            pyramidup: 1,
            enzyme: "MboI"
        }
    ]
})
```

# When data is hosted on the HPC
*   Log into VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the hic data onto the HPC.
*	Locate your hic data in your directory.
*	Find the path to this file.
*   Add path to file to line 14.
*   Edit genome in line 6.
*   Edit enxyme in line 19.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 


**Path to File EXAMPLE**

``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    position: "chr7:13749862-20841903",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "hicstraw",
            file: "enter name/path_to_file.hic",
            name: "name of track",
            percentile_max: 95,
            mincutoff: 1,
            pyramidup: 1,
            enzyme: "MboI"
        }
    ]
})
```