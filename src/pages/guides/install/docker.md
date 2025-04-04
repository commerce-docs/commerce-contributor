---
title: Use Docker | Commerce Contributor
description: Recommendations on how to use Adobe Commerce or Magento Open Source in Docker containers.
keywords:
  - Docker
  - Install
---

# Use Docker

As well as using the native installation path to set up a system with all the requirements to run Adobe Commerce or Magento Open Source, you can also use Docker, either with a custom project or using an existing solution. There are several advantages in using Docker instead of a native set up:

-  It is generally easier to set up a Docker-based development environment than a native one.

-  Reproducing the same environment in another machine is just a matter of copying a `Dockerfile` and/or `docker-compose.yml` files to it and building new containers from them.

-  It allows you to replicate the same set up that you have in production inside a container.

-  You can have different containers with different configurations for extensive testing.

The following two scenarios describe when a Docker-based environment is most useful:

-  For demos, Commerce Cloud compatibility testing, and basic development we recommend [Magento Cloud Docker](https://github.com/magento/magento-cloud-docker). See [Cloud Docker Development](https://developer.adobe.com/commerce/cloud-tools/docker/).

-  For development, aside from Magento Cloud Docker, there are several community projects that provide a Docker environment suitable for coding, like [Docker Magento]( https://github.com/markshust/docker-magento) and [Magento2Docker](https://github.com/yvoronoy/magento2docker). Refer to each project's documentation for more details.
