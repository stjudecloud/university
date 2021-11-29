---
title: Create a Mutation Landscape (heatmap) with a .txt File
---
# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a mutation landscape (heatmap) track by using a .txt file as seen in [VisCom](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/genomes-for-kids-a-landscape-of-pediatric-cancer-demonstration-visualization~94).

Use: Mutation landscaping
[ProteinPaint Google Docs](https://docs.google.com/document/d/1bx3VRdTzJDYdmt4CaU4PfHCOz5JSfTyuSFIuGTx-X2g/edit)


!!!tip
* The code block below remains static for any visualization (except *nativetracks* for Lollipop)

```JS
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

*	study or studyview contain(s) different parameters.

``` JS
studyview: {
        hide_navigation: 1,
        name: "test",
        mutationset: [{
            snvindel_url: "enter link here",
       }],
        show_heatmap: 1,
	}
})
```

*	ProteinPaint has case sensitive parameters like *indexUrl* vs *indexurl*.
*   Expert customization can be found in Google Docs hyperlink above.
!!!

## Getting started:
*   Login to VisCom and create a new visualization.
*   Copy the code block example that best fits where your data lives.
*   Update the genome parameter, line 6.
*   Update the name parameter, line 8.

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the .txt data into DNAnexus.
*	Locate your .txt data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .txt file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into *snvindel_url*, line 11.
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
    holder: visualizationContainer[0],
    nobox: 1,
    noheader: true,
    genome: "hg38",
    studyview: {
        hide_navigation: 1,
        name: "test",
        mutationset: [{
            snvindel_url: "enter link here",
       }],
        show_heatmap: 1,
	}
})
```

# When data is hosted on the HPC
*	Upload the .txt data onto the HPC.
*	Locate your .txt data in your directory.
*	Find the path to this file.
*   Add path to file in line 11.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 


**Path to File EXAMPLE**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    nobox: 1,
    noheader: true,
    genome: "hg38",
    studyview: {
        hide_navigation: 1,
        name: "test",
        mutationset: [{
            snvindel: "name/path_to_file.txt",
       }],
        show_heatmap: 1,
	}
})
```