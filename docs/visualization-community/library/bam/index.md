---
title: BAM
---
# Description
These code block examples can be used to generate a figure using bam data as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-bam-track-example-beta~29).

Use: sequence reads alignment
[ProteinPaint Google Docs](https://docs.google.com/presentation/d/1oGI72Vooc25oAKir4DmarNDjDmUcigQk65FU8niSE_k/edit#slide=id.g8398dfdab9_0_0)


# URL Key Example

**Be sure to update lines 8, 9, 14 and 15**
```JS
runproteinpaint({   
	host:'https://proteinpaint.stjude.org',
	holder: visualizationContainer[0],
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
			url:'enter .bam link here',
			indexURL: 'enter .bai link here',
			name:'name of track',
		}
	]
})
```

# File Key Example

**Be sure to update lines 8, 9, 14 and 15**
```JS
runproteinpaint({   
	host:'https://proteinpaint.stjude.org',
	holder: visualizationContainer[0],
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