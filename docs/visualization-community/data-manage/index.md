---
title: Manage Your Data
---
In this section, you will learn which key to use, based on where your data lives:
 ```JS
 url
 ``` 
 or 
 ```JS
 file
 ```

Follow the below tutorials depending on where your data lives:
* if you have your data stored in DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-dnanexus/). 
* if you have your data stored on your local and want to upload to DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-local/).
* if you have your data stored on the HPC and want to move them to DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-cluster/).

!!!tip
* The url key is case in-sensitive.
* Dropbox storage url keys will not work since these are binary files.
* Amazon (AWS) and DNAnexus are two examples that `runproteinpaint()` can access. 
!!!

# Accessing DNAnexus from the command line (extend your file duration)
First you will want to check if you have python installed.
```JS 
python --version
```
Then, check if you have python3 installed
```JS
python3 --version
```
and install DNAnexus.
```JS
pip3 install dxpy
```
Open DNAnexus to ensure you can access it from the command line.
```JS
dx
```
Get your token by logging into DNAnexus. Navigate to your profile icon. Select the API token in the top navbar. Select to generate the token.
Then go to your terminal and enter:
```JS
dx login --token add_token_here
```
Pick a project to enter and then type the below to see all files in that project.
```JS 
dx ls
```
Type the below to see the durations
```JS
dx make_download_url file_name.txt --help
```
and then type to set duration. 
```JS
dx make_download_url file_name.txt --duration 100y
```
Use this URL for VisCom's url key, so be sure to save this. 

# Licensing 
If you wish to have your own license of ProteinPaint please follow this [guideline](https://www.stjude.org/research/why-st-jude/shared-resources/technology-licensing/technologies/proteinpaint-web-application-for-visualizing-genomic-data-sj-15-0021.html). 