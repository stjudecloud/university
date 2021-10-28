---
title: Create a visual with a VCF file 
---
**This is for external users that use DNANexus to host data**

**Coming Soon:** Video tutorials and running by a URL parameter

## create html 
*	open notepad or text editor
*	copy the below example code
*   change lines 25 and 26 (follow instructions below)
*	save the doc with the .html suffix
*	drag and drop into browser or open saved html file
*	view visualization 

## hosting on DNAnexus server:
*	host the data onto the DNAnexus server 
*	locate your VCF data in your DNAnexus project
*	ensure you have a .gz and .tbi file in your project
*	click the 3 dot menu for the .gz file and select download
    *	this prompts a GET URL link
*	copy the link 
!!!warning 
*this link allows others to access this file and is only available for 24h*
!!!
*	paste into line 25 in the example below
*	click the 3-dot menu for the .gz.zg (.tbi) file and select download
    *	this prompts a GET URL link
*	copy the link to line 26 in example below 
!!!warning
*this link allows others to access this file and is only available for 24h*
!!!
*	paste into line 26 in the example below

**Now that you have your data organized, now it is time to create your html file so that you can embed or see your visualization**

!!!tip
*	position, RefGene, or gene may be interchangeable
*	tracks are where the differentiation will be for each visualization
*	case sensitive lines like *indexUrl* vs *indexurl*
!!!

**EXAMPLE**

     1	<!DOCTYPE html>
     2	<html>
     3	<head>
     4	    <meta charset="utf-8">
     5	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
     6	    <title></title>
     7	    <link rel="stylesheet" href="">
     8	    <script src="https://proteinpaint.stjude.org/bin/proteinpaint.js"></script>
     9	</head>
    10	<body>
    11	  <div id="holder"></div>
    12	  <script type="text/javascript">
    13	    runproteinpaint({
    14	      host: "https://proteinpaint.stjude.org",
    15	      holder: document.getElementById('a'),
    16	      parseurl: true,
    17	      nobox: 1,
    18	      noheader: 1,
    19	      genome: "hg38",
    20	      gene: "BCL11A",
    21	      nativetracks: "RefGene",
    22	      tracks: [{
    23	        type: "vcf",
    24	        name: "Clinvar",
    25	        url: "https://westus.dl.azure.dnanex.us/F/DSYM/V1QVfjpp9PBg6q7v9FYxQXJYbXbz7JvJ528v5bvg/SJACT004_D.WholeGenome.g.vcf.gz",
    26	        indexUrl: "https://westus.dl.azure.dnanex.us/F/DSYM/068pg2qJ196zv105vYqFV0P9bvj2f3Z9XJF88KJp/SJACT004_D.WholeGenome.g.vcf.gz.tbi"
    27	      }]
    28	});
    29	  </script>
    30	</body>
    31	</html>%    