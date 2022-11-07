---
title: Mutational Signatures
---

**Overview** 
Analysis of samples from St. Jude, specifically from PCGP, Clinical Pilot, and G4K which was demonstrated originally in the [Figure 5 of McLeod et al](https://cancerdiscovery.aacrjournals.org/content/11/5/1082.long). These samples were depicted in a heatmap where COSMIC mutational signatures in pediatric cancer subtypes were analyzed by WGS.  


## HEATMAP VIEW 

Identification of COSMIC SBS (Single Base Substitution) signatures (v3.1) upon consideration of WGS somatic variants was performed using SigProfilerSingleSample (v1.3) across 790 samples (Figure 1). The user can explore a bar plot view by clicking the subtype, cell, or SBS signature. Based on the selection, the bar plot will show the associated samples.  


![](./Heatmap.png)
**Figure 1:** Heatmap View. The heatmap is comprised of sample data and COSMIC SBS mutational signatures that have greater than 0.8 cosine similarity.  



## BAR PLOT VIEW 

The user can view a bar plot consisting of the mutational signatures within a given sample in 3 separate ways: 1) samples by subtype (Figure 2), 2) samples by the mutational signature (Figure 3), or 3) samples for a specific subtype with a specific mutational signature (Figure 4). Each bar plot provides a title, the total number of samples, the method used to identify the mutational signatures, the summary of mutational signatures, the summary of mutational signatures per sample, and the mutational burden per sample. Additionally, clicking any of the mutational signature legend icons will provide summary data and a link to COSMIC website. Moreover, clicking the mutational signature bar plot also provides the summary and link to COSMIC website.  

 


![](./subtype_barplot.png)
**Figure 2:** Subtype Selection from Heatmap View. This view allows a user to analyze mutational signature summaries and burdens per sample cohort of a given subtype. 




![](./SBS_barplot.png)
**Figure 3:** SBS Selection from Heatmap View. This view allows a user to analyze mutational signature summaries and burdens per sample cohort of a given SBS. 




![](./subtype_sbs_barplot.png)
**Figure 4:** Subtype with a specific SBS Selection from Heatmap View. This view allows a user to analyze mutational signature summaries and burdens per sample cohort of a given subtype with a specific mutation signature. 






![](./recently_viewed.png)
**Figure 5:** Recently Viewed. This functionality exists to allow the user to cache the last 5 samples per selection from the user experiences explained in Figures 2-3. This can be helpful when analyzing samples together. Once the 6th sample is selected for that cohort, the first sample selected is removed. The user can also remove samples one by one (see hover x in the image) or a user can remove all samples by selecting the hover X button per header.

 

## TABLE VIEW 



A table view (Figure 6) is also available for each barplot view so that a user can see the same information as the bar plot view but in a tabular manner. Sample ID, subtype, the total number of somatic SNVs, the existing mutational signature per sample, and the cosine similarity are given.

 


![](./table_view.png)
**Figure 6.** Table View: The table view is an alternative to the barplot view for each use case described in Figures 11-13.



A user can select a mutational signature (column 4) and see a summary or the call to action to the COSMIC website. 

 

## SAMPLE VIEW 

By selecting an individual sample, the user will navigate to a sample page view (Figure 7-8), this provides the number of mutations per codon for each base pair change. The sample metadata – diagnosis, data type, total somatic SNVs, and reference genome – is given in the top right. The colors per base change are related to the COSMIC website. Additionally, each SBS mutational signature COSMIC depiction is given as a reference with a link to the website.

 
![](./sample_view.png)
**Figure 7:** Sample View. Mutations for each codon by base change for a particular sample with the COSMIC mutational signature references underneath.   




![](./sample_view_cosmic.png)
**Figure 8:** Sample View, COSMIC Mutational Signature Reference. COSMIC mutational signature reference found in the sample to be used as a reference during analysis.  

### Methods

### Data
[COSMIC](https://cancer.sanger.ac.uk/signatures/sbs/) mutational signatures shown in [Figure 5 of McLeod et al](https://cancerdiscovery.aacrjournals.org/content/11/5/1082.long) identify COSMIC SBS signatures (v3.1) upon consideration of WGS somatic variants which are performed using SigProfilerSingleSample (v1.3).
