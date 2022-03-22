---
title: Mutation Landscape (Heatmap)
---
# Description 
These code block examples can be used to generate a Mutation Landscape (heatmap) as seen in [VisCom](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/genomes-for-kids-a-landscape-of-pediatric-cancer-demonstration-visualization~94).

Use: Used for displaying the frequency of various mutations, CNVs and SVs in cancer relevant genes across a cohort of samples from one or many diagnoses.

For additional learning of each element or key please go to the heatmap [ProteinPaint Google Docs](https://docs.google.com/document/d/1JA9O4dUSwCga4Ua4DK3vbG0x9JGtKuI3j-9gjb6Tz6U/edit).

**Each code block is for each of the accepted data formats using the <url> key: SNV/indel; SV/Fusion; CNV; ITD; Deletion; or Truncation. Scroll down to see the <file> key examples. Formats for the file types are also found at the ProteinPaint mutation landscape track.**

SNV [Format](https://drive.google.com/open?id=1OJ9aXq2_-a3BfIQdKLYCYzrJRTpu4_9i3gephTY-Z38), [example file](https://pecan.stjude.cloud/static/pp-support/example.files/example.snvindel.txt)
SV [Format](https://drive.google.com/open?id=1klDZ0MHVkQTW2-lCu_AvpRE4_FcbhdB-yI17wNdPaOM), [example file](https://pecan.stjude.cloud/static/pp-support/example.files/example.svfusion.txt)
CNV [Format]([Format](https://drive.google.com/open?id=1WHptqOWNf96V0bYEDpj-EsKZGYnbBNc9aQIrhzdEJaU)), [example file](https://pecan.stjude.cloud/static/pp-support/example.files/example.cnv.txt)
ITD [Format](https://drive.google.com/open?id=1Bh9awBsraoHbV8iWXv_3oDeXMsjIAHaOKHr973IJyZc), [example file](https://pecan.stjude.cloud/static/pp-support/example.files/example.itd.txt)
Deletion [Format](https://drive.google.com/open?id=1tWbf3rg3BmVIZPGGPk023P0aBkDw_ry5XuZLGyGodyg), [example file](https://pecan.stjude.cloud/static/pp-support/example.files/example.deletion.txt)
Truncation [Format](https://drive.google.com/open?id=1P1g-Y8r30pSKfan1BhYZcsUtSk7wRb4plaO1S-JCJr4), [example file](https://pecan.stjude.cloud/static/pp-support/example.files/example.truncation.txt)

# URL Parameter EXAMPLE

!!!Tip
If you are using DNAnexus links, be sure to extend the duration. See our [manage data](https://university.stjude.cloud/docs/visualization-community/data-manage/) section. Each data type has its own url key. 
!!!

**Be sure to update lines 1, 4, and 6)**

```JS
//Mutation Landscape (heatmap snv and indel)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "snvindel_url": "https://westus.dl.azure.dnanex.us/F/D/Xj9QvbV461b5K6JpqPXkP2ZqVkgz39q44ZKK3J8J/svIndelTestData.txt",
       }],
        "show_heatmap": 1,
		}
	}
/// Mutation Landscape (heatmap (SV / fusion)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "sv_url": "https://westus.dl.azure.dnanex.us/F/D/KJVP9x86Vgp6pk0GYqkf825pgzGkVKx55Z8qVV7B/svTestData.txt",
       }],
        "show_heatmap": 1,
		}
	}
///Mutation Landscape (CNV / Gene Level)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "cnv_url": "https://westus.dl.azure.dnanex.us/F/D/xZfxXpFQ636b15xBQf0Bb9ZG3Zj30p62fX02xQVz/cnvTestData.txt",
       }],
        "show_heatmap": 1,
		}
	}
///Mutation Landscape (ITD)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "itd_url": "https://westus.dl.azure.dnanex.us/F/D/G1gBQZ32BQqVyQx8KvzYkF5V7Qg5Q0Z2p4qyFZq1/itdTestData.txt",
       }],
        "show_heatmap": 1,
		}
	}
//Mutation Landscape (Deletion)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "deletion_url": "https://westus.dl.azure.dnanex.us/F/D/fpF14BVPGx6Z2vQ2976vff2q01QxgbPq8q0QJG4X/delTestData.txt",
       }],
        "show_heatmap": 1,
		}
	}
///Mutation Landscape (Truncation)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "truncation_url": "https://westus.dl.azure.dnanex.us/F/D/ZFgxG8p34GYzyjXzzKpKyGJX9BykxYzzXQ9jZ2p9/truncTestData.txt",
       }],
        "show_heatmap": 1,
		}
	}
```

 
Additionally, you may add supporting metadata directly. A JSON example can be found within the mutation landscape track in ProteinPaint under the **code** tab (*see image below*). In that example, the JSON file has all the sample group information and all metadata across multiple `mutationsets` together.
![](./code.png)

If you choose to add your own JSON for the sample groups, you will need to add this to your code block:

``` JS
       ///show_heatmap: 1, <- add the comma after 1 if using this extended JSON
       heatmapJSON:{
            "samplegroup": [
              { //Enter JSON here
              },
              ///metabarNames:[] <-- end of your JSON from ProteinPaint's cheat sheet
       }
    }
}
```



To view an example of the JSON file format:
1. Example 1: Go to [https://proteinpaint.stjude.org/](https://proteinpaint.stjude.org/)
    * Select Mutation Landscape 
        * Select Example
	        * Select Code 
                * Review the JSON formatting
2. Example 2: See example 1, but then select the Data tab > Advanced > Schema. This does not show all the JSON configurations of that file used but only the sample data. 
3. Example 3: Go [here](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/genomes-for-kids-the-scope-of-pathogenic-mutations-in-pediatric-cancer-revealed-by-comprehensive-dna-and-rna-sequencing~97) and review the code block below the visualization.
4. Example 4: Go [here](https://viz.stjude.cloud/st-jude-cloud-demo/visualization/genomes-for-kids-a-landscape-of-pediatric-cancer-demonstration-visualization~94) and review the code block below the visualization.

Furthermore, you can convert an excel sheet to JSON.  There are many ways to do this, but we recommend [BeautifyTools](https://beautifytools.com/excel-to-json-converter.php) and to debug use [https://jsonlint.com/](https://jsonlint.com/).

# Further Customization
If you want to add ProteinPaint or GenomePaint viewers to the genes, please see below, but the files used must be specific to render correctly. If you have trouble, please reach out. Additionally, you can order specific groups of meta data by re-organzing the samples in the Sample Group tab. 

```JS
"heatmapJSON":{
            "runPpInputTemplate": {
                "rowLabelClick": {
                "geneKey": "positionbygene",
                "useIsoform": true,
                    "template": {
                        "nobox": 1,
                        "noheader": 1,
                        "block": 1,
                        "genome": "hg19",
                        "positionbygene": "fill-in-name-of-clicked-gene",
                        "nativetracks": "refgene",
                        "tracks": [{
                            "mdsjsonurl": "enter link here"
                        }
                        ]
                    }
                }
            }
}
```

This example is used in our [oncoprint](https://viz.stjude.cloud/st-jude-childrens-research-hospital/visualization/genomes-for-kids-the-scope-of-pathogenic-mutations-in-pediatric-cancer-revealed-by-comprehensive-dna-and-rna-sequencing~97) to specifically render GenomePaint on the genes.
    

# File Path Example
```JS
//Mutation Landscape (heatmap JSON file)
{
"genome": "hg19",
    "study": "proteinpaint_demo/hg19/heatmap/heatmapDemo.json"
}
//Mutation Landscape (heatmap snv and indel)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "snvindel": "proteinpaint_demo/hg19/heatmap/snvindel",
       }],
        "show_heatmap": 1,
		}
	}
/// Mutation Landscape (heatmap (SV / fusion)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "fusion2": "proteinpaint_demo/hg19/heatmap/fusion.dux4.json",
       }],
        "show_heatmap": 1,
		}
	}
///Mutation Landscape (CNV / Gene Level)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "cnv": "proteinpaint_demo/hg19/heatmap/cnv",
       }],
        "show_heatmap": 1,
		}
	}
///Mutation Landscape (ITD)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "itd_url": "path/to/file/itd",
       }],
        "show_heatmap": 1,
		}
	}
//Mutation Landscape (Deletion)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "deletion": "proteinpaint_demo/hg19/heatmap/erg.deletion",
       }],
        "show_heatmap": 1,
		}
	}
///Mutation Landscape (Truncation)
{
"genome": "hg38",
    "studyview": {
        "hide_navigation": 1,
        "name": "TEST",
        "mutationset": [{
            "ctermloss": "proteinpaint_demo/hg19/heatmap/erg.closs",
       }],
        "show_heatmap": 1,
		}
	}
```

Check out our Genome for Kids (G4K) demo highlighting how to make an oncoprint in our [videos](https://university.stjude.cloud/docs/visualization-community/videos/) section. 