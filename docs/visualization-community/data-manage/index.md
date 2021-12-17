---
title: Manage Your Data
---
In this section, you can learn how to store your data and acces it for your ```url``` or ```file``` parameter to run the ```proteinpaint()``` command:
* if you have your data stored in DNAnexus.
* if you have your data stored on your local and want to upload to DNAnexus.
* if you have your data stored on the HPC and want to move them to DNAnexus.
* if you have your data stored on the HPC.

# When data is hosted in the cloud using DNAnexus:
If you want or have data stored on DNAnexus go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/working-with-our-data/) to further learn how to manage your data. There are many options to upload your data to DNAnexus so be sure to check out each chapter explaining how to upload. Then, once you are ready, locate your data in your DNAnexus project by reading below.

**Download your data's temporary link**
On the right of the file within your project, click the 3-dot menu for your file. Then, select download in the dropdown. This will prompt a GET URL link. Click the 'Get URL' to copy the temporary link. If you need more assistance, follow the tutorial found [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-dnanexus/). 

!!!warning 
This link allows others to access this file and is only available for 24h.
!!!

Now, paste the link from DNAnexus into your ```url``` parameter in the code block you copied for your visualization. 

!!!tip
* Other free storage software is compatible to use with the url parameter.
* Follow the same DNAnexus steps, but replace the URL line accordingly.
!!!

To learn more about how to find the url parameter watch this [video].

# When data is hosted on the HPC

**Logging-in**
If you do not have access to the HPC, you will need to submit a request ticket to[Information Services/Services Now](https://stjude.service-now.com/sp?id=sc_cat_item&sys_id=bb8437fd1b026c109057f2ff034bcb07&sysparm_category=812f8e8d4fabf2444ce80ad14210c7bc) or email the hpc team directly to gain access. Additionally, you must also request access to the <tp> directory and any directory within <tp>. 

!!!tip
The High Performance Research Computing team is 
  available to answer HPC or other Information Services 
  questions at the weekly HPC Office Hour. This is a virtual 
  meeting.  See https://wiki.stjude.org/display/RC/HPC+Office+Hours
  for more information.  This time slot can also be used for 
  assistance with specific computational problems.
!!!

Once you have access to the HPC and <tp> directory, you will want to follow the tutorial found [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-cluster/).


To learn more on how to find your data on the HPC watch this [video].

**Coming soon:** how to run ProteinPaint locally with a license

**Coming soon:** how to run ProteinPaint using a url parameter from an external server
