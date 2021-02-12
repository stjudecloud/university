---
title: MethylationToActivity (M2A)
---

|                       |                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Authors**           | Justin Williams, Beisi Xu, Daniel Putnam, Andrew Thrasher, Xiang Chen                                                                                                                                              |
| **Publication**       | [MethylationToActivity: a deep-learning framework that reveals promoter activity landscapes from DNA methylomes in individual tumors](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-02220-y) |
| **Technical Support** | [Contact Us](https://stjude.cloud/contact)                                                                                                                                                                         |

## Overview

MethylationToActivity (M2A) is a machine learning framework using convolutional neural networks (CNN) to infer histone modification (HM) enrichment from whole genome bisulfite sequencing (WGBS). To date, both H3K27ac and H3K4me3 enrichment prediction from WGBS is supported, from a tab-delimited text file format of M-values. Optionally, we also support transfer-learning where a user may have matching H3K27ac or H3K4me3 data with appropriate controls in addition to WGBS data.

## Inputs 

| Name                                                               | Type       | Description                                                                                                                                   | Example                                        |
| ------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Sample HM bigwig file (only if using M2A with Transfer)            | Input file | HM ChIP-seq experiment bigwig track.                                                                                                          | SampleName_H3K27ac.bw OR SampleName_H3K4me3.bw |
| Sample HM control (Input) bigwig (only if using M2A with Transfer) | Input file | ChIP-seq Experiment control (Input) bigwig track.                                                                                             | SampleName_Input.bw                            |
| WGBS data file                                                     | Input file | M-values by chromosome and position (non-standard format, see below).                                                                         | *.txt (tab-delimited)                          |
| Promoter region definition file (*provided, or user defined*)      | Input file | File describing promoter regions to be predicted. Provided regions include both hg19 and GRCh38 definitions (non-standard format, see below). | *.txt (tab-delimited)                          |

!!!Note App-provided model inputs:
Model weights (.h5) file: 1) H3K27ac or 2) H3K4me3 
!!!

### Input file configuration

#### Promoter region definition file (if user defined):

| Column     | Description                                   |
| ---------- | --------------------------------------------- |
| EnsmblID_T | Ensemble transcript ID (unique)               |
| EnsmblID_G | Ensemble gene ID (not unique)                 |
| Gene       | human readable gene name (abbrev, not unique) |
| Strand     | +, -                                          |
| Chr        | chr1, chr2, ... chr22, etc.                   |
| Start      | Beginning of transcript definition            |
| End        | End of transcript definition                  |
| RStart     | TSS - 1000bp                                  |
| REnd       | TSS + 1000bp                                  |

#### WGBS data file:

| Column | Description                                                           |
| ------ | --------------------------------------------------------------------- |
| chrom  | chromosome ID, e.g. 1,2,3 ...22                                       |
| pos    | position of 5' cytosine of a CpG on the positive strand               |
| mval   | calculated mvalue of a given CpG, typically M-value=log2(Beta/1-Beta) |

## Outputs

| Name             | Description                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Predictions file | The promoter region definition file with an additional Predicted_log2_ChipDivInput_"YOUR HM MARK HERE" column (tab-delimited). |
| Transfer model   | The updated weights to the HM model (a .hdf5 file; *only* if using M2A with Transfer)                                          |

## Preparing to run M2A

Before you can run one of our workflows, you must first create a workspace in DNAnexus for the run. Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#getting-started) to learn how to create a DNAnexus workspace for each workflow run.

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#uploading-files) to learn how to upload input files to the workspace you just created.

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#running-the-workflow) to learn how to launch the workflow, hook up input files, adjust parameters, start a run, and monitor run progress.

## Analysis of Results

Today, the M2A pipeline does not produce an interactive visualization. If M2A with Transfer was run, the easiest measurment of training prediction accuracy would be caluclating the Pearson's R<sup>2</sup>, or root mean square error (RMSE) between the measured and M2A predicted values. Furthermore, comparisons of sample-sample consistency with the same/similar cancer-type (as determiend by Pearson's R<sup>2</sup>) is a good start for a contextual understanding of the predictions produced by M2A.

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#raw-results-files) to learn how to access raw results files.

## Interpreting results

For the M2A pipeline, every pipeline run outputs a predictions text file (tab-delimited) for each sample. These values represent the predicted selected HM (either H3K27ac or H3K4me3) promoter region enrichment. 

## Frequently asked questions

None yet!

If you have any questions not covered here, feel free to reach
out on [our contact form](https://hospital.stjude.org/apps/forms/fb/st-jude-cloud-contact/).

## Similar Topics

[Running our Workflows](../../analyzing-data/running-sj-workflows)  
[Working with our Data Overview](../../managing-data/working-with-our-data)   
[Upload/Download Data (local)](../../managing-data/upload-local)  
