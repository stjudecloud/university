---
title: Create an Allelic Imbalance Track 
---
# Description
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create an Allelic Imbalance track as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-allelic-imbalance-example~32).


!!!tip
*	Position or gene may be interchangeable. 
*   Genome can be different. 
*	Tracks are where the differentiation will be for each visualization.
*	ProteinPaint has case sensitive lines like *indexUrl* vs *indexurl*.
!!!

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the aicheck data into DNAnexus.
*	Locate your aicheck data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .gz file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 14 in the example below.
*   Add name of file to line 15. 
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
  position: "chr8:126890266-132795076",
  nativetracks: "RefGene",
  tracks: [
    {
      type: "aicheck",
      url: "enter link here",
      name: "enter name here",
    },
  ]
});
```

# When data is hosted on the HPC
*   Log into VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the aicheck data onto the HPC.
*	Locate your aicheck data in your directory.
*	Find the path to this file.
*   Add path to file in line 14
*   Add name in line 15
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
  position: "chr8:126890266-132795076",
  nativetracks: "RefGene",
  tracks: [
    {
      type: "aicheck",
      file: "name/pathtofile/file.gz",
      name: "enter name here",
    },
  ]
});
```

