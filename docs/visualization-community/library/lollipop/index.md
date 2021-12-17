---
title: Create a Lollipop Figure
---

# Description 
These code block examples can be used to generate a lollipop figure as seen in [VisCom](https://viz.stjude.cloud/zhou-lab/visualization/proteintpaint-lollipop-example~57).

Use: Coding mutations and gene fusions
[ProteinPaint Google Docs](https://docs.google.com/document/d/1D78jKVaQrWBhAjnfmCqj0Cirf6s-CdcbfPkuZQMT8Co/edit#heading=h.tyjcwt)


# Example for Pediatric 
**Be sure to update lines 4 and 7**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    gene: "name of gene",
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    dataset: "Pediatric"
})
```

# Example for COSMIC 
**Be sure to update lines 4 and 7**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    gene: "name of gene",
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    dataset: "COSMIC"
})
```

# Example for ClinVar 
**Be sure to update lines 4 and 7**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    gene: "name of gene",
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    dataset: "ClinVar"
})
```

# Example for CIViC 
**Be sure to update lines 4 and 7**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    gene: "name of gene",
    nobox: 1,
    noheader: 1,
    genome: "hg19",
    dataset: "CIViC"
})
```