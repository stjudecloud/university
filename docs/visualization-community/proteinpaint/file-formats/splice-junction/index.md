---
title: Splice Junction
---


**Splice junction with read count**

The track can be used to represent RNA splice junction data from RNA-seq
assays. Each file can contain information for 1 or more samples.

## File format of single sample data

The file has 6 required columns:

1. Chromosome name, e.g. "chr1"

2. Start, **0-based** position of the last nucleotide of the upstream exon

3. Stop, **0-based** position of the first nucleotide of the downstream exon

4. Strand, +/-

5. Type of junction, if not available, use empty string

    a.  It can be arbitrary text value, e.g. "known" or "novel". Any used types should be stated in the **.categories{}** attribute of the track so they can be distinguished by color.

6. Read count, integer value

## Steps to convert the tabular text file to a junction track

```bash
sort -k1,1 -k2,2n textfile > textfile.sorted
bgzip textfile.sorted
tabix -p bed textfile.sorted.gz
```

This generates two files:

```bash
textfile.sorted.gz
textfile.sorted.gz.tbi
```

Put both files in the same directory on the server, and use the file
path (or URL) to the .gz file for submitting.

[Refer to this document for declaring the junction track in JSON format](https://docs.google.com/document/d/1ZnPZKSSajWyNISSLELMozKxrZHQbdxQkkkQFnxw6zTs/edit?usp=sharing).

### File format for multiple samples

The first five columns are the same as single sample file. The 6th
column is the read count for the first sample, the 7th column is the
second sample, so that arbitrary number of samples can be represented in
this way.

Optionally, provide a header line to denote sample names, e.g.:

```
#chr  start  stop  strand  type  sample1   sample2   ...
```

Header line must begin with "#". Bgzip this file in the same way. To
index this file, run tabix with additional parameter:

```bash
tabix -p bed -c "#" multisample.gz
```

Sample names like "sample1" and "sample2" in the header of above example
can be replaced by JSON object strings, as a way of encoding additional
information on samples in the track file.

```
{"patient":"SJACT001","sample":"SJACT001_D","sampletype":"DIAGNOSIS","diagnosis_group_short":"ST","diagnosis_group_full":"Solid Tumor","diagnosis_short":"ACT","diagnosis_full":"Adrenocortical Carcinoma","diagnosis_subtype_short":"TP53-mut","diagnosis_subtype_full":"TP53-mut"}

{"patient":"SJACT002","sample":"SJACT002_D","sampletype":"DIAGNOSIS","diagnosis_group_short":"ST","diagnosis_group_full":"Solid Tumor","diagnosis_short":"ACT","diagnosis_full":"Adrenocortical Carcinoma","diagnosis_subtype_short":"TP53-mut","diagnosis_subtype_full":"TP53-mut"}
```

This can allow plotting samples by different colors. To do so, add
"cohortsetting" attribute to track object when using the embedding API:

```javascript
runproteinpaint({

     ... other parameters ... 

     tracks:[
         {
            type:'junction',
            name:'track name',
            file:'path/to/file.gz',
            cohortsetting:{
                 uselevelidx:0,
                 cohort:{
                      levels:[
                           {
                               k:'diagnosis_group_short',
                               label:'cancer'
                           }
                      ]
                 }
            }
         }
    ],

})
```
