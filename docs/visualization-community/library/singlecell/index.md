---
title: Single Cell
---

# Description 
These code block examples can be used to generate a Single-Cell figure by using a .fpkm file as seen in [VisCom](https://viz.stjude.cloud/hyde-lab/visualization/retinal-regeneration-single-cell-of-chick-retina-following-nmdagrowth-factor-gf-insulinfgf-treatment~73).

Use: A data driven dimensional reduction method used to display single cell RNA seq data from a large number of cells.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1YVxw2aPru6bAlTzUfE9GAQAvzbiBiqJiBR1X-g5ZBLI/edit)

# URL Key Example
This currently is not supported with a url key at this time. 


!!!tip
If you are using a path on the HPC, the file must exist in a directory in the /tp directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!

# File Key Example

**Be sure to update lines 6 and 7** 
```JS
{
 "singlecell": {
 	"genome": "hg19",
 	"jsonfile": "proteinpaint_demo/hg19/singlecell/singlecell.json"
	}
}
```

If you need an example of how the JSON should be formatted, you can:
1. Example 1: Go to https://proteinpaint.stjude.org/
   * Select Single Cell
      * It will load an Example
         * Select Code 
            * Review the JSON formatting

Furthermore, you can have your excel sheet converted to JSON; there are many ways to do this, but one example is using [BeautifyTools](https://beautifytools.com/excel-to-json-converter.php) and debug by using [https://jsonlint.com/](https://jsonlint.com/).