# cloudflare-r2-worker
A collection of Cloudflare Workers that handle file retrieval from R2 storage.

首先要创建一个R2 bucket和worker，接着在worker中设置bucket变量。代码见index.js，就可以直接用key来下载文件。

[参考文档](https://developers.cloudflare.com/r2/data-access/workers-api/workers-api-usage/)
