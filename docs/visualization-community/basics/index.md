---
title: Learning the Code Block Basics
---

To add code to the VisCom's editor, a 
```JS
runproteinpaint()
``` 
call must be used, which is written in JavaScript. To find more details about this software please see the [ProteinPaint Google Docs](https://docs.google.com/document/d/1JWKq3ScW62GISFGuJvAajXchcRenZ3HAvpaxILeGaw0/) for further detail. 

!!!tip
* ProteinPaint is case sensitive, but the URL key is case in-sensitive.
* Lollipop does not have a `file` or `url` parameter.
* DataFacet Tables and 2DMAF are not supported in VisCom.
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
    genome: hg38,
```

`Holder` will be different in the ProteinPaint code examples so please be sure to use this one in VisCom. `Genome` will be dependent on the species that you are investigating. Further explanation of all attributes in ProteinPaint can be found [here](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.6spyog171fm9) (page 3).

``` JS
studyview: {
        hide_navigation: 1,
        name: "test",
        mutationset: [{
            snvindel_url: "enter link here",
       }],
        show_heatmap: 1,
	}
}
```

