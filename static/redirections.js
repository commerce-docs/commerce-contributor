/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(() => {
    let prefixPath =
      window.location.host.indexOf("localhost") === 0 ? "" : "commerce/contributor/";
    let redirectPath = "";

    if (
        (location.hostname === "localhost" || location.hostname === "127.0.0.1") ||
        window.location.pathname.startsWith("/commerce/contributor/")
     ) {
        if (window.location.pathname.replace(prefixPath, '') === '/community/best-practices/') {
            redirectPath = prefixPath + "guides/";
            window.location.href = "http://" + window.location.host + "/" + redirectPath;
        }
    }

  })();
