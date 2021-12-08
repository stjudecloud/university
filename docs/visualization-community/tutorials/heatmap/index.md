---
title: Heatmap code block examples
---
# Description 
These code block examples can be used to generate a heatmap as seen in [VisCom](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/genomes-for-kids-a-landscape-of-pediatric-cancer-demonstration-visualization~94).

For additional learning of each element or key please go to the [heatmap ProteinPaint Google Docs](https://docs.google.com/document/d/1JA9O4dUSwCga4Ua4DK3vbG0x9JGtKuI3j-9gjb6Tz6U/edit)

Check out our [video tutorials](https://university.stjude.cloud/)/docs/visualization-community/tutorials/tutorial_videos/) for more details on how to create your own.

# URL Parameter EXAMPLE
**Be sure to update line 6, 9, and 11.**
``` JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    nobox: 1,
    noheader: true,
    genome: "hg38",
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


# Path to File EXAMPLE
**Be sure to update line 6, 9, and 11.**
```JS
runproteinpaint({
    host: "https://proteinpaint.stjude.org",
    holder: visualizationContainer[0],
    nobox: 1,
    noheader: true,
    genome: "hg38",
    studyview: {
        hide_navigation: 1,
        name: "test",
        mutationset: [{
            snvindel: "name/path_to_file.txt",
       }],
        show_heatmap: 1,
	}
})
```


## Further customization
ProteinPaint allows you to also upload a file and will validate the formats. Once it renders the visualization, you may update your JSON to further customize by going to Data.

```JS
        heatmapJSON:{
            "samplegroup": [
              {
              }
```