---
title: Create an Expression Rank plot for a Cohort
---
# Description 
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a gene expression rank track by using a .fpkm file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/proteinpaint-expression-rank-example~36).

Use: Expression rank based on samples in a cohort
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit#heading=h.q9ccqxkrh30s)


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
            type: "mdsexpressionrank",
            url: "enter hyperlink here",
            name: "test name",
            sample: "sample name"
        }
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
*   Update the postition parameter, line 9.
*   Update the name of the track, line 15.
*   Update the name of the sample, line 16.

## When data is hosted on the DNAnexus server:
*   Login to VisCom and create a new visualization.
*   Copy the code block example below.
*	Upload the .fpkm data into DNAnexus.
*	Locate your .fpkm in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .fpkm file.
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
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    position: "chr8:127340055-128243343",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "mdsexpressionrank",
            url: "enter hyperlink here",
            name: "test name",
            sample: "sample name"
        }
    ]
})
```


# When data is hosted on the HPC
*	Upload the fpkm data onto the HPC.
*	Locate your fpkm data in your directory.
*	Find the path to this file.
*   Add path to file to line 14.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

!!!tip
If you need to convert a .rds or flat file to .fpkm please reach out to [Xin Zhou's group](https://www.stjude.org/directory/z/xin-zhou.html)
!!!


```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: document.getElementById('a'),
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    genome: "hg38",
    position: "chr8:127340055-128243343",
    nativetracks: "RefGene",
    tracks: [
        {
            type: "mdsexpressionrank",
            file: " enter name/file_to_path.fpkm.gz ",
            name: "name of track",
            sample: "sample name"
        }
    ]
})
```