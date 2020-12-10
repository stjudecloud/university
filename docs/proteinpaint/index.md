---
title: ProteinPaint
---


[ProteinPaint][viz-community-proteinpaint] is the flagship protein-based visualization tool created at St. Jude Children's Research Hospital. You can use it to examine the domains of genes, known isoforms of a given gene, hotspot mutations for single nucleotide variations (SNVs), insertions and deletions (Indels), and structural variations (SVs) in both pediatric and adult cancers, and RNA-seq expression of a given protein in different tumour types. 

There are two primary ways you can use ProteinPaint. You can use ProteinPaint to explore mutations our curated pediatric and adult cohorts using [PeCan][pecan] (ex: [TP53][pecan-tp53]). If you'd like to create and publish to the community your own visualizations with ProteinPaint, you can do so with the [Visualization Community][viz-community] (**still in development, available soon!**).

<p align="center">
    <a style="font-weight: bold" href="https://proteinpaint.stjude.org/?block=1&genome=hg19">Human, hg19</a> — 
    <a style="font-weight: bold" href="https://proteinpaint.stjude.org/?block=1&genome=hg38">Human, hg38</a> — 
    <a style="font-weight: bold" href="https://proteinpaint.stjude.org/?block=1&genome=mm9">Mouse, mm9</a> — 
    <a style="font-weight: bold" href="https://proteinpaint.stjude.org/?block=1&genome=mm10">Mouse, mm10</a> 
</p>
<p align="center">
    <a style="font-weight: bold" href="https://proteinpaint.stjude.org/?block=1&genome=dm3">Fruit fly, dm3</a> — 
    <a style="font-weight: bold" href="https://proteinpaint.stjude.org/?block=1&genome=dm6">Fruit fly, dm6</a> —
    <a style="font-weight: bold" href="https://proteinpaint.stjude.org/?block=1&genome=danRer10">Zebra fish, danRer10</a>
</p>

## Features

* Explore SNV and Indel mutations from the Pediatric, COSMIC, and ClinVar datasets ([learn more][loading-datasets]).
* Load custom protein domains and annotations ([learn more][custom-protein-domains]).
* Inspect details for a given mutation ([learn more][inspect-mutation])
* Filtering of mutations based on class and origin ([learn more][filtering-mutations]).
* Stratifying mutations based on cancer subtype ([learn more][stratify-mutation-by-cancer-subtype]).
* Visualize your own SNV and Indel mutations ([learn more][visualize-custom-mutations]).
* Saving figures and exporting data ([learn more][export-figures-and-data]).
* Explore gene fusions ([learn more][explore-gene-fusions]).
* Explore gene expression data including "rope graph", boxplots, and sunburst charts ([learn more][explore-gene-expression]).
* Embed ProteinPaint on your website ([learn more][embed-proteinpaint]).
* Make a study view ([learn more][organizing-data-into-a-study-view]).
* Loading tab-delimited text files of mutations ([learn more][loading-snv-indel-mutations-from-a-file]).

## Supported Data Formats

- SNV and Indel (supports both MAF and customized format) ([learn more](./file-formats/snv-and-indel.md)).
  - Example: [Loading TCGA MAF file](./advanced-guides/loading-tcga-maf-file.md)
- SV and fusion transcript transcript ([learn more](./file-formats/sv-and-fusion.md))
- CNV ([learn more](./file-formats/cnv.md))
- Internal tandem duplications (ITD) ([learn more](./file-formats/itd.md))
- Intragenic deletion ([learn more](./file-formats/intragenic-deletion.md))
- Trunction: N-loss or C-loss ([learn more](./file-formats/truncation.md))
- JSON-BED ([learn more](./file-formats/json-bed.md))
- Splice Junction ([learn more](./file-formats/splice-junction.md))
- Profile-Gene-Value ([learn more](./file-formats/pgv.md))
- Bampile ([learn more](./file-formats/bampile.md))


[pecan]: https://pecan.stjude.cloud
[viz-community]: https://viz.stjude.cloud
[pecan-tp53]: https://pecan.stjude.org/proteinpaint/TP53
[viz-community-proteinpaint]: https://viz.stjude.cloud/tools/proteinpaint

[custom-protein-domains]: ./custom-protein-domains.md
[loading-datasets]: ./loading-datasets.md
[inspect-mutation]: ./view-mutation-details.md
[filtering-mutations]: ./filtering-mutations.md
[stratify-mutation-by-cancer-subtype]: ./stratify-mutation-by-cancer-subtype.md
[visualize-custom-mutations]: ./visualize-custom-mutations.md
[export-figures-and-data]: ./exporting-figures-and-data.md
[explore-gene-fusions]: ./exploring-gene-fusions.md
[explore-gene-expression]: ./exploring-gene-expression.md
[embed-proteinpaint]: ./developers-guide/embedding-proteinpaint.md
[organizing-data-into-a-study-view]: ./developers-guide/organizing-data-into-a-study-view.md
[loading-snv-indel-mutations-from-a-file]: ./advanced-guides/loading-snv-indel-data-from-a-file.md