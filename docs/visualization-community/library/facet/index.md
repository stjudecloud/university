---
title: Track List and Facet Table
---
# Description 
These code block examples can be used to generate Track List and Facet Table as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/genomepaint-track-list-and-facet-table-example~41).

Use: 
[ProteinPaint Google Docs](https://docs.google.com/document/d/1e0JVdcf1yQDZst3j77Xeoj_hDN72B6XZ1bo_cAd2rss/edit#heading=h.pkybixxj4p6)


# URL Parameter EXAMPLE

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

# Path to file EXAMPLE

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