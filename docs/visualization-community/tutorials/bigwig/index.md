---
title: Create a GenomePaint track with a BigWig file 
---

# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a GenomePaint track by using a BigWig file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-bigwig-example~34).

Use: Quantitative data at genomic postions
[ProteinPaint Google Docs](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.6spyog171fm9)


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
      "type": "bigwig",
      "url": "link to .bw file",
      "name": "name of file here",
      "height": 100
    },
  ]
})
```

*	RefGene is static unless building a Lollipop plot.
*	Tracks are where the differentiation will be for each visualization.
*	ProteinPaint has case sensitive parameters like *indexUrl* vs *indexurl*.
* Expert customization can be found in Google Docs hyperlink above.
!!!

## Getting started:
*   Login to VisCom and create a new visualization.
*   Copy the code block example that best fits where your data lives.
*   Update the genome parameter, line 8.
*   Update the name in the track, line 14.
*   Update the height in the track, line 15.

## When data is hosted on the DNAnexus server:
*	Upload the bigwig data into DNAnexus.
*	Locate your bigwig data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .bw file.
* Select download in the dropdown.
  *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	  Paste the link into *url* line 13.
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
      "url": "paste link here",
      "name": "name of track",
      "height": 100
    },
  ]
})
```

# When data is hosted on the HPC
*	Upload the bigwig data onto the HPC.
*	Locate your bigwig data in your directory.
*	Find the path to this file.
* Add path to file to line 13:
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
  nativetracks: "RefGene",
  tracks: [
    {
      "type": "bigwig",
      "file": "paste name/path_to_file.bw",
      "name": "name of track",
      "height": 100
    },
  ]
})
```