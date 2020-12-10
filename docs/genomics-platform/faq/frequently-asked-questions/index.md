---
title: Frequently Asked Questions
---


# Frequently Asked Questions

```toc
from-heading: 2
```

## Will I be charged for using St. Jude Cloud Genomics Platform?

Within St. Jude Cloud Genomics Platform, any St. Jude data you receive through a
data request is *sponsored*, meaning that you do not have to pay a fee to store
this data in St. Jude Cloud. You **will not** incur any costs except in the
following situations:

* Any *other* files, such as input files uploaded to or results produced by St.
  Jude Cloud, will incur a monthly fee. See your [DNAnexus billing
  information](https://platform.dnanexus.com/profile/settings/billing) for the
  cost per GB.
* Any analysis workflows, including those provided by St. Jude or your own that
  you have uploaded and packaged into the cloud, will incur a charge. The charge
  depends on the underlying compute resources used and the amount of time taken.
  Documentation for specific workflows we provide should contain guidance on how
  much the workflow costs. See your [DNAnexus billing
  information](https://platform.dnanexus.com/profile/settings/billing) for the
  price of each VM size per hour.
* At the current time, downloading data is free to end-users. Note, however,
  that downloading is not without cost to St. Jude. All cloud environments
  charge an **egress fee** for anyone downloading data outside of the cloud. At
  the current time, St. Jude has chosen to sponsor any egress fees associated
  with downloading data. However, we reserve the right to alter this in the
  future.

## How can I set up billing for my lab?

Billing setup is different based on whether you are an internal user (you work
at St. Jude) or an external user. If you are a St. Jude Employee, please refer
to the dedicated [intranet
page](https://home.stjude.org/computational-biology/Pages/bioinformatics-self-service-cloud.aspx)
for instructions. If you are not a St. Jude Employee, please refer to our
[Create an Account](./accounts-and-billing.md#billing-setup) guide.

## Does St. Jude Cloud allow for-profit companies to access genomics data? 

We do not allow for-profit companies to access any of our restricted access genomics data. We are persistently working with our institution to create a path forward for companies. If you work for a for-profit company and would like to be notified if this rule changes, feel free to email us at
[support@stjude.cloud](mailto:support@stjude.cloud).

## Why do I need to sign the Data Access Agreement (DAA)?

The [data access
agreement](./requesting-data/glossary.md#data-access-agreement)
serves many purposes. Ultimately, the terms included in the data access
agreement are in place to protect our patients. We take patient security very
seriously, and we require that requesters are committed to protecting that
privacy to the fullest extent.

## How do I submit edits/revisions to the DAA?

We do not alter the terms of the data access agreement **for any reason** except
when the terms are found to be directly in conflict with state or national law.
In this case, please send a reference to law and a short description to
[support@stjude.cloud](mailto:support@stjude.cloud). Otherwise, please
understand that simply cannot manage the operational overhead of
differing agreements with different parties.

## Can I get a Microsoft Word version of the DAA?

We do not provide any editable format of the DAA, as we do not accept edits or
revisions from external parties.

## Where can I find the latest version of the Data Access Agreement (DAA)?

You can download the latest version of the DAA
[here](https://platform.stjude.cloud/access_form).

## Where do I submit the Data Access Agreement (DAA)?

You can submit your Data Access Agreement in the drag and drop box on the [last
step of the data request
process](./requesting-data/data-request.md#requesting-data).

## What if I did not fill out the Data Download Permission section of the original DAA, but now I want to download data?

This would be a change in terms from the original agreement, you would need to
fill out a new DAA (including the [Data Download Permission
section](./requesting-data/how-to-fill-out-DAA.md#the-data-access-agreement)
for any data sets you want to download.

## What clinical information is available about samples in St. Jude Cloud?

You can view the basic clinical and phenotypic information we currently provide
[here](./requesting-data/about-our-data.md#metadata).

## Can I gain access to further clinical information than what is currently available?

We are working towards being able to provide additional clinical annotations
such as treatment, outcome, and survival data in the future. Unfortunately, we
do not offer it today and we do not have a timeline for when it will be
available.

## Can I get a copy of IRB consent forms?

We do not provide individual consent forms or blank consent forms for any
samples on St. Jude Cloud. We have chosen to remain consistent with the
requirements of the other major genomic data repositories in that (1) there is
an internal vetting process by the St. Jude IRB to ensure samples may be shared
with the research community, but (2) we do not share the informed consents with
data requesters.

## Can I request FASTQ files on St. Jude Cloud?

We do not store FASTQ files in St. Jude Cloud because it would double the
storage cost without any benefit. Several tools exist that you can leverage to
revert BAM to FASTQ files — we recommend using Picard SamToFastq to revert BAM
files. You can efficiently revert BAMs to FASTQs in the cloud by wrapping the
conversion tool of your choice into a [Cloud
App](./analyzing-data/creating-a-cloud-app.md)

## How can I work with genomics data in the cloud?

You can view [this guide](./analyzing-data/creating-a-cloud-app.md) to learn how
create a cloud application.

## Why am I getting a connectivity error when connecting to DNAnexus API via SSH?

If you are trying to run something like
  `$ dx run --ssh <executable> `   
and are getting a connectivity error, it may be that your firewall is too
restrictive. Are you able to perform the command from an unrestricted network
(like a home network)? If yes, you can resolve this issue by asking your network
administrator to whitelist connections to Azure US West. All subnets (Region
Name="uswest") are provided
[here](https://www.microsoft.com/en-us/download/details.aspx?id=41653).

## How can I delete my account?

Today, a St. Jude Cloud Genomics Platform account is simply a DNAnexus account.
Thus, of you'd like to delete your account, you'll need to email DNAnexus asking
for it to be removed. You can do so by contacting DNAnexus support at
<support@dnanexus.com> with the following email.

!!!note Subject: St. Jude Cloud account deletion
Hi DNAnexus,

Would you please assist me in deleting my St. Jude Cloud account? My username is _____.

Thank you!
!!!