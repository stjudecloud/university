---
title: Upload Data (Local)
---

# Uploading Data from your Local Computer

!!!warning
Uploading to DNAnexus from your laptop should not be done over the VPN — ensure you are disconnected before continuing with this guide!
!!!

DNAnexus provides a command line utility, `dx`, to enable users to upload input data, download results, and run workflows in the cloud. Click [here][dx-toolkit-help] to learn about all of the commands included in `dx`.

The `dx` command line tool is written in Python. It can be installed onto your computer using `pip install dxpy`. However, many computers ship with multiple versions of Python, and that can lead to many really strange errors (e.g. one version of Python trying to load libraries from a different version of Python). Thus, we highly recommend the use of [conda environments] to create an isolated Python environment and install `dx` there.

!!!tip
If you are interested in learning more about the features provided by conda, their [getting started guide](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html) is quite good. This is not strictly necessary for continuing with this guide.
!!!

[conda environments]: https://www.anaconda.com/distribution/
[dx-toolkit-help]: https://documentation.dnanexus.com/user/helpstrings-of-sdk-command-line-utilities

## Installing via conda

To install `conda` and start creating isolated Python environments, you can visit [the conda download documentation] and complete the install instructions for your operating system. Be sure to select "Python 3.X version" when choosing which version to download. Once you complete installation, you should be able to use the `conda` command in your terminal.

`conda` can be used to create multiple, independent Python environments. To leverage it to use `dx`, you'll need to do two things:

* a one-time creation of a Python 3 environment with `dx` installed.
* an environment activation step for _every_ new terminal you open. Note that the environment we create will not be accessible without this explicit activation step.

To create an isolated Python 3 environment with `dxpy` installed, use the following command (you can give your environment any name, here we name it `dx-env`).

```bash
# conda create -n [environment-name] python=3 dxpy -y
conda create -n dx-env python=3 dxpy -y
```

Once you the environment is created, you can run this command each time you open a new terminal to ensure that environment is active.

```bash
# conda activate [environment-name]
conda activate dx-env
```

You should now be able to use the `dx` command line tool in your terminal.

```bash
dx --help
```

[the conda download documentation]: https://docs.anaconda.com/anaconda/install/

## Authenticating

Next, you'll need to configure the `dx` command line tool with access to your St. Jude Cloud account. Rather than exposing your username and password, best practice is to generate an authentication token that lives for a short period of time instead. You can do so by following this guide on how to generate [a DNAnexus authentication token].

Replace `<auth-token>` with your own token in the example below.

```bash
dx login --token <auth-token> --noprojects
```

## Upload and download files

With DNAnexus toolkit installed and configured, files can be transferred between St. Jude Cloud and your local computer by running `dx upload` and `dx download`. To get acquainted with the command, you can view the relevant help messages.

```bash
dx upload -h
dx download -h
```

To upload a file `sample.1.bam` to the `/test/` folder in the `project-alpha` cloud project, you could use the following command:

```bash
dx upload sample.1.bam --destination "project-alpha:/test/"
```

To download all files in the `/results/` folder in the `project-alpha` cloud project to the current working directory, you could use the following command:

```bash
dx download -r "project-alpha:/results/"
```

The `dx` command line utility and its `upload`/`download` subcommands have many options you can configure based on your use case. We recommend you view the help messages or reach out to us at support@stjude.cloud for more information.

[a DNAnexus authentication token]: https://documentation.dnanexus.com/user/login-and-logout#authentication-tokens
