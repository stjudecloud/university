---
title: Learning the Code Block Basics
---
Our new visualization editor allows you to prompt tracks for genome views without having to build any code. 

!!!Apps vs tracks
All tracks can be accessed via our easy editor, but all apps must be rendered by the traditional code editor.
!!!

To add code to VisCom's editor, a <runproteinpaint> call must be used. To find more details about this software, please see the [ProteinPaint Google Docs](https://docs.google.com/document/d/1JWKq3ScW62GISFGuJvAajXchcRenZ3HAvpaxILeGaw0/) for further detail. 

Example data for all tracks can be found by downloading [this](https://pecan.stjude.cloud/static/pp-support/pp.demo.tgz) tarball (~30m).

!!!tip
* ProteinPaint is case sensitive, but the URL key is case in-sensitive.
* Lollipop does not have a `file` or `url` key.
* 2DMAF is not supported in VisCom.
!!!

Below is the static code block that most visualizations will share. `Holder` will be different in the ProteinPaint code examples so please be sure to use <visualizationContainer[0]> in VisCom. Additionally, `Genome` will be dependent on the species that you are investigating. Further explanation of all attributes in ProteinPaint can be found [here](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.6spyog171fm9) (page 3).

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    nativetracks: "RefGene",
    genome: hg38,
```

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
Fusion Editor
Mutation heatmap
Scatterplot
MA+ Volcano plot
Single Cell

See the code block library in the left navbar for the specifics on each track or app. They either require a <url> or <file> key to access your data. The tracks use a track object where the apps have defined objects and thus why apps and tracks are not combined together. 


