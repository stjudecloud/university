---
title: Create a GenomePaint Track with a VCF File
---
# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a GenomePaint track by using a VCF file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-vcf-track-example~30).

!!!tip
*	Position or gene may be interchangeable.
*   Genome can be different.
*	Tracks are where the differentiation will be for each visualization.
*	ProteinPaint has case sensitive lines like *indexUrl* vs *indexurl*.
!!!

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the VCF data into DNAnexus.
*	Locate your VCF data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .gz file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 13 in the example below.
*	Click the 3 dot menu for the .gz.gz (.tbi) file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Copy the link to line 14 in the example below.

!!!warning
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link into line 14 in the example below.
*   Add name of file to line 12. 
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
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    gene: "BCL11A",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "vcf",
            name: "name of file",
            url: "insert vcf.gz hyperlink here",
            indexUrl: "insert vcf.gz.tbi link here"
        }
    ]
})
```

# When data is hosted on the HPC
*   Log into VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the VCF data onto the HPC.
*	Locate your VCF data in your directory.
*	Ensure you have a .gz file in your directory.
*	Find the path to this file.
*   Add path to file in line 13.
*   Add name of file to line 12.
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
    genome: "hg38",
    gene: "BCL11A",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "vcf",
            name: "Clinvar",
            file: "insert name/path to file/vcf.gz here"
        }
    ]
})
```