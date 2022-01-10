---
title: BigWig Stranded
---
# Description 
These code block examples can be used to generate a figure using bigwig stranded data as seen in [VisCom](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomepaint-stranded-bigwig-example~40).

Use:  Quantitative data at genomic positions using forward and reverse strand reads
[ProteinPaint Google Docs](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.5m3g10g8lvol)

# URL Parameter EXAMPLE

**Be sure to update lines 8, 9, 13, 16 and 19**
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  position: "chr8:128597079-130293343",
  nativetracks: "RefGene",
  tracks: [
    {
      name: "name of track",
      strand1:
          {
            url: "enter link here/sense.bw"},
      strand2:
          {
            url: "enter link here/antisense.bw",
            normalize: {dividefactor: -1}
          },
      type: "bigwigstranded"
    }
  ]
})
```

**Path to File EXAMPLE**

**Be sure to update lines 8, 9, 13, 16 and 19**
```JS
runproteinpaint({
  host: "https://proteinpaint.stjude.org",
  holder: visualizationContainer[0],
  parseurl: true,
  block: true,
  nobox: 1,
  noheader: 1,
  genome: "hg19",
  position: "chr8:128597079-130293343",
  nativetracks: "RefGene",
  tracks: [
    {
      name: "name of track",
      strand1:
          {
            file: "name/filetopath/sense.bw"},
      strand2:
          {
            file: "name/filetopath/antisense.bw",
            normalize: {dividefactor: -1}
          },
      type: "bigwigstranded"
    }
  ]
})
```