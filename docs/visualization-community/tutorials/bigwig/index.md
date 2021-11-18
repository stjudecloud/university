---
title: Create a visual with a BigWig file 
---
**This is for external users that use DNANexus to host data**

**Coming Soon:** Video tutorials and running by a URL parameter

## create html 
*	open notepad or text editor
*	copy the below example code
*   change line 18 (follow instructions below)
*	save the doc with the .html suffix
*	drag and drop into browser or open saved html file
*	view visualization 

## hosting on DNAnexus server:
*	host the data onto the DNAnexus server 
*	locate your BigWig data in your DNAnexus project
*	ensure you have a .bw file in your project
*	click the 3 dot menu for the .bw file and select download
    *	this prompts a GET URL link
*	copy the link 
!!!warning 
*this link allows others to access this file and is only available for 24h*
!!!
*	paste into line 18 in the example below

**Now that you have your data organized, now it is time to create your html file so that you can embed or see your visualization**

!!!tip
*	position, RefGene, or gene may be interchangeable
*	tracks are where the differentiation will be for each visualization
*	case sensitive lines like *indexUrl* vs *indexurl*
!!!

**EXAMPLE**

    1	<!DOCTYPE html>
    2   </head>
    3	<body>
    4	  <div id="holder"></div>
    5	  <script type="text/javascript">
    6	  runproteinpaint({   
    7		host:'https://proteinpaint.stjude.org',
    8		holder: document.getElementById('a'),
    9		parseurl:true,
    10		block: true,
    11		nobox:1,
    12		noheader:1,
    13		genome:'hg19',
    14      nativetracks:'RefGene',
    15		tracks:[   
    16			{
    17				type:'bigwig',
    18				file:'proteinpaint_demo/hg19/bam/kit.exon8.del.bam',
    19				name:'BigWig test',
    20              height: 100
    21			}
    22		]
    23	});
    24	  </script>
    25	</body>
    26	</html>%