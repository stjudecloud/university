---
title: Create a Single-Cell track with a .fpkm file 
---

# Description 
These code block examples can be used to generate a Single-Cell figure by using a .fpkm file as seen in [VisCom](https://viz.stjude.cloud/hyde-lab/visualization/retinal-regeneration-single-cell-of-chick-retina-following-nmdagrowth-factor-gf-insulinfgf-treatment~73).

Use: Single Cell omics viewer
[ProteinPaint Google Docs](https://docs.google.com/document/d/1YVxw2aPru6bAlTzUfE9GAQAvzbiBiqJiBR1X-g5ZBLI/edit)

# URL Parameter EXAMPLE

**Be sure to update lines 6 and 7**
```JS
runproteinpaint({
	host:'https://proteinpaint.stjude.org',
    holder:document.getElementById('aaa'),
    noheader:1,
	singlecell:{
       genome:'galGal5',
       jsonUrl:'enter link here'
    },
})
```


# Path to File EXAMPLE

**Be sure to update lines 6 and 7** 
```JS
runproteinpaint({
	host:'https://proteinpaint.stjude.org',
    holder:document.getElementById('aaa'),
    noheader:1,
	singlecell:{
       genome:'galGal5',
       jsonfile:'name/path_to_file.json'
    },
})
```

