---
title: Fusion
---

Please upload CICERO output as a text file. 
https://docs.google.com/document/d/1jkVYRPIJpkWvA9vqtahRlNn63Hk5DehjHbF_BH9k7Rs/

https://pecan.stjude.cloud/static/hg19/fusioneditor/cicero.output

const host = 'https://proteinpaint.stjude.org'
const rawtext = 'copy output file here'

```JS
runproteinpaint({
    host: host,
    holder: visualizationContainer[0],
    genome: 'hg19',
    noheader: 1,
    fusioneditor: {
        input: rawtext,
        dataname: 'name of cicero output'
    }
})
```