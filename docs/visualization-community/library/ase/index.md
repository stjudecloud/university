---
title: ASE
---
# Description 
These code block examples can be used to generate an ASE as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-allele-specific-expression-ase-example-beta~33).

Use: Allele-specific expression analysis
[ProteinPaint Google Docs](https://docs.google.com/document/d/1owXUQuqw5hBHFERm0Ria7anKtpyoPBaZY_MCiXXf5wE/edit#heading=h.ly3x0hngycmz)


# URL Key Example

**Be sure to update lines 7 and 9**

```JS
runproteinpaint({
	holder:document.getElementById('visualization_container'),
	host:'https://proteinpaint.stjude.org',
	parseurl:true,
	nobox:1,
	block:1,
	noheader:1,
	position:'chr5:1252462-1297568',
	genome:'hg38',
	nativetracks:'refgene',
	tracks:[
		{
			type:'ase',
			name:'Demo ASE',
			url:'enter link here',
            indexUrl: 'enter link here',
			hetsnp_minbaf:0.1,
			hetsnp_maxbaf:0.8,
			samplename:'sample name',
				url: 'proteinpaint_demo/hg38/ase/sample12.bam',
				indexUrl: 'enter link here',
				rnabamtotalreads: 155650314,
				checkrnabam:{
					hetsnp_minbaf:.2,
					hetsnp_maxbaf:.8
			}
		}
	]
})
```

# File Key Example

**Be sure to update lines 7 and 9**

```JS
runproteinpaint({
  	"host": "https://proteinpaint.stjude.org/",
  	"holder": visualizationContainer[0],
	"block": 1,
	"nobox": 1,
	"noheader": 1,
 	"genome": "hg19",
	"nativetracks":"refgene",
 	"tkjsonfile": "proteinpaint_demo/hg19/tklist/tracks.json"
})
```