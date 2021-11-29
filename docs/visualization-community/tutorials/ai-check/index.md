---
title: Create an Allelic Imbalance Track 
---
# Description
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create an Allelic Imbalance track as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-allelic-imbalance-example~32). 

Use: From tumor and germline DNA
[ProteinPaint Google Docs](https://docs.google.com/document/d/1dZIOoLLbQE-kmZ31Ia_5cud30d9UeRodP4hRCSw3HII/edit)

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

*	Tracks contain different parameters.

``` JS
tracks: [
    {
      type: "aicheck",
      url: "enter link here",
      name: "enter name here",
    },
  ]
})
```
*	ProteinPaint has case sensitive parameters like *indexUrl* vs *indexurl*.
*   Expert customization can be found in Google Docs hyperlink above.
!!!

## Getting started:
*   Login to VisCom and create a new visualization.
*   Copy the code block example that best fits where your data lives.
*   Update the genome parameter, line 8.
*   Update the position parameter, line 9.
*   Update the name in the track, line 14 in either example. 


## When data is hosted on the DNAnexus server:
*	Upload the aicheck data into DNAnexus.
*	Locate your aicheck data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .gz file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into *url*, line 14.
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
})
```

# When data is hosted on the HPC
*	Upload the aicheck data onto the HPC.
*	Locate your aicheck data in your directory.
*	Find the path to this file.
* Add path to file in line 14.
* Save your visualization in VisCom.
* Click the 'Go Back' button in VisCom.
* Click your visualization title to render. 

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
      file: "name/path_to_file.gz",
      name: "enter name here",
    },
  ]
})
```

