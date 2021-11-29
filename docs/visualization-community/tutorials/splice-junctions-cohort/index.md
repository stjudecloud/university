---
title: Create a Splice-Junction Cohort
---

# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a splice junction from a cohort. 

Use: See splice junctions of a cohort
[ProteinPaint Google Docs](https://docs.google.com/document/d/1e0JVdcf1yQDZst3j77Xeoj_hDN72B6XZ1bo_cAd2rss/edit#heading=h.s58v64uwsl45)


!!!tip
The code block below remains static for any visualization
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
```
*	RefGene is static unless building a Lollipop plot.
*	Tracks are where the differentiation will be for each visualization.
*	ProteinPaint has case sensitive parameters like *indexUrl* vs *indexurl*.
*   Expert customization can be found in Google Docs hyperlink above.
!!!

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the json.gz data into DNAnexus.
*	Locate your json.gz in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the json.gz file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 14 in the example below.
*   Edit genome in line 8.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

!!!tip
* Other free storage software is compatible to use with the URL parameter.
* Follow the DNAnexus steps, but replace the URL accordingly.
!!!

**URL Parameter EXAMPLE**

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    nobox: 1,
    noheader: 1,
    block: 1,
    genome: "hg19",
    nativetracks: "Refgene",
    tracks: [
        {
            type: "mdsjunction",
            name: "Cname of track",
            url: "paste link here"
        }
    ]
})
```

# When data is hosted on the HPC
*   Log into VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the fpkm data onto the HPC.
*	Locate your fpkm data in your directory.
*	Find the path to this file.
*   Add path to file to line 14.
*   Edit genome in line 8.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 


**Path to File EXAMPLE**

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    nobox: 1,
    noheader: 1,
    block: 1,
    genome: "hg19",
    nativetracks: "Refgene",
    tracks: [
        {
            type: "mdsjunction",
            name: "name of track",
            file: "name/path_to_file/json.gz"
        }
    ]
})
```

