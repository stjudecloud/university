---
title: Create a GenomePaint track with a BigWig file 
---

# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a GenomePaint track by using a BigWig file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-bigwig-example~34).

!!!tip
*	Position or gene may be interchangeable.
*   Genome can be different.
*	Tracks are where the differentiation will be for each visualization.
*	ProteinPaint has case sensitive lines like *indexUrl* vs *indexurl*.
!!!

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the bigwig data into DNAnexus.
*	Locate your bigwig data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .bw file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 13 in the example below.
*   Add file name in line 14
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
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  nativetracks: "RefGene",
  tracks: [
    {
      "type": "bigwig",
      "url": "link to .bw file",
      "name": "name of file here",
      "height": 100
    },
  ]
})
```

# When data is hosted on the HPC
*   Log into VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the bigwig data onto the HPC.
*	Locate your bigwig data in your directory.
*	Find the path to this file.
*   Add path to file to line 13:
*   Add name of file to line 14
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 


**Path to File EXAMPLE**
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  nativetracks: "RefGene",
  tracks: [
    {
      "type": "bigwig",
      "file": "name/filetopath/.bw",
      "name": "name of file here",
      "height": 100
    },
  ]
})
```