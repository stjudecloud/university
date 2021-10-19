---
title: Create visual with BAM file from (3 videos)
---
## hosting on DNAnexus server (1 video):
*	get the data onto the server  
*	locate your BAM data in your DNAnexus project
*	ensure you have a .bam and .bai file
*	click the 3 dot menu for the .bam file and select download
    *	this prompts a GET URL link
*	copy the link **(WARNING)** *this link allows others to access this file*
*	paste into line 18 in the example below and change "file:" to "url:"

## hosting on your own server (1 video):
*	get the data onto your server 
*	locate your BAM data in your directory
*	get the path for the .bam and .bai files (e.g.: /home/user/BAM/test.bam)
    *	put this at line 18 in the example below and change "file:" to "url:"

## create html (1 video to complete it out)
*	open a text editor, visual studio, notepad or word doc
*	replace the grey part of this example below with your json code created from GenomePaint

**EXAMPLE**

    1	<!DOCTYPE html>
    2   </head>
    3	<body>
    4	  <div id="holder"></div>
    5	  <script type="text/javascript">
    6	  runproteinpaint({   
    7		host:'https://proteinpaint.stjude.org',
    8		holder: document.getElementById("#visualization_container"),
    9		parseurl:true,
    10		block: true,
    11		nobox:1,
    12		noheader:1,
    13		genome:'hg19',
    14		position:'chr4:55589707-55589907',
    15		nativetracks:'RefGene',
    16		tracks:[   
    17			{
    18				type:'bam',
    19				file:'proteinpaint_demo/hg19/bam/kit.exon8.del.bam',
    20				name:'WES KIT exon mutation Example',
    21			}
    22		]
    23	});
    24	  </script>
    25	</body>
    26	</html>%     
