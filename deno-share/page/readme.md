# deno是什么
    deno是一个基于V8引擎,简单、现代且安全的javascript和typescript安全运行时

    它是采用rust编写而成
        （最初用的是golang，node是c++编写）

        Rust 提供了很多现成的模块，对 Deno 项目来说，可以节约很多开发时间。

        其中使用了 Rust 语言的 Tokio 库，来实现事件循环（event loop）。
    它的创作者是node.js之父Ryan Dahl(瑞安.达尔)
# Node的设计缺陷
    1、没有坚持使用Promise 
        在2009年6月，Node中开始引入JavaScript的Promise，但又在2010年2月就移除掉了。

        结果，随着日子久远，Node里面就遍布着async/await和 promise的不同异步API设计，直至现在都极难整合
    2、低估了安全的重要性
        不需要授权，即可访问网络，读写文件
    3、使用了gyp来设计Build系统
        GYP是Google Chromium团队用来构建项目文件让GCC、VSBuild等编译平台來编译 C++ Library 的工具。 

        不久后Chrome放弃GYP，转而使用 GN，而 Node已经无法挽回。因此 Node 成了目前在 V8 上唯一使用 GYP 的用户，而 GN 速度比 GYP 快了将近 20 倍、文件可读性高且支持许多依赖

        另外 Ryan Dahl 也认为应该提供更为简便的接口(FFI)，让开发者想绑定其他系统 library 时可以更为简便，而非需要自己写 C++ 才能引用这些动态库，早期有许多人建议 Ryan Dahl 这么做，但都被 Ryan Dahl 漠视了。
    4、Package.json 与 Npm 的集权问题
        package.json 变成了必需品，这是其他语言开发者所沒有过的。

        package.json 记录了太多不必要的资讯，包含描述、许可证、仓库等

        require 自动省略后缀名方式，导致需要额外的判断这是 js还是 ts，增加编译负担。

        Npm 成了集权且标准的中央函数库，若 Npm 发生问题可能引发全球灾难
    5、臃肿复杂的 node_module 设计和下载黑洞
        node_modules 里的每一个文件夹并没有标准，因此可以放置多余的版本或是任何其他档案和资讯，这导致增加了模块解析复杂度和下载时间
    6、无用的 index.js 设计
        有了 package.json 后， index.js 就变得不必要了
# 安装Deno
    shell命令
        curl -fsSL https://deno.land/x/install/install.sh | sh

    手动安装
        只需从 github.com/denoland/deno/releases 下载一个 zip 文件。它仅包含一个单独的可执行文件。在 macOS 和 Linux 上，您需要为它设置执行权限。
# Deno初体验
    deno --help
    deno run https://deno.land/std/examples/welcome.ts
    deno info(该命令用于显示有关缓存或源文件相关的信息：)
        DENO_DIR（deno缓存目录） 默认位于 $HOME/.deno 但是，用户可以通过修改 $DENO_DIR 环境变量来修改该位置

        DENO_DIR 结构
            # DIRECTORIES
            gen/: 缓存编译为JavaScript的文件
            deps/: 缓存导入的远程url的文件
            |__ http/: http方式导入的文件
            |__ https/: https方式导入的文件

            # FILES
            deno_history.txt: Deno REPL历史记录缓存
    如何强制刷新缓存
        在运行 deno run 命令时，我们需要添加 --reload 标志，来告诉 Deno 需要重新刷新指定文件：
        deno run --reload https://deno.land/std/examples/welcome.ts
    权限
        Deno 在执行时需要开发者进行对应操作的授权。
        -A, --allow-all  允许所有授权
        --allow-env   允许读取环境变量                
        --allow-hrtime 允许高精度时间测量
        --allow-net=<allow-net> 允许网络通信，支持指定域名
        --allow-plugin   允许加载插件
        --allow-read=<allow-read> 允许文件读操作，可以指定文件
        --allow-run   允许运行子进程
        --allow-write=<allow-write> 允许文件写操作，可以指定文件
# Deno特性
    1、去中心化包管理
    2、原生支持typescript和javascript
    3、默认安全
    4、支持ES模块
    5、API挂载在全局对象上
    6、顶层await支持   (await不用再捆绑在async函数中，可以直接在全局进行使用。)
    7、内置工具
        deno bundle替代babel webpack  打包命令
        deno fmt 替代prettier  格式化命令
        deno test 替代jest   测试代码
        deno lint 替代eslint等  代码校检
    8、浏览器兼容API  (与浏览器 API 保持一致, 减少大家的认知。)
        Deno 支持 Web API，尽量跟浏览器保持一致。
        它提供 window 这个全局对象，同时支持 fetch、webCrypto、worker 等 Web 标准，也支持 onload、onunload、addEventListener 等事件操作函数。
        此外，Deno 所有的异步操作，一律返回 Promise。
# Deno web应用框架
    以下现成的框架：
    
    deno-drash：A REST microframework for Deno with zero dependencies。

    deno-express：Node Express way for Deno。

    oak：A middleware framework for Deno's net server 🦕 。

    pogo：Server framework for Deno。

    servest：🌾A progressive http server for Deno🌾。
# Deno文档
    deno官网 https://deno.land/

    deno中文教程 https://denolang.cn/manual/introduction.html