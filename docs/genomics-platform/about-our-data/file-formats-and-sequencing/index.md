---
title: File Formats and Sequencing Information
---


# File Formats

St. Jude Cloud hosts both raw genomic data files and processed results files:

| File Type      | Short Description                                                                                                  | Details                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| BAM            | HG38 aligned BAM files produced by [Microsoft Genomics Service][msgen] (DNA-Seq) or STAR 2-pass mapping (RNA-Seq). | [Click here](#bam-files)            |
| gVCF           | [Genomic VCF][gvcf-spec] files produced by [Microsoft Genomics Service][msgen].                                    | [Click here](#gvcf-files)           |
| Somatic VCF    | Curated list of somatic variants produced by the St. Jude somatic variant analysis pipeline.                       | [Click here](#somatic-vcf-files)    |
| CNV            | List of somatic copy number alterations produced by St. Jude CONSERTING pipeline.                                  | [Click here](#cnv-files)            |
| Feature Counts | Curated list of read counts mapped to each gene produced by [HTSeq](https://htseq.readthedocs.io/en/master/)       | [Click here](#feature-counts-files) |


## BAM files

In St. Jude Cloud, we store aligned sequence reads in BAM file format for whole genome sequencing, whole exome sequencing, and RNA-Seq. For more information on SAM/BAM files, please refer to the [SAM/BAM specification][bam-spec]. For research samples, we require the standard 30X coverage for whole genome and 100X for whole exome sequencing. For clinical samples, we require higher coverage, 45X, for whole genome sequencing due to tumor purity issues found in clinical tumor specimens. For RNA-Seq, since only a subset of genes are expressed in a specific tissue, we require 30% of the exons to have 20X coverage in order to ensure that at least 30% of the expressed genes have sufficient coverage.

## gVCF files

We provide gVCF files produced by the [Microsoft Genomics Service][msgen]. gVCF files are derived from the BAM files produced above as called by [GATK's haplotype caller][gatk-haplotype-caller]. Today, we defer to [the official specification document][gvcf-spec] from the Broad Institute, as well as [this discussion][gvcf-diff-from-vcf] on the difference between VCF and gVCF files. For more information about how Microsoft Genomics produces gVCF files or any other questions regarding data generation, please refer to [the official Microsoft Genomics whitepaper][msgen-whitepaper].

## Somatic VCF files

Somatic VCF files contain HG38 based SNV/Indel variant calls from the St. Jude somatic variant analysis pipeline as follows. Broadly speaking:

1. Reads were aligned to HG19 using [bwa backtrack][bwa] (`bwa aln` + `bwa sampe`) using default parameters.
2. Post processing of aligned reads was performed using [Picard][picard] `CleanSam` and `MarkDuplicates`.
3. Variants were called using the [Bambino][bambino-paper] variant caller (you can download Bambino [here][bambino-download] or by navigating to the [Zhang Lab page][bambino-program] where the  "Bambino package" is listed as a dependency under the CONSERTING section).
4. Variants were post-processed using an in-house post-processing pipeline that cleans and annotates variants. This pipeline is not currently publicly available.
5. Variants were manually reviewed by analysts and published with [the relevant Pediatric Cancer Genome Project (PCGP) paper][pcgp-landing-page].
6. Post-publication, variants were lifted over to HG38 (the original HG19 coordinates are stored in the `HG19` INFO field.).

!!!note
**Our Somatic VCF files were designed specifically for St. Jude Cloud visualization purposes. Variants in these files were manually curated from analyses across multiple sequencing types including WGS and WES.**  
For more information on variants for each of the individuals, please refer to the relevant PCGP paper. For more information on the variant calling format (VCF), please see the latest specification for VCF document listed [here][hts-specs].
!!!


## CNV files

CNV files contain copy number alteration (CNA) analysis results for paired tumor-normal WGS samples. Files are produced by running paired tumor-normal BAM files through the [CONSERTING][conserting] pipeline which identifies CNA through iterative analysis of (i) local segmentation by read depth within boundaries identified by structural variation (SV) breakpoints followed by (ii) segment merging and local SV analysis. [CREST][crest] was used to identify local SV breakpoints. CNV files contain the following information:

| Field         | Description                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| chrom         | chromosome                                                                                                                                                   |
| loc.start     | start of segment                                                                                                                                             |
| loc.end       | end of segment                                                                                                                                               |
| num.mark      | number of windows retained in the segment (gaps and windows with low mappability are excluded)                                                               |
| length.ratio  | The ratio between the length of the used windows to the genomic length                                                                                       |
| seg.mean      | The estimated GC corrected difference signal (2 copy gain will have a seg.mean of 1)                                                                         |
| GMean         | The mean coverage in the germline sample (a value of 1 represents diploid)                                                                                   |
| DMean         | The mean coverage in the tumor sample                                                                                                                        |
| LogRatio      | Log2 ratio between tumor and normal coverage                                                                                                                 |
| Quality score | A empirical score used in merging                                                                                                                            |
| SV_Matching   | Whether the boundary of the segments were supported by SVs (3: both ends supported, 2: right end supported, 1: left end supported, 0: neither end supported) |


[crest]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3527068/
[conserting]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4591043/
[bwa]: http://bio-bwa.sourceforge.net/
[picard]: https://broadinstitute.github.io/picard/
[bambino-paper]: https://academic.oup.com/bioinformatics/article/27/6/865/236751
[bambino-program]: https://www.stjuderesearch.org/site/lab/zhang
[bambino-download]: http://ftp.stjude.org/pub/software/conserting/bambino-1.0.jar
[pcgp-landing-page]: https://www.stjude.org/research/pediatric-cancer-genome-project.html
[hts-specs]: https://samtools.github.io/hts-specs/
[msgen]: https://azure.microsoft.com/en-us/services/genomics/
[msgen-whitepaper]: https://azure.microsoft.com/en-us/resources/accelerate-precision-medicine-with-microsoft-genomics/
[gatk-haplotype-caller]: https://software.broadinstitute.org/gatk/documentation/tooldocs/3.8-0/org_broadinstitute_gatk_tools_walkers_haplotypecaller_HaplotypeCaller.php
[gvcf-spec]:https://software.broadinstitute.org/gatk/documentation/article?id=11004
[gvcf-diff-from-vcf]: https://software.broadinstitute.org/gatk/documentation/article?id=4017
[bam-spec]: https://samtools.github.io/hts-specs/SAMv1.pdf
[star-manual]: https://github.com/alexdobin/STAR/blob/a22ad18600c827841e3fcd74118e9baac75669f4/doc/STARmanual.pdf
[ercc]: https://www.thermofisher.com/order/catalog/product/4456740

## Feature Counts files

Feature counts are text files that contain counts of reads aligned to genomic features. St. Jude Cloud feature files are generated using HTSeq. The detailed command is documented in our [RNA-Seq V2 RFC][rnaseq-rfc]. The files contain a count of the number of reads overlapping each genomic feature, in this case, genes as specified in [GENCODE V31][gencode]. St. Jude Cloud uses the gene name as feature key. The files are tab-delimited text and contain the feature key and read count for that feature. 

[rnaseq-rfc]: https://stjudecloud.github.io/rfcs/0001-rnaseq-workflow-v2.0.0.html#specification
[gencode]: https://www.gencodegenes.org/human/release_31.html

# Sequencing Information 

## Whole Genome and Whole Exome
Whole Genome Sequence (WGS) and Whole Exome Sequence (WES) BAM files were produced by the [Microsoft Genomics Service][msgen] aligned to HG38 (GRCh38 no alt analysis set). For more information about how Microsoft Genomics produces BAM files or any other questions regarding data generation, please refer to [the official Microsoft Genomics whitepaper][msgen-whitepaper].

## RNA-Seq

RNA-Seq BAM files are mapped to HG38. For alignment, `STAR` v2.7.1a 2-pass mapping is used. Below is the `STAR` command used during alignment. For more information about any of the parameters used, please refer to the [STAR manual][star-manual] for v2.7.1a. The complete RNA-Seq WDL pipeline is available on [GitHub](https://github.com/stjudecloud/workflows/blob/master/workflows/rnaseq/rnaseq-standard.wdl). The STAR alignment parameters are also available on [GitHub](https://github.com/stjudecloud/workflows/blob/master/tools/star.wdl). 

```bash
    STAR \
             --readFilesIn $(cat read_one_fastqs_sorted.txt) $(cat read_two_fastqs_sorted.txt) \
             --genomeDir ~{stardb_dir} \
             --runThreadN $n_cores \
             --outSAMunmapped Within \
             --outSAMstrandField intronMotif \
             --outSAMtype BAM Unsorted \
             --outSAMattributes NH HI AS nM NM MD XS \
             --outFilterMultimapScoreRange 1 \
             --outFilterMultimapNmax 20 \
             --outFilterMismatchNmax 10 \
             --alignIntronMax 500000 \
             --alignMatesGapMax 1000000 \
             --sjdbScore 2 \
             --alignSJDBoverhangMin 1 \
             --outFilterMatchNminOverLread 0.66 \
             --outFilterScoreMinOverLread 0.66 \
             --outFileNamePrefix ~{output_prefix + "."} \
             --twopassMode Basic \
             --limitBAMsortRAM ~{(memory_gb - 2) + "000000000"} \
             --outSAMattrRGline $(cat read_groups_sorted.txt)
```

