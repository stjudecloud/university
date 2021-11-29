---
title: Embed Your Visualization
---
# Description 
In this part of the tutorial, one will learn how to [embed](https://stjudecloud.github.io/docs/guides/proteinpaint/developers-guide/embedding-proteinpaint/) a html file based on the code block developed to make a visualization. 

## Create a html file
**You will need a text editor to create a .html file for embedding**
*	Open notepad or a text editor.
*	Copy your code block you generated for your visualization.
    * Replace the run ProteinPaint () command with your code block.
      * This should be everything between the script <>.
*	Save the file with the .html suffix.
*	Drag and drop the .html file into the browser, open the saved .html file by double-clicking, or save within a website.


**Block Code Example**

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>
      <link rel="stylesheet" href="">
      <script src="https://proteinpaint.stjude.org/bin/proteinpaint.js"></script>
   </head>
   <body>
      <div id="holder"></div>
      <script type="text/javascript">
         runproteinpaint({
         host: "https://proteinpaint.stjude.org",
         holder: document.getElementById('a'),
         parseurl: true,
         nobox: 1,
         noheader: 1,
         genome: "hg38",
         gene: "BCL11A",
         nativetracks: "RefGene",
         tracks: [{
         type: "vcf",
         name: "Clinvar",
          url: "https://westus.dl.azure.dnanex.us/F/DSYM/V1QVfjpp9PBg6q7v9FYxQXJYbXbz7JvJ528v5bvg/SJACT004_D.WholeGenome.g.vcf.gz",
         indexUrl: "https://westus.dl.azure.dnanex.us/F/DSYM/068pg2qJ196zv105vYqFV0P9bvj2f3Z9XJF88KJp/SJACT004_D.WholeGenome.g.vcf.gz.tbi"
         }]
         });
      </script>
   </body>
</html>
% 
```