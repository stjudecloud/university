---
title: Create a GenomePaint Track with a BAM File 
---
# Description
In this tutorial, one will learn how to run the ProteinPaint command from within VisCom to create a GenomePaint track by using a BAM file as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-bam-track-example-beta~29).

Use: sequence reads alignment
[ProteinPaint Google Docs](https://docs.google.com/presentation/d/1oGI72Vooc25oAKir4DmarNDjDmUcigQk65FU8niSE_k/edit#slide=id.g8398dfdab9_0_0)


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
			type:'bam',
			url:'insert link here',
			name:'enter name of file here',
		}
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
*   Update the name in the track, line 15 in either example.

## When data is hosted on the DNAnexus server:
*	Upload the BAM data into DNAnexus.
*	Locate your BAM data in your DNAnexus project.
*	On the right of the file, click the 3 dot menu for the .bam file.
*   Select download in the dropdown.
    *	This will prompt a GET URL link.
*	Click 'Get URL' to copy the temporary link.

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

*	Paste the link for the *url*, line 14. 
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
	host:'https://proteinpaint.stjude.org',
	holder: document.getElementById("#visualization_container"),
	parseurl:true,
	block: true,
	nobox:1,
	noheader:1,
	genome:'hg19',
	position:'chr4:55589707-55589907',
	nativetracks:'RefGene',
	tracks:[   
		{
			type:'bam',
			url:'paste link here',
			name:'name of track',
		}
	]
})
```

# When data is hosted on the HPC
*	Upload the BAM data onto the HPC.
*	Locate your BAM data in your directory.
*	Find the path to this file.
*   Add path to file in line 14.
*   Save your visualization in VisCom.
*   Click the 'Go Back' button in VisCom.
*   Click your visualization title to render. 

**Path to File EXAMPLE**
```JS
runproteinpaint({   
	host:'https://proteinpaint.stjude.org',
	holder: document.getElementById("#visualization_container"),
	parseurl:true,
	block: true,
	nobox:1,
	noheader:1,
	genome:'hg19',
	position:'chr4:55589707-55589907',
	nativetracks:'RefGene',
	tracks:[   
		{
			type:'bam',
			file:'paste name/path_to_file/.bam',
			name:'name of track',
		}
	]
})
```