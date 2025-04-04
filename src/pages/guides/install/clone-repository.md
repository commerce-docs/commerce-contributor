---
title: Clone the Git Repository | Commerce Contributor
description: Use the git-based method to install Magento Open Source if you plan on contributing to the code.
keywords:
  - Install
---

# Clone the git repository

You can clone the latest code from the [Magento Open Source GitHub repository](https://github.com/magento/magento2), and use code from a release branch or a development branch.

-  A **release branch** is a _stable_, full-featured code branch officially released with a version number, such as 2.4. You _must_ use a release branch with the [Data Migration Tool](https://experienceleague.adobe.com/en/docs/commerce-operations/tools/data-migration/how-migration-works).

-  A **development branch**, or feature branch, is a less-stable code branch with the latest code intended as the next version or to introduce a specific feature.

You can checkout a specific branch after you clone the repository to your local development environment. See [Cloning a repository](https://help.github.com/articles/cloning-a-repository-from-github/) in the _GitHub Docs_.

## Authentication and access

The Adobe Commerce repository requires authentication, so you must prepare the following:

-  **[Authentication key](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/prerequisites/authentication-keys)**—You must have an authentication key to access the Adobe Commerce Composer package on `repo.magento.com` and to enable install and update commands for your project.

-  **[GitHub personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)**—Composer requires a _personal access token_ in the `github-oauth` property to authorize GitHub repository access. When you create this token, select all options in the `repo` scope.

## Authentication file

You must create an `auth.json` file that contains your Adobe Commerce [authorization credentials](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/prerequisites/authentication-keys) in the Magento root directory.

To create an authentication file:

1. If you do not have an `auth.json` file in your Magento root directory, create one.

   -  Using a text editor, create an `auth.json` file in the Magento root directory.
   -  Copy the contents of the [sample `auth.json` file](https://github.com/magento/magento2/blob/2.4/auth.json.sample) into the new `auth.json` file.

1. Replace `<public-key>` and `<private-key>` with your Adobe Commerce authentication credentials. Add the `github-oauth` section and replace the `<personal-access-token>` with the one you created for your GitHub account.

   ```json
   {
       "http-basic": {
           "repo.magento.com": {
               "username": "<public-key>",
               "password": "<private-key>"
           }
       },
       "github-oauth": {
           "github.com": "<personal-access-token>"
       }
   }
   ```

1. Save your changes and exit the text editor.

<InlineAlert variant="warning" slots="text"/>

Pushing an `auth.json` file to a public repository can expose your credentials.

After completing the tasks discussed on this page, see [update installation dependencies](update-dependencies.md#update-installation-dependencies).
