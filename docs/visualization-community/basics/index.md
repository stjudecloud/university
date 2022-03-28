---
title: Learning the Code Block Basics
---
Our new visualization editor allows you to build visualizations using our new editor interface. The interface prompts certain fields that are required to generate the visualization so you can spend more time exploring and creating visualizations and less time coding. 

For a description about each field, see our [How to use our Editor](https://university.stjude.cloud/docs/visualization-community/editors/) section. There are 2 ProteinPaint tracks that must render from our Traditional Code Editor: [Lollipop](https://university.stjude.cloud/docs/visualization-community/library/lollipop/) and [Track List and Data Facet](https://university.stjude.cloud/docs/visualization-community/library/facet/). The remaining Apps also will use the Traditional Code Editor at this time. Check out the other code blocks in the left navbar. Lastly, the tracks use a track object where the apps have defined objects and thus why apps and tracks are not combined together. 

Example data for all tracks and apps can be found by downloading [this](https://pecan.stjude.cloud/static/pp-support/pp.demo.tgz) tarball (~30m). This data is used to prefill our VisEditor. The source is unknown and have spliced files.

Below are the static attributes that run in the background and not seen in the code block or interface:

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",  //this server is public facing 
    holder: visualizationContainer[0],    //ProteinPaint.stjude.org examples use a different holder
    parseurl: true,
    block: true,  //only used for tracks, not apps 
    nobox: 1,
    noheader: 1,
//Below are two attributes that show in the interface. 
    nativetracks: "RefGene",  // is a toggle in the UI
    genome: hg38,  // is a dropdown in the UI, but needs to be in the traditional code block
```

Further explanation of all attributes in ProteinPaint can be found [here](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.6spyog171fm9) (page 3).

!!!tip
For the traditional code editor to work, it must have true JSON where each attribute is closed within quotes.
!!!

ProteinPaint has a GenomeViwer where multiple tracks can be run together or a user can run individual Apps. 

**A list of each is below:**

**Genome Viewer (App)**
Tracks:
GenomePaint,
JSON Bed,
Profile Gene Value,
Hi-C
Splice Junction
Arc Track,
BAM,
BigWig,
Allelic Imbalance,
Expression Rank,
Lollipop,
Track list and Data facet Table

**APPS:**
Fusion Editor,
Mutation heatmap,
Scatterplot,
MA+ Volcano plot,
Single Cell

See the code block library in the left navbar for the specifics on each track or app. They either require a <url> (and <indexURL>) or <file> key to access your data. Briefly, <url> is to an open source data storage like DNAnexus or AWS. In order to render <gz> files they must also have the <tbi> file associated. What happens is that the <runproteinpaint()> looks for the <tbi> file and cannot parse the <gz> so we must give it an alternate path to the <tbi> file.>






