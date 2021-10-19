---
title: Create a visual with a VCF file (3 videos)
---
**First, figure out where your data will be hosted. Will you be using DNAnexus or will your data be hosted on a local server?**

## hosting on DNAnexus server (1 video):
*	get the data onto the server (ADD LINK TO SHOW HOW TO DO THIS)
*	locate your VCF data in your DNAnexus project
*	ensure you have a .gz and .tbi file in your project
*	click the 3 dot menu for the .gz file and select download
    *	this prompts a GET URL link
*	copy the link **(WARNING)** *this link allows others to access this file*
*	paste into line 25 in the example below
*	click the 3-dot menu for the .gz.zg (.tbi) file and select download
    *	this prompts a GET URL link
*	copy the link to line 26 in example below **(WARNING)** *this link allows others to access this file*
*	paste into line 26 in the example below

## hosting on your own server (1 video):
*	get the data onto your server (ADD LINK TO SHOW HOW TO DO THIS)
*	locate your VCF data in your directory
*	get the path for the .gz and .tbi files (e.g.: /home/user/VCF/test.gz)

**Now that you have your data organized, now it is time to create your html file so that you can embed or see your visualization**

## create html (1 video)
*	open a text editor, visual studio, notepad or word doc
*	replace line 13-28 of this example below with your json code created from GenomePaint
*	save the doc with the .html suffix
*	drag and drop into browser or open saved html file
*	view visualization and/or embed

## Notes (included in above video)
*	position and gene may be interchangeable
*	tracks are where the differentiation will be for each visualization
*	case sensitive lines like *indexUrl* vs *indexurl*

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
    15	      holder: document.getElementById("holder"),
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
    26	        indexURL: "https://westus.dl.azure.dnanex.us/F/DSYM/068pg2qJ196zv105vYqFV0P9bvj2f3Z9XJF88KJp/SJACT004_D.WholeGenome.g.vcf.gz.tbi"
    27	      }]
    28	});
    29	  </script>
    30	</body>
    31	</html>%    


