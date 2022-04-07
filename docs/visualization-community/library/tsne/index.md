---
title: t-SNE (Sample Scatterplot)
---
# Description 
These code block examples can be used to generate a t-SNE as seen in [VisCom](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/t-sne-plot-of-903-pediatric-blood-cancer-rna-seq-profiles-including-71-pdx-samples~56). 

Use: tSNE plots are a display that converts high dimensional data to an interpretable proximity plot such that similarity may be assessed across RNA-seq profiles.
[ProteinPaint Google Docs](https://docs.google.com/document/d/1XHi_WqVdarUNbc_ESMEBp2l-zwhnGcIfiBWA5n2omZQ/)


# URL Key Example
This currently is not supported with a url key at this time. 

!!!tip
If you are using a path on the HPC, the file must exist in a directory in the /tp directory.
For more details, see our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section.
!!!


# File key Example

**Be sure to update lines 8, 9, 14, 15**
```JS
{
	"genome": "hg38",
	"mdssamplescatterplot": {
        "mds": {
            "dslabel": "Pediatric2",
            "querykey": "svcnv"
        },
        "analysisdata_file": "proteinpaint_demo/hg38/mdstsne/file.json",
        "dimensions": {
            "width": 700,
            "height": 400
        }
    }
}
```


If you need an example of how the JSON should be formatted, you can:
1. Example 1: Go to https://proteinpaint.stjude.org/
   * Select Scatterplot
      * Select Example
         * Select Code 
            * Review the JSON formatting

2. Go [here](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/t-sne-plot-of-903-pediatric-blood-cancer-rna-seq-profiles-including-71-pdx-samples~56) to see a VisCom example. 

Furthermore, you can have your excel sheet converted to JSON; there are many ways to do this, but one example is using [BeautifyTools](https://beautifytools.com/excel-to-json-converter.php) and debug by using [https://jsonlint.com/](https://jsonlint.com/).