---
title: Create a GenomePaint Track with a BigWig Stranded File 
---
# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a GenomePaint track by using a BigWig Stranded file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-stranded-bigwig-example~40).

!!!tip
*	Position or gene may be interchangeable.
*   Genome can be different.
*	Tracks are where the differentiation will be for each visualization.
*	ProteinPaint has case sensitive lines like *indexUrl* vs *indexurl*.
!!!

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the bigwig stranded data into DNAnexus.
*	Locate your bigwig stranded data (sense and antisense) in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the sense.bw file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 16 in the example below.
*   Add file name in line 13
*   On the right of the file, click the 3 dot menu for the antisense.bw file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 19 in the example below.
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
  position: "chr8:128597079-130293343",
  nativetracks: "RefGene",
  tracks: [
    {
      name: "enter name here",
      strand1:
          {
            url: "enter link here/sense.bw"},
      strand2:
          {
            url: "enter link here/antisense.bw",
            normalize: {dividefactor: -1}
          },
      type: "bigwigstranded"
    }
  ]
})
```

# When data is hosted on the HPC
*   Log into VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the bigwig stranded data onto the HPC.
*	Locate your bigwig stranded data in your directory.
*	Find the path to the sense and antisense files.
*   Add path to files to lines 16 & 19:
*   Add name of file to line 13
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
  position: "chr8:128597079-130293343",
  nativetracks: "RefGene",
  tracks: [
    {
      name: "enter name here",
      strand1:
          {
            file: "name/filetopath/sense.bw"},
      strand2:
          {
            file: "name/filetopath/antisense.bw",
            normalize: {dividefactor: -1}
          },
      type: "bigwigstranded"
    }
  ]
})
```