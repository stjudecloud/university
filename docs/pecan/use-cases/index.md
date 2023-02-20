---
title: Use Cases
---

The following are common use cases a user could achieve in PeCan. 

1. **As a user, I need the ability to know what the platform has to offer.**
   The [homepage](https://pecan-v2.staging.stjude.cloud/) is designed to familiarize the user with the components of the platform along with key features found in each. Additionally, the user can explore our [Help Guides](https://university.stjude.cloud/docs/pecan/) which allows the user to read more about each data facet, including the [data and methods](./methods-data) to generate each facet. 
2. **As a user, I need the ability to add a VCF file and look at a list of variant details regarding the pathogenicty for variant classification.**
   A user can navgiate to [PIE](https://pecan-v2.staging.stjude.cloud/pie) and once signed in, the user can [submit a job](https://pecan-v2.staging.stjude.cloud/pie/submit-job) which allows the upload of a VCF file or the ability to enter a single variant. Read more information about PIE [here](./pecan-pie)
3. **As a user, I need the ability to find the histology image.**
   On the [histology] data facet, a user can search on the advanced search page so a specific SJID (CompBioID). This does not populate approximates but a user can search partial IDs. Read more about [Histology here].
4. **As a user, I need the ability to view and expect the histology image for a given patient or sample ID.**
   On the [histology] data facet, a user can select a histology image and then navigate to the `Open Viewer` whereby the user can expect the histology image using the OpenSeaDragon features. Read more about [Histology here].
5. **As a user, I need the ability to view clinical relevant notes for a histology image.**
   On the [histology] data facet, a user can select a histology image and then access the relevant clinical notes per slide. 
6. **As a user, I need the ability to copy or download a slide image.**
   On the [histology] data facet, a user can select a histology image and copy the URL to share with others and/or download the image for personal use. These two features can also be accessed on the Open Viewer page. Read more about [Histology here].
7. **As a user, I need the ability to see how many patients and samples are available in PeCan for a given diagnoses or subtype.**
   On the Sunburst, the user can select a diagnoses and/or subtype which then updates the patient and sample stat summary in the top left. Available samples will also update accordingly per data facet. Read more on [Getting Started here].
8. **As a user, I need the ability to view a gene.**
  The user can search a gene which takes them to the ProteinPaint view in the Variants data facet. Here, no filtering will be precomputed and the `Pedatric` dataset for hg38 will be defaulted. 
  
  The user can navigate to the Variants data facet and click on ProteinPaint. The default view will be for TP53 with hg38 genome. The user can filter by diagnosis and/or subtype or move coordinates by typing a new gene in the width container. Read more about [Variants:ProteinPaint here].
9.  **As a user, I need the ability to view a variant.**
    The user can search a variant which takes them to the Variant Details page in the Variants data facet. Here, the variant information will be deafulted to hg19. The user can navigate to the Variants data facet and click on ProteinPaint. The default view will be for TP53 with hg38 genome. The user can filter by diagnosis and/or subtype or move coordinates by typing a new gene in the width container. The user can find a Variant Details page two ways:
       - Hover underneath all variants which will display a total number. By clicking the total it will populate a table where a Variant Details blue box will appear. This is clickable which will populate all P/LP buttons. Select one to view the variant page.
       - Click a variant of interest on the lollipop and click the P/LP button to view the variant page. Read more about [Variants:Variant Details here].
10. **As a user, I need the ability to view an Oncoprint for a given diagnoses or subtype.**
    A user can filter on the sunburst and then select the Variants data facet which will render the appropriate oncoprint.
    A user can navigate to the Variants data facet without filtering from the sunburst and then use the Variants dropwdown filter accordingly. Read more about [Variants:Oncoprint here].
11. **As a user, I need the ability to view mutational signatures.**
    A user can pre-filter by the sunburst or navigate directly into the data facet. Here, a user can select samples by subtype (y-axis), mutational signature (x-axis), or subtype with a specific mutational signature (cell). The selection will populate a sample summary page.  Read more about [Mutational Signatures here].
12. **As a user, I need the ability to retrieve a list of samples from the tSNE.**
    A user can employ the lasso feature where you draw a region on the map and then select list samples. Read more about [Expression here].
13. **As a user, I need to know the most prevalent genes in a given diagnoses or subtype.**
    A user can filter on the sunburst and then select the Variants data facet and toggle to Variant Prevalence which will render the appropriate visualization.
    A user can navigate to the Variants data facet without filtering from the sunburst and then use the Variants dropwdown filter accordingly. Read more about [Variants:variant Prevalence here].


# Coming Soon
1. Gene expression per subtype will be added to the Expression data facet.
2. Epigenetic data facet will be implemented. 
3. Sample summary pages.
4. Cohort building.

Interested in a new feature? Submit your idea to [support@stjude.cloud](suport@stjude.cloud)