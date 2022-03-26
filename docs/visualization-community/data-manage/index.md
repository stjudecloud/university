---
title: Manage Your Data
---
In this section, you will learn how and where to find your data so that you can use our visualization editors. 

!!!tip
* The <url> key is case in-sensitive.
* Dropbox storage url keys will not work since these are binary files.
* Amazon (AWS) and DNAnexus are two examples that `runproteinpaint()` can access. 
* The <file> key is only for internal St. Jude users to access the HPC within the <tp> directory.
!!!

Follow the below tutorials if you want to upload data to DNAnexus. 
* if you have your data stored in DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-dnanexus/). 
* if you have your data stored on your local and want to upload to DNAnexus, go [here](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-local/).

!!!Required
You must follow the below tutorial to extend your links after you upload your data.
!!!

# Accessing DNAnexus from the command line (to extend your file duration)
First you will want to check if you have python installed.
```JS 
python --version
```
Then, check if you have python3 installed
```JS
python3 --version
```
now install DNAnexus.
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


# Accessing the HPC
* If you have your data stored on the HPC and want to move them to DNAnexus, follow these [instructions](https://university.stjude.cloud/docs/genomics-platform/managing-data/upload-cluster/).

* In order to allow ProteinPaint's server to access your data on the HPC, you must move it to to the <tp> directory. To access this, signin (see tutorial above if you are new) and type 
```JS
cd /research/rgs01/resgen/legacy/gb_customTracks/tp
```

Here, you can make a new directory to store your data. 

!!!Tip
The data must be on the proteinpaint.stjude.org server and not ppr1, otherwise your visualizations have to be viewed by VPN.
!!!

