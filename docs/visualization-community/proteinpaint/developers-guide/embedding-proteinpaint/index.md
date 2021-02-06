---
title: Embedding ProteinPaint
---


## Quickstart

Gallery: [https://proteinpaint.stjude.org/examples/](https://proteinpaint.stjude.org/examples/)

Create an HTML file and display it in the web browser to see embedding
in action:

```html
<html>
<body>
    <script src="https://proteinpaint.stjude.org/bin/proteinpaint.js" charset="utf-8"></script>
    <div id=a style="margin:10px"></div>
    <script>
        runproteinpaint({
            host:'https://proteinpaint.stjude.org',
            holder:document.getElementById('a'),
            parseurl:true,
            block:true,
            nobox:1,
            noheader:1,
            genome:'hg19',
            position:'chr12:25334648-25426944',
            nativetracks:'RefGene',
            tracks:[{
                type:"bigwig",
                url:"http://hgdownload.soe.ucsc.edu/goldenPath/hg19/phyloP100way/hg19.100way.phyloP100way.bw",
                "name":"UCSC phyloP 100ways",
                "height":100
            }]
        })
</script>

</body>
</html>
```

View this example live at
[https://proteinpaint.stjude.org/examples/bigwig.html](https://proteinpaint.stjude.org/examples/bigwig.html).

This is all driven by a JavaScript function `runproteinpaint()`.

This function accepts an object as input, which contain key-value pairs to do many things such as launching components and customizing looks.

Parameter names are case-sensitive.

If you want to use the "heatmap", you need to also include the "sjcharts":

```html
<html>
<body>
<script src="https://pecan.stjude.cloud/sjcharts/bin/sjcharts.js" charset="utf-8"></script>
<script src="https://proteinpaint.stjude.org/bin/proteinpaint.js" charset="utf-8"></script>
... rest omitted ...
```

## Required Parameters

### `holder:<dom>`

A DOM object.

-   Via jQuery, use as:

    -   holder:yourvariable\[0\],

-   Via D3.js, use as:

    -   holder:yourvariable.node(),

### `parseurl:true`

Value is boolean, if true, will attempt to parse parameter from URL from
the parent web page.

### `noheader:true`

Value is boolean, if true, will hide the default page header.

### `genome:'hg19'`

Name of the reference genome

## Genome Browser View

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script src="https://proteinpaint.stjude.org/bin/proteinpaint.js" charset="utf-8"></script>
<div id=a style="margin:20px"></div>
<script>
runproteinpaint({
    host:'https://proteinpaint.stjude.org',
    holder:document.getElementById('a'),
    parseurl:true,
    block:true,
    nobox:1,
    noheader:1,
    genome:'hg19',
    position:'chr12:25334648-25426944',
    nativetracks:'RefGene',
    tracks:[{
        "type":"bigwig",
        "file":"hg19/hg19.100way.phastCons.bw",
        "name":"UCSC phastCons 100ways",
        "height":100
    }]
})
</script>
</body>
</html>
```

View this example live at
[https://proteinpaint.stjude.org/examples/bigwig.html](https://proteinpaint.stjude.org/examples/bigwig.html).

### `block:true`

Value is "true". By setting this attribute it will require **genome** to
be set.

### `nativetracks:'RefGene'`

Show one or more native tracks. The tracks must be available from this
genome on this ProteinPaint server. Value can be following:

-   Track names joined by comma, e.g. "refgene", or "refgene,repeatmasker"

-   Array of track names, \["refgene", "repeatmasker"\]

-   Array of track objects, with custom settings, each track must have the "name" attribute

    -   \[ {"name":"refgene", "stackheight":15} \]

-   All track names are case-insensitive, e.g. "refgene" and "RefGene" refers to the same track

### `tracks:[]`

Provide one or more custom tracks.

Tracks must be declared as JSON objects, [as defined in this tutorial](https://drive.google.com/open?id=1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs).

### Defining view range

#### `position:'chr1:22222-33333'`

Specify the genomic region to display by default. If not provided, will
show the default region of this genome (pre-configured in ProteinPaint).

Note that the genome browser will force a minimum 400 bp range centered
on the input position. If this is undesired (e.g. to zoom in to finest
level), use "chr/start" keys as below.

#### `positionbygene:'crebbp'`

A gene name or RefSeq accession may be given instead of "position"
(genomic coordinate). Gene name is case insensitive.

#### `chr:'chr?',start:12345,`

Provide both "chr" and "start" keys to zoom into a nucleotide, at the
finest possible resolution. Optionally, define "stop".

### URL parameters

Example:

```
http://host/yourpage.html?position=chr1:111-222&hlregion=..
```

In which "yourpage.html" the HTML file calls the embedding API from this
section to launch a genome browser (block).

The URL parameters will customize the ways the block is shown, without
having to update anything inside the HTML file. The URL parameters are
listed below.

#### `position=chr:start-stop`

Will change the default position.

#### `hlregion=region1,region2,...`

To highlight the given regions. [Requirements defined here](https://docs.google.com/document/d/1e0JVdcf1yQDZst3j77Xeoj_hDN72B6XZ1bo_cAd2rss/edit#heading=h.51kfvkz9mjua).

### Genome browser API

By executing `runproteinpaint()` in your embedding code, it will return
a promise and resolve to an object with the attribute "block". The block
attribute is the genome browser object which provides the following
methods so you can manipulate the genome browser through your code.

#### Changing view range

```javascript
runproteinpaint({ block:true, ...  })
.then(_=>{
  _.block.jump_1basedcoordinate('chr1:222-333')
  // above will enforce a minimum 400bp range
  // alternatively, use {chr,start} to zoom in to finest level
  _.block.jump_1basedcoordinate({chr:'chr1',start:222})
})
```

#### Highlight a region

```javascript
runproteinpaint({ block:true, ...  })
.then(_=>{
  _.block.highlight_1basedcoordinate('chr1:222-333')
})
```

#### Only show specific tracks for a track type

All the other tracks of the same type will be turned hidden.

```javascript
runproteinpaint({ block:true, ...  })
.then(_=>{
  _.block.showTrackByFile([
     {type:'bam',file:'path/to/file1.bam'},
     {... another file}
  ]}
})
```

#### Show given tracks

```javascript
runproteinpaint({ block:true, ...  })
.then(_=>{
  _.block.turnOnTrack([
     {type:'bam',file:'path/to/file1.bam'},
     {... another file}
  ]}
})
```

#### Hide given tracks

```javascript
runproteinpaint({ block:true, ...  })
.then(_=>{
  _.block.turnOffTrack([
     {type:'bam',file:'path/to/file1.bam'},
     {... another file}
  ]}
})
```

## GenomePaint

### `datasetqueries:[ {dataset, querykey, ... } ]`

"block:true" is required for this parameter to work.

This launches one or multiple official GenomePaint tracks, available for
this genome.

[See this tutorial for launching custom
track](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.k8aosi1ye7no).

The track is a combination of mutation, CNV, LOH, SV/fusion, FPKM etc.
Works with gene view and genome browser view.

Each JSON object defines a track backed by a GenomePaint dataset, along
with customization options.

**dataset**: STR

**querykey**: STR

-   Points to the official dataset available from this genome.

#### Customization parameters

Following parameters will change the default behavior of the track.

**singlesample**: {}

```javascript
singlesample:{
   name: STR,
   waterfall:{
      inuse: true
   }
}
```

-   Optional. If provided, will launch the single sample view instead of the multi-sample view.

-   "name" is the sample name, required.

-   "waterfall" is optional. If provided, will apply the settings to the waterfall plot.

Following attributes also works for defining [custom track](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit#heading=h.k8aosi1ye7no):

**isfull**: BOOL

**isdense**: BOOL

-   Defines if to show in "dense" or "expanded" mode, works for multi-sample.

-   This overrides the default setting on the dataset.

**sampleAttribute**:{}

```javascript
sampleAttribute:{
   "cancer_type": {
       hiddenvalues: [ "NBL", "RB" ]
   }
}
```

-   Optional. If provided, will filter out samples if they match with given sample attribute key and values.

**vcf**:{}

-   hiddenclass: \[ 'M', 'N', ... \]

    -   See hlaachange for list of SNV/indel classes

**.hide_cnvgain:true**

**.hide_cnvloss:true**

-   Setting to true to hide either gain or loss

**cnv**:{}

-   hidden:1

-   upperlengthlimit: 0

-   **loh**:{}

    -   hidden:1

    -   upperlengthlimit: 0

        -   Set to 0 to show all LOH segments

-   **sv**:{}

    -   hidden:1

-   **fusion**:{}

    -   hidden:1

-   **itd**:{}

    -   hidden:1

**sampleset**:\[\]

```javascript
sampleset:[
   { name:'Group1', samples:['sample1','sample2', ... ] },
   { name:'Group2', samples:['sampleA','sampleB', ... ] }
}
```

-   Optional. Provides one or more groups of samples to limit the view only to these samples.

### `mdssamplescatterplot:{ dataset:'xxx' }`

Launches the sample scatterplot view from a GenomePaint dataset. Only
available for official datasets. [See example](https://proteinpaint.stjude.org/examples/svcnv.scatter.html).

### `mdssurvivalplot:{}`

Launches a set of Kaplan-Meier plots from a GenomePaint dataset, with
customizations for each plot.

Only available for official datasets. [View instructions](https://docs.google.com/document/d/19k9_Z-DxN8WRD4yJEw7f9yCEzSGZj98n97-bV3MRlmE/edit?usp=sharing).

### `display_termdb:{}`

Launch termdb. [Refer to termdb document](https://docs.google.com/document/d/1uESIx4U6Dg02k8mDcT6PBhcq_3OuabctF-01PEsgjS4/edit#).

### `samplematrix:{}`

Using an official dataset
([example](https://proteinpaint.stjude.org/F/hg19/pediatric.mds.example/matrix.nbl.KM.html)):

```javascript
samplematrix:{
  genome:'hg19',
  dslabel:'Pediatric2',
  ismutation_allsymbolic:true,
  limitsamplebyeitherannotation:[ { key:'diagnosis_short', value:'NBL' } ],
  features:[
    {
       label:'MYCN',
       ismutation:1,
       querykeylst:['svcnv','snvindel'],
       width:50,
       position:'chr2:16079110-16087476',
       snvindel:{
         excludeclasses:{snv:1,Intron:1,E:1,mnv:1,Utr3:1,Utr5:1}
       }
    },
    { ... another feature ... }
  ]
}
```

Using a custom dataset (to add example):

```javascript
samplematrix:{
  genome:'hg38',
  iscustom:true,
  querykey2tracks:{
    svcnv:{
      type:'mdssvcnv',
     url:'https://pecan.stjude.cloud/static/hg38/tcga-gdc/DLBC/TCGA_DLBC.CNV.gz',
    },
    vcf:{
      type:'mdsvcf',
     url:'https://pecan.stjude.cloud/static/hg38/tcga-gdc/DLBC/TCGA_DLBC.vcf.gz'
    }
  },
  features:[
    {
      label:'CDKN2A/B',
      ismutation:1,
      querykeylst:['svcnv','vcf'],
      width:50,
      position:'chr9:21843776-22119276',
      snvindel:{excludeclasses:{Intron:1}}
    },
    { ... another feature ... }
  ]
}
```

## Gene View

### `gene:'ikzf1'`

To launch a gene-view with the given gene. Value can be gene symbol
(TP53) or isoform name (NM_000546), case-insensitive.

### `dataset:'clinvar'`

Show built-in datasets, join multiple by comma, case-insensitive

### `hlaachange:'V617F'`

Highlight given mutations (mostly AA change names but could be label of
any other type), for the first dataset specified by the "dataset"
parameter.

Groups of mutations with any label matching this input will be shown as
expanded, while the rest folded. Mutation label must be exact match,
case-sensitive.

This will only be effective for the first dataset to be rendered.

Provide the variants as string, join multiple mutation names by comma.
Unmatched ones won't be displayed:

```
hlaachange: "V617F,V392M",
```

Alternatively, provide an array of mutations. Each mutation is described
using a few attributes, of which "name" is used for matching. In case no
match can be found, the unmatched ones will be shown as a new track,
thus the purpose of "codon" and "class".

```
hlaachange: [
    { name:'V617F',codon:617,class:'missense'},
    { name:'new datapoint',codon:500,class:'nonsense'}
]
```

Value of "class" can be either class code or label. See below for
supported classes.

| Class code | Class label    |
| ---------- | -------------- |
| M          | MISSENSE       |
| E          | EXON           |
| F          | FRAMESHIFT     |
| N          | NONSENSE       |
| S          | SILENT         |
| D          | PROTEINDEL     |
| I          | PROTEININS     |
| P          | SPLICE_REGION  |
| L          | SPLICE         |
| Intron     | INTRON         |
| Utr3       | UTR_3          |
| Utr5       | UTR_5          |
| X          | NONSTANDARD    |
| noncoding  | NONCODING      |
| snv        | SNV            |
| mnv        | MNV            |
| insertion  | insertion      |
| deletion   | Small deletion |

### `mset:[]`

For adding one or multiple sets of predefined variants.

```javascript
mset: [
    {
       name:'Set 1',
       mlst: [
          { 
             gene:'BRAF',
             isoform:'NM_004333',
             mname:'V617F',
             class:'M',
             chr:'chr7',
             pos:140482900,
             dt:1
           },
           ... more variants
       ]
     },
     ... more sets
]
```

The value for "class" must be one of the class code from previous table.

"dt":1 is a hardcoded attribute.

### `hidedatasetexpression:true`

Value is "true".

Only apply when "dataset" is provided.

If set, will not display the gene expression panel accompanying the
dataset, and will only show mutation data over the gene/protein.

### `hidegenecontrol:true`

Value is "true".

If set, will hide the control buttons atop the coordinate ruler when
showing a gene.

### `hidegenelegend:true`

Value is "true".

If set, will hide all legends when showing a gene (mutation class,
mutation origin, protein domains)

## Prediction of motif change caused by mutation

Given a sequence mutation, PP will run fimo to predict motifs using the
reference sequence at the mutation site with a bit of flanking; then
will mutate the sequence, and run fimo again on the mutated sequence.
Predicted motif change will be rendered.

At the embedding API, add the "fimo" attribute to the argument of
`runproteinpaint()` function.

```javascript
fimo: {
   genome:'hg19',
   m: {
       chr: 'chr1',
       pos:47704967, 
       ref:'A', 
       alt:'AAAC'
   },
   fimo_thresh:1e-3,
   factor_profiles:[ { profile1}, {profile2}, ... ]
}
```

### `.m:{}`

Defines the variant, with 1-based position.

Ref and alt allele sequences could be on the reverse strand. But is not
allowed for one allele to be on forward, and the other allele on
reverse.

PP will carry out motif prediction on both strands.

### `.factor_profiles:[]`

Transcription factor profiles to be shown alongside predicted motifs.

### Profile: isgenevalue

```javascript
       {
           isgenevalue: 1,
           name: 'TALL FPKM',
           mdslabel:'Pediatric2',
           querykey:'genefpkm',
           samplegroup_attrlst:[
              {k:'diagnosis_group_short',kvalue:'HM'},
              {k:'diagnosis_short',kvalue:'TALL'}
           ]
       },
```

### Profile: isgenevalueonesample

```javascript
 {
           isgenevalueonesample: 1,
           name: 'SJALL015645_D1-PASYAJ FPKM',
           mdslabel:'Pediatric2',
           querykey:'genefpkm',
           samplename:'SJALL015645_D1-PASYAJ',
           width:200,
       },
```

## Differential Gene Expression viewer

### `mavolcanoplot:{}`

Will launch the differential gene expression viewer that renders the
data in MA-plot and Volcano-plot.

Keys:

-   **input:"... ..."**
    -   A long string of differential gene expression data.
-   **url:"..."**
    -   The URL of a single text file of the differential gene expression data, based on [format specification](https://docs.google.com/document/d/1gEhywyMzMQRM10NFvsObw1yDSWxVY7pxYjsQ2-nd6x4/edit?usp=sharing).
-   **dataname:"whatever"**
    -   Name of the dataset
-   **tracks:[]**
    -   Optional. Provides a set of tracks to be displayed over the selected gene when clicking a gene in the MA/Volcano plot.
    -   Supported tracks:
        -   bigWig
        -   Stranded bigWig
        -   [Refer to this tutorial for declaring tracks](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit?usp=sharing)
    -   This requires the values in the "gene" column of the differential expression file to be valid gene names, so that the genomic position can be derived based on the gene name for launching the genome browser.

**Note for browsing stranded bigWig tracks on DNANexus:**

The bigWig format file must be named as following to be recognized:

-   *.posStrand.bw
-   *.negStrand.bw

## Fusion Editor

### `fusioneditor:{}`

Will launch the [Fusion Editor](https://drive.google.com/open?id=1DRVzE_WenG490eRYB7VGFOygtSqtF5L97rhK0HOUCNY),
value is an object, keys:

-   input:"... ..."
    -   A long string of fusion gene data (from CICERO output). \n as line break, tab separates columns, first line is header, refer to [Format specification](https://drive.google.com/open?id=1klDZ0MHVkQTW2-lCu_AvpRE4_FcbhdB-yI17wNdPaOM)
-   urls:[ URL1, URL2, ... ]
    -   List of URLs of text files as input, format of each file should match specification: [Format specification](https://drive.google.com/open?id=1klDZ0MHVkQTW2-lCu_AvpRE4_FcbhdB-yI17wNdPaOM)
    -   "urls" will be ignored if "input" is set.
-   dataname
    -   Name of this dataset

Example:
[https://proteinpaint.stjude.org/examples/fusioneditor.html](https://proteinpaint.stjude.org/examples/fusioneditor.html)

## Study View

### `studyview:{}`

(this part is being updated)

Loads a study view by accepting various types of data.

For mutation data including SNV/indel, ITD, sv/fusion, truncation,
intragenic deletion, CNV, data should be submitted as a string variable
that contain the entire content of a text file.

```javascript
studyview: {
    snvindel:"a string, \n as line breaks, first line is header",
    svjson:"sv/fusion/itd/trunctation/deletion data in json format ... ",
    cnv:"cnv data in tabular format, \n as line breaks, first line is header ", 
    name:"name of this dataset",
    genome:"hg19",
}
```

The "studyview" object is very similar to the [JSON definition of study](https://drive.google.com/open?id=121SsSYiCb3NCU8jz0bF7UujFSN-1Y20b674dqa30iXE),
with most attributes applicable here, except these:

-   mutationset : \[\]

-   dbexpression : {}

### `study:"path/to/studyconfigfile"`

Loads a study view from a server-side JSON file.

Value is the JSON file path starting from <TP> path.

[Visit here for JSON file format](https://drive.google.com/open?id=121SsSYiCb3NCU8jz0bF7UujFSN-1Y20b674dqa30iXE).

## Other parameters

### `base_zindex:100`

Set z-index value to floating panels and menus/tooltip.

### `variantPageCall_snv:(arg)=>{...}`

A logo generator: by calling this function with appropriate arguments it
generate a status logo for a given SNV/indel variant (e.g. telling the
pathogenecity of the variant)

Applicable to both SQLite-based dataset tracks and VCF tracks.

Function argument is an object with following keys:

-   chr:""
    -   chromosome name
-   position:INT
    -   1-based position on the chromosome
-   refallele:""
    -   the reference allele
-   altallele:""
    -   the alternative allele
    -   The notation for ref/alt alleles will vary based on source of data in the track, could potentially cause error. Standard notation is required
        [http://varnomen.hgvs.org/](http://varnomen.hgvs.org/)
-   container:<d3 selection>
    -   A D3 element as the container of the logo

### `selectsample_callback:(arg)=>{...}`

Provide a callback to handle selected sample IDs from within a dataset
track. The dataset track must have ".sampleselectable" set to true to be
eligible for sample selection. This is a trick apply this only to
Pediatric but not COSMIC on pecan.stjude.org.

Currently only works for dataset tracks with a preconfigured
SQLite-based track, but not VCF.

Argument is an object, keys:

-   **samplelst**:[]
    -   Array of sample ids
-   **basket**:"basket name"
    -   Allowed values: "gene", "expression"
-   **note**:""
    -   ProteinPaint will try its best to tell the reason of selection
