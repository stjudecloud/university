# St. Jude Cloud Genomics Platform

Genomics Platform is an app that allows you to browse, request, host, and analyze raw next-generation sequencing data. This app is a collaboration between [St. Jude Children's Research Hospital](https://www.stjude.org/), [Microsoft Azure](https://azure.microsoft.com/en-us/), and [DNAnexus](https://www.dnanexus.com/). 

We provide high quality next generation Whole Genome (WGS), Whole Exome (WES), and RNA-Seq data to researchers around the world. There is a [request process](./requesting-data/data-request.md) to protect this data even though it is de-identified. One of the benefits of partnering with DNAnexus is that users can not only access our data, but also upload their own. [Click here to learn how](./managing-data/upload-local.md). 

![](./genomics-platform-home.png)

Our homepage offers our most popular actions, including visiting our data browser, accessing our analysis workflows, or managing your current access through your dashboard. Browsing our data and workflows is free and does not require an account. If you would like to access the data or workflows, you will have to make a free account so that you can access them through your dashboard. Once approved for access to our data or workflows, you will not be charged for any associated storage fees. [See here how to request data and our process for approval.](./requesting-data/data-request.md)

## St. Jude Employee Quick Start

!!!warning "The information displayed below this point is primarily intended for employees of St. Jude Children's Research Hospital."
!!! 

Please complete the following check-list to get started with using St. Jude
Cloud.

- [x] Join St. Jude Cloud helpdesk channel on Slack ([link](#joining-slack)).
- [x] Log in to your St. Jude Cloud account ([link](#login-to-st-jude-cloud)). 
- [x] Enable Microsoft Azure ([link](#enable-microsoft-azure)). 
- [x] Create your first project ([link](#create-your-first-project)).
- [x] Set up your billing account ([link](#set-up-your-billing-account)).
    
### Joining Slack

The St. Jude Cloud team uses [Slack][slack] to communicate on a day-to-day basis. When standing up a help desk, we decided to offer that functionality on Slack to allow our community to answer questions alongside our team. If you are an employee at SJCRH, you already have a Slack account (at no cost to you) — you might even like it so much, you decide to use it during this work from home period!

If you have any issues with the instructions below, you can email [helpdesk@stjude.org](mailto:helpdesk@stjude.org) or [support@stjude.cloud](mailto:support@stjude.cloud).

**Steps**

1. Navigate to [https://stjude.slack.com](https://stjude.slack.com), click "Sign in with your St. Jude Account", and enter your St. Jude credentials. Congrats! You're now on Slack.
2. Download the desktop app by visiting [https://slack.com/download](https://slack.com/download). The instructions differ depending on whether you are on a Windows/Mac/Linux machine. Once you install and start up the app, the sign-in process should look the same as step 1.
3. To join the `#stjudecloud-helpdesk` channel, you can click the word "Channels" in the left sidebar and search for `#stjudecloud-helpdesk`. If you have issues, please see [the official Slack guide](https://slack.com/help/articles/205239967-Join-a-channel) on joining a channel.

You should now see a screen similar to the one included below. You can type your questions into the chat box at the bottom. See you there!
   
![Slack Helpdesk Channel](./slack-messaging.png)


### Login to St. Jude Cloud

Signing in to St. Jude Cloud is similarly easy — if you have a SJCRH account, you already have a St. Jude Cloud account.

**Steps**

1. Visit [https://cloud.stjude.org](https://cloud.stjude.org), log in with your St. Jude credentials, and fill in the basic profile page to your satisfaction if prompted. Congrats! You're now logged in to St. Jude Cloud. 

This should be sufficient for the purposes of this guide. For more detailed information, see our standard guide on [accounts and billing](../../guides/genomics-platform/accounts-and-billing.md).

!!!tip
    As you navigate around St. Jude Cloud, you can click the DNAnexus logo in the top left to go back to the home screen at any time.
!!!

### Enable Microsoft Azure

**Steps**

1. Change your preferences to pull cloud resources from Microsoft Azure instead of Amazon AWS by default. To do this, (i) click on your profile in the top right corner, (ii) select "My Profile", and (iii) ensure "Azure US (West)" is checked. See the pictures below for more detail.

![Step 1: Click "My Profile"](./1.png)
![Step 2: Set default billing region](./2.png)

### Create your First Project

**Steps**

1. Select "New Project" in the upper left part of the screen, fill in the form as instructed in the image below, and click "Create Project". You should be redirected to your first DNAnexus project.
2. We highly recommend you read through [DNAnexus's dedicated guide](https://documentation.dnanexus.com/getting-started/key-concepts/projects#create-a-new-project) to learn about projects: how you can navigate them, how you can share them with collaborators, and how they are billed. 

![Step 1: Create a project](./create-a-project-1.png)

### Set Up your Billing Account

Billing is handled in St. Jude Cloud by creating and managing a DNAnexus billing organization (or "org"). Each project in DNAnexus is associated with a single org (you had to specify one when you created a project in the last step), and all compute and storage costs are billed to that org. By default, each new user on St. Jude Cloud gets a billing org called `user-[username]` with $50 of trial credit. You can view the billing orgs available to your account [here](https://platform.dnanexus.com/profile/settings/billing).  

!!!info

    There is the potential for additional funds to be available. If you are a lab that would like to use the cloud but do not have funds available, please let us know at [support@stjude.cloud](mailto:support@stjude.cloud).
!!!    

**Steps**

1. Your lab will need to set up a billing org for itself. Please see our Account and Billing sections below. 

    [Billing for St. Jude Employees](./accounts-and-billing/#st-jude-employees)

    [Billing for Non-St. Jude Employees](./accounts-and-billing/#non-st-jude-employees)


[slack]: https://slack.com/