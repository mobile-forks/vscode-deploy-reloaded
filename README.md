# vscode-deploy-reloaded

[![Latest Release](https://vsmarketplacebadge.apphb.com/version-short/mkloubert.vscode-deploy-reloaded.svg)](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-deploy-reloaded)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/mkloubert.vscode-deploy-reloaded.svg)](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-deploy-reloaded)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-short/mkloubert.vscode-deploy-reloaded.svg)](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-deploy-reloaded#review-details)

Recoded version of [Visual Studio Code](https://code.visualstudio.com) extension [vs-deploy](https://github.com/mkloubert/vs-deploy), which provides commands to deploy files to one or more destinations.

The extension supports the following destinations:

| Type |
| ---- |
| [Amazon AWS S3 buckets](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_s3bucket) |
| [Azure blob storages](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_azureblob) |
| [Compiler](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_compiler) |
| [DropBox](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_dropbox) |
| [External Node.js based scripts](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_script) |
| [FTP](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_ftp) |
| [Local or shared network folders inside a LAN](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_local) |
| [Mail (SMTP)](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_mail) |
| [SFTP](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_sftp) |
| [Slack](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_slack) |
| [ZIP files](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_zip) |

## Table of contents

1. [Demos](#demos-)
   * [Deploying to SFTP](#deploying-to-sftp-)
   * [Sync when open](#sync-when-open-)
   * [Auto remove on remote](#auto-remove-on-remote-)
   * [Compare files](#compare-files-)
   * [Download files](#download-files-)
   * [Compare files](#compare-files-)
   * [List remote files](#list-remote-files-)
   * [Tools](#tools-)
     * [Quick code execution](#quick-code-execution-)
2. [Preview](#preview-)
3. [Install](#install-)
4. [How to use](#how-to-use-)
   * [Settings](#settings-)
     * [Packages](#packages-)
     * [Targets](#targets-)
   * [How to execute](#how-to-execute-)
5. [Support and contribute](#support-and-contribute-)

## Demos [[&uarr;](#table-of-contents)]

### Deploying to SFTP [[&uarr;](#demos-)]

![Demo Deploying to SFTP](https://raw.githubusercontent.com/mkloubert/vscode-deploy-reloaded/master/img/demo1.gif)

### Sync when open [[&uarr;](#demos-)]

![Demo Sync when open](https://raw.githubusercontent.com/mkloubert/vscode-deploy-reloaded/master/img/demo2.gif)

### Auto remove on remote [[&uarr;](#demos-)]

![Demo Auto remove on remote](https://raw.githubusercontent.com/mkloubert/vscode-deploy-reloaded/master/img/demo5.gif)

### Download files [[&uarr;](#demos-)]

![Demo Download files](https://raw.githubusercontent.com/mkloubert/vscode-deploy-reloaded/master/img/demo4.gif)

### Compare files [[&uarr;](#demos-)]

![Demo Compare files](https://raw.githubusercontent.com/mkloubert/vscode-deploy-reloaded/master/img/demo3.gif)

### List remote files [[&uarr;](#demos-)]

![Demo List remote files](https://raw.githubusercontent.com/mkloubert/vscode-deploy-reloaded/master/img/demo6.gif)

### Tools [[&uarr;](#demos-)]

#### Quick code execution [[&uarr;](#tools-)]

![Demo Quick code execution](https://raw.githubusercontent.com/mkloubert/vscode-deploy-reloaded/master/img/demo7.gif)

## Preview [[&uarr;](#table-of-contents)]

Keep in mind, that this is a preview extension, which is in a good beta state.

The goal is to create a refactored version of [vs-deploy](https://github.com/mkloubert/vs-deploy), with a clean API and lots of more helpful tools and features, like [multi workspace support](https://code.visualstudio.com/docs/editor/multi-root-workspaces).

If you are already using [vs-deploy](https://github.com/mkloubert/vs-deploy), it is recommended to [disable the old extension](https://code.visualstudio.com/docs/editor/extension-gallery#_disable-an-extension), before you use `vscode-deploy-reloaded`.

## Install [[&uarr;](#table-of-contents)]

Launch VS Code Quick Open (`Ctrl + P`), paste the following command, and press enter:

```bash
ext install vscode-deploy-reloaded
```

Or search for things like `vscode-deploy-reloaded` in your editor.

## How to use [[&uarr;](#table-of-contents)]

Detailed information can be found at the [wiki](https://github.com/mkloubert/vscode-deploy-reloaded/wiki).

Otherwise...

### Settings [[&uarr;](#how-to-use-)]

Open (or create) your `settings.json` in your `.vscode` subfolder of your workspace.

Add a `deploy.reloaded` section:

```json
{
    "deploy.reloaded": {
    }
}
```

#### Packages [[&uarr;](#settings-)]

A package is a description of files of your workspace that should be deployed.

Add the subsection `packages` and add one or more entry:

```json
{
    "deploy.reloaded": {
        "packages": [
            {
                "name": "Version 2.3.4",
                "description": "Package version 2.3.4",
                "files": [
                    "**/*.php",
                    "/*.json"
                ],
                "exclude": [
                    "tests/**"
                ],
                "deployOnSave": true
            }
        ]
    }
}
```

Have a look at the [wiki](https://github.com/mkloubert/vscode-deploy-reloaded/wiki#packages-), to get more information about packages.

#### Targets [[&uarr;](#settings-)]

A target describes where a file or package should be transfered to.

Add the subsection `targets` and add one or more entry:

```json
{
    "deploy.reloaded": {
        "targets": [
            {
                "type": "sftp",
                "name": "My SFTP folder",
                "description": "A SFTP folder",
                "dir": "/my_package_files",
                "host": "localhost", "port": 22,
                "user": "tester", "password": "password",

                "checkBeforeDeploy": true,

                "mappings": [
                    {
                        "source": "dir/of/files/that/should/be/mapped",
                        "target": "dir/on/target"
                    }
                ]
            },
            {
                "type": "ftp",
                "name": "My FTP folder",
                "description": "A FTP folder",
                "dir": "/my_package_files",
                "host": "localhost", "port": 21,
                "user": "anonymous", "password": "",

                "deployed": [
                    {
                        "type": "sql",
                        "engine": "mysql",

                        "queries": [
                            "TRUNCATE TABLE `debug`",
                            "TRUNCATE TABLE `logs`"
                        ]
                    },
                    {
                        "target": "https://github.com/mkloubert"
                    }
                ]
            },
            {
                "type": "local",
                "name": "My local folder",
                "description": "A local folder",
                "dir": "E:/test/my_package_files"
            },
            {
                "type": "local",
                "name": "My network folder",
                "description": "A SMB shared network folder",
                "dir": "\\\\MyServer\\my_package_files"
            },
            {
                "type": "zip",
                "name": "My ZIP file",
                "description": "Create a ZIP file in a target directory",
                "target": "E:/test"
            },
            {
                "type": "mail",
                "name": "My mail server",
                "description": "An email deployer",
                "host": "smtp.example.com", "port": 465,
                "secure": true, "requireTLS": true,
                "user": "mkloubert@example.com", "password": "P@assword123!",
                "from": "mkloubert@example.com",
                "to": "tm@example.com, ys@example.com"
            },
            {
                "type": "script",
                "name": "My script",
                "description": "A deploy script",
                "script": "E:/test/deploy.js",
                "options": {
                    "TM": 5979,
                    "MK": "23979"
                }
            },
            {
                "type": "batch",
                "name": "My Batch",
                "description": "A batch operation",
                "targets": ["My mail server", "My ZIP file"]
            },
            {
                "type": "azureblob",
                "name": "My Azure blob storage",
                "description": "An container in an Azure blob storage",
                "container": "my-container",
                "account": "my-storage-account",
                "accessKey": "<ACCESS-KEY-FROM-AZURE-PORTAL>"
            },
            {
                "type": "s3bucket",
                "name": "My Amazon Bucket",
                "description": "An Amazon AWS S3 bucket",
                "bucket": "my-bucket"
            },
            {
                "type": "dropbox",
                "name": "My DropBox folder",
                "description": "Deploy to my DropBox folder",

                "token": "<ACCESS-TOKEN>"
            }
        ]
    }
}
```

Have a look at the [wiki](https://github.com/mkloubert/vscode-deploy-reloaded/wiki#targets-), to get more information about targets.

### How to execute [[&uarr;](#how-to-use-)]

Press `F1` and enter one of the following commands:

| Name | Description |
| ---- | --------- |
| `Deploy Reloaded: Compare ...` | Opens a set of commands, to compare local and remote files. |
| `Deploy Reloaded: Delete ...` | Commands for deleting files.  |
| `Deploy Reloaded: Deploy ...` | List of commands for deploying files. |
| `Deploy Reloaded: List directory ...` | Lists a (remote) directory. |
| `Deploy Reloaded: Pull ...` | Pull or download files from remote. |
| `Deploy Reloaded: Switches ...` | Handle [switch targets](https://github.com/mkloubert/vscode-deploy-reloaded/wiki/target_switch). |
| `Deploy Reloaded: Tools ...` | A set of helpful tools. |

You can also use the following, predefined, shortcuts:

| Command | Shortcut (`CTRL` is `CMD` on Mac) | Description |
| ------- | --------------------------------- | ----------- |
| `extension.deploy.reloaded.deleteFile` | `CTRL + ALT + D, F` | Deletes the current file on remote. |
| `extension.deploy.reloaded.deletePackage` | `CTRL + ALT + D, W` | Deletes files of a package on remote. |
| `extension.deploy.reloaded.deployFile` | `CTRL + ALT + F` | Deploys the current file. |
| `extension.deploy.reloaded.deployWorkspace` | `CTRL + ALT + W` | Deploys files of a package. |
| `extension.deploy.reloaded.listDirectory` | `CTRL + ALT + L, D` | Lists a directory on remote. |
| `extension.deploy.reloaded.pullFile` | `CTRL + ALT + P, F` | Pulls / downloads the current file. |
| `extension.deploy.reloaded.pullWorkspace` | `CTRL + ALT + P, W` | Pulls / downloads files of a package from remote. |
| `extension.deploy.reloaded.quickExecution` | `CTRL + SHIFT + Q` | Quick JavaScript code execution. |
| `extension.deploy.reloaded.receiveFile` | `CTRL + ALT + S, R` | Waits for a file from a remote editor. |
| `extension.deploy.reloaded.receiveFile.closeServer` | `CTRL + ALT + S, C` | Cancels the receiving of a file from a remote editor. |
| `extension.deploy.reloaded.sendFile` | `CTRL + ALT + S, S` | Sends the current file to a remote editor. |

## Support and contribute [[&uarr;](#table-of-contents)]

If you like the extension, you can support the project by sending a donation

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/MarcelKloubert)

to [me](https://github.com/mkloubert).

To contribute, you can [open an issue](https://github.com/mkloubert/vscode-deploy-reloaded/issues) and/or fork this repository.

To work with the code:

* clone [this repository](https://github.com/mkloubert/vscode-deploy-reloaded)
* create and change to a new branch, like `git checkout -b my_new_feature`
* run `npm install` from your project folder
* open that project folder in Visual Studio Code
* now you can edit and debug there
* commit your changes to your new branch and sync it with your forked GitHub repo
* make a [pull request](https://github.com/mkloubert/vscode-deploy-reloaded/pulls)

If you like to create a translation, for example, you can take a look at [this directory](https://github.com/mkloubert/vscode-deploy-reloaded/tree/master/src/lang).

The API documentation can be found [here](https://mkloubert.github.io/vscode-deploy-reloaded/).
