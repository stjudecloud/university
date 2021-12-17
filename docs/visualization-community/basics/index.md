---
title: Code Block Basics
---

For adding code to the VisCom's editor, a ```runproteinpaint()``` must be used, which uses javascript. To find more details about this software please see the [ProteinPaint Google Docs](https://docs.google.com/document/d/1JWKq3ScW62GISFGuJvAajXchcRenZ3HAvpaxILeGaw0/edit) for help. 

Let's begin covering the basics of the code block.

!!!tip
* ProteinPaint is case sensitive.
* Lollipop does not have a ```file``` or ```url``` parameter.
* The code block has static parameters for many of the visualizations. See below an example:
!!!

```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    parseurl: true,
    block: true,
    nobox: 1,
    noheader: 1,
    nativetracks: "RefGene",
```

```Genome``` will be dependent on your species that you are using. Sometimes this is replaced with ```postion```. 

``` JS
genome: hg38
```

```Tracks``` or ```Studyview``` will contain different keys. This is where you will ```name``` your study or track and point ProteinPaint to where your data lives. See example below:

``` JS
studyview: {
        hide_navigation: 1,
        name: "test",
        mutationset: [{
            snvindel_url: "enter link here",
       }],
        show_heatmap: 1,
	}
})

```
For heatmaps, you may add additional customization by adding JSON.
```JS
        heatmapJSON:{
            "samplegroup": [
              {
              }
```
