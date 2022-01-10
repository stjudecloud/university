---
title: Single Cell
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

If you need an example of how the JSON should be formatted, you can:
1. Example 1: Go to https://proteinpaint.stjude.org/
   * Select Single Cell
      * It will load an Example
         * Select Code 
            * Review the JSON formatting

Furthermore, you can have your excel sheet converted to JSON; there are many ways to do this, but one example is using [BeautifyTools](https://beautifytools.com/excel-to-json-converter.php) and debug by using [https://jsonlint.com/](https://jsonlint.com/).