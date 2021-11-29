---
title: Create a GenomePaint MA+Volcano plot
---
# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a GenomePaint MA+Volcano plot by using a BigWig Stranded file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-mavolcano-plots-example~43)

Use: Differential gene expression
[ProteinPaint Google Docs](https://docs.google.com/document/d/1gEhywyMzMQRM10NFvsObw1yDSWxVY7pxYjsQ2-nd6x4/edit)


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
*   Upload the .txt file to DNAnexus
*   On the right of the file, click the 3 dot menu for the .txt file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*   Paste the link into line 9 in the example below.
*	Upload the bigwig stranded data into DNAnexus.
*	Locate your bigwig stranded data (sense and antisense) in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the sense.bw file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 14 in the example below.
*   Add file name in line 12
*   On the right of the file, click the 3 dot menu for the antisense.bw file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 17 in the example below.
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
    genome: "hg19",
    noheader: 1,
    mavolcanoplot: {
        genome: "hg19",
        noheader: 1,
        url: "enter hyperlink here",
        tracks: [
            {
                name: "enter name here",
                strand1: {
                    url: "name/filetopath/sense.bw"
                },
                strand2: {
                    url: "name/filetopath/antisense.bw",
                    normalize: {
                        dividefactor: -1
                    }
                },
                type: "bigwigstranded"
            }
        ]
    }
})
```

# When data is hosted on the HPC
*   Log into VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the bigwig stranded data and .txt file onto the HPC.
*	Locate your bigwig stranded data and .txt file in your directory.
*	Find the path to the .txt, sense and antisense files.
*   Add path to .txt file to line 9.
*   Add path to files to lines 14 and 17.
*   Add name of file to line 12.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

**Path to File EXAMPLE**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    genome: "hg19",
    noheader: 1,
    mavolcanoplot: {
        genome: "hg19",
        noheader: 1,
        file: "enter file path here",
        tracks: [
            {
                name: "enter name here",
                strand1: {
                    url: "name/filetopath/sense.bw"
                },
                strand2: {
                    url: "name/filetopath/antisense.bw",
                    normalize: {
                        dividefactor: -1
                    }
                },
                type: "bigwigstranded"
            }
        ]
    }
})