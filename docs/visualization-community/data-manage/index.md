---
title: Manage Your Data
---
In this section, you can learn which key to use based on where your data lives. 
 ```JS
 url
 ``` 
 or 
 ```JS
 file
 ```
keys to run the 
```JS 
proteinpaint()
``` 
command:
Follow the below tutorials depending on where your data lives:

Here you will want to follow the one highlighted below.
* if you have your data stored in DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-dnanexus/). 
* if you have your data stored on your local and want to upload to DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-local/).
* if you have your data stored on the HPC and want to move them to DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-cluster/).

!!!tip
* The url key is case in-sensitive.
* Dropbox storage will not work since these are binary files.
* AW and DNAnexus are two examples that the `runproteinpaint()` can access. 
* !!!

# Extending your DNAnexus download link
First you will want to check if you have python installed.
```JS 
python --version
```
Then, check if you have python3 installed.
```JS
python3 --version
```
Install DNAnexus. 
```JS
pip3 install dxpy
```
Open DNAnexus on the command line.
```JS
dx
```
Get your token by logging into DNAnexus. Navigate to your profile icon. Select the API token in the top navbar. Select to generate the token.
Then go to your terminal and enter:
```JS
dx login --token token_here
```
 Type the below to see what project you are in. 
```JS 
dx ls
```
 Type the below to go to a project. 
```JS
dx cd
```
Type the below to see the durations.
```JS
dx make_download_url file_name.txt --help
```
Type to set duration. 
```JS
dx make_download_url file_name.txt --duration 100y
```
Use this URL for VisCom so be sure to save this. 

# Licensing 
If you wish to have your own license of ProteinPaint please follow this [guideline](https://www.stjude.org/research/why-st-jude/shared-resources/technology-licensing/technologies/proteinpaint-web-application-for-visualizing-genomic-data-sj-15-0021.html). 