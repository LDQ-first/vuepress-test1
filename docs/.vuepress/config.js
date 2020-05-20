const webpack = require('webpack')
const path = require('path')

const genNextSiderbarConfig = (title) => [
  {
    title,
    collapsable: false,
    children: [
      '',
      'page-a',
      ['page-b', 'Explicit link text']
    ]
  }
]

console.log(`process.cwd() + './docs/.vuepress/public'`, 
             process.cwd() + './docs/.vuepress/public')
console.log(`path.join(process.cwd() , 'docs/.vuepress/public')`, 
             path.join(process.cwd() , 'docs/.vuepress/public'))

module.exports = {
    /* 基本配置 */
    title: 'Hello VuePress',
    description: 'Just playing around!',
    base: '/vuepress-test1/',
    head: [
        ['link', {
            rel: 'icon',
            href: './logo-chrome.png'
        }]
    ],
    host: 'localhost',
    port: 8080,
    dest: '.vuepress/dist', // 指定 vuepress build 的输出目录。
    ga: undefined,   // 提供一个 Google Analytics ID 来使 GA 生效。
    /**
     * 如果设置成 true，VuePress 将会自动生成并且注册一个 service worker，
     * 它缓存了那些已访问过的页面的内容，用于离线访问（仅在生产环境生效）。
     * 
     * 只有您能够使用 SSL 部署您的站点时才能启用此功能，
     * 因为 service worker 只能在 HTTPs 的 URL 下注册。
     * 
      */
    serviceWorker: false,
    /**
     *  提供多语言支持的语言配置。
     *  
     *  文件结构: 
     *  docs
     *  ├─ README.md
     *  ├─ foo.md
     *  ├─ nested
     *  │  └─ README.md
     *  └─ zh
     *  ├─ README.md
     *  ├─ foo.md
     *  └─ nested
     *     └─ README.md    
     * 
     *  locales: {
     *    // 键名是该语言所属的子路径
     *    // 作为特例，默认语言可以使用 '/' 作为其路径。
     *    '/': {
     *      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
     *      title: 'VuePress',
     *      description: 'Vue-powered Static Site Generator'
     *    },
     *    '/zh/': {
     *      lang: 'zh-CN',
     *      title: 'VuePress',
     *      description: 'Vue 驱动的静态网站生成器'
     *    }
     *  } 
     * 
     * 
      */
    locales:  undefined,
    /**
     * 一个函数，用来控制对于哪些文件，
     * 是需要生成 <link rel="prefetch"> 资源提示的。
     * 
     * 
     * 
    */
    shouldPrefetch: () => true,
    /* 主题 */
    /**
     * 指定自定义主题
     * 
     * 当值为 "foo" 时，VuePress 将会尝试去加载位于 
     * node_modules/vuepress-theme-foo/Layout.vue 的主题组件
     *
    */
    theme: undefined, 
    /**
     * 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
     * 
     */
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { 
          text: 'Guide', 
          items: [
            { text: 'guide', link:'/guide/'},
            { text: '1', link:'/guide/1'}
          ]
         },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Japanese', link: '/language/japanese' },
            { text: 'English', 
              items: [ 
                { text: 'UK', link: '/language/uk' },
                { text: 'US', link: '/language/us' }
               ] 
            }
          ]
        }
      ],
      // navbar: false,  // 禁用所有页面的导航栏  
      /* 侧边栏 */
      /* sidebar: {
        '/next/': genNextSiderbarConfig('next'),
      }, */
      sidebar: 'auto',
      
      /* 显示所有页面的标题链接 */
      displayAllHeaders: true,   // 默认值：false
      /* 活动的标题链接 */
      activeHeaderLinks: false,  // 默认值：true
      /**
       * 内置搜索 
       * 
       * 内置搜索只会为页面的标题、h2 和 h3 构建搜索索引
       * 
       * */
      search: true,    // 默认的搜索框
      searchMaxSuggestions: 10,  // 搜索结果数量
      /**
       * Algolia 搜索 
       * 
       * 全文搜索
       * 
       * 注意
       * 不同于开箱即用的 内置搜索，
       * Algolia 搜索 需要你在使用之前将你的网站提交给它们用于创建索引。
       * 
       * */
      algolia: {
       /*  apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>' */
      },
      /**
       *  最后更新时间 
       * 
       * 使用须知
       *  由于 lastUpdated 是基于 git 的, 
       * 所以你只能在一个基于 git 的项目中启用它。
       * 
       * */
      lastUpdated: 'Last Updated', 
      /**
       * Service Worker
       * 
       * 提示
       * 请不要将本选项与 Config > serviceWorker 混淆，
       * Config > serviceWorker 是网站级别的配置，
       * 而本选项是主题级别的配置
       * 
      */
      /**
      * 刷新内容的弹窗 
      * 
      *  开启 themeConfig.serviceWorker.updatePopup 选项，
      * 将开启一个能够刷新内容的弹窗。
      * 当网站更新（即 Service Worker 更新）时，
      * 它会提供一个 refresh 按钮，允许用户立刻刷新内容。
      * 
      * 提示
      * 如果没有 refresh 按钮，
      * 新的 service worker 将在所有的 clients 关闭后才会处于活动状态。
      * 这意味着访问者在关闭你网站的所有标签之前将无法看到新内容。
      * 但是，refresh 按钮可以立即激活新的 Service Worker。
      * 
      * 
      */
      serviceWorker: {
        // updatePopup: true,  // Boolean | Object, 默认值是 undefined 
        // 如果设置为 true, 默认的文本配置将是: 
        updatePopup: { 
           message: "New content is available.", 
           buttonText: "Refresh" 
        }
      },
      /**
       * Git 仓库和编辑链接
      */
     // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'LDQ-first/vuepress-test1',
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
      repoLabel: '查看源码',

      // 以下为可选的编辑链接选项
      // 假如你的文档仓库和项目本身不在一个仓库：
      docsRepo: 'LDQ-first/vuepress-test1',
      // 假如文档不是放在仓库的根目录下：
      docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      docsBranch: 'master',
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
      // 默认为 "Edit this page"
      editLinkText: '帮助我们改善此页面！'
    },
    /* Markdown */
    markdown: {
        lineNumbers: true,  // 代码块显示行号
        /**
         *  markdown-it-anchor 的选项
         *  
         *  permalink 永久链接
         *  
        */
        anchor: {
            permalink: true,   // Whether to add permalinks next to titles.
            permalinkBefore: true, // Place the permalink before the title.
            permalinkSymbol: '#' // The symbol in the permalink anchor.
        },
        externalLinks: {
            target: '_blank',    // 在新窗口中打开一个该外部链接。
            /**
             * noreferrer 标记在单击链接时隐藏引用者信息。
             * 
             * rel =“noopener”一般都是搭配 target="_blank"同时使用，
             * 因为 target="_blank" 也是一个安全漏洞：
             * 新的页面可以通过 window.opener 访问您的窗口对象，
             * 并且它可以使用 window.opener.location = newURL 
             * 将您的页面导航至不同的网址。
             * 新页面将与您的页面在同一个进程上运行，
             * 如果新页面正在执行开销极大的 JavaScript，
             * 您的页面性能可能会受影响。
             * 
             * 
             * noopener 和 noreferrer 标签是阻止漏洞利用的主动权，
             * 该漏洞利用在新标签中打开的链接。
             * 
             * 
              */
            rel: 'noopener noreferrer'
        },
        /**
         * markdown-it-table-of-contents 的选项
         * 
         * 
          */
        toc: {
            includeLevel: [2, 3]  // Headings levels to use (2 for h2:s etc)
        },
        /**
         * 一个用于修改当前的 markdown-it 实例的默认配置，
         * 或者应用额外的插件的函数
         * 
         *   config: md => {
         *       md.set({ breaks: true })
         *       md.use(require('markdown-it-xxx'))
         *   }
         * 
          */
        config: undefined
    },
    /* 构建流程 */
    /**
     * postcss-loader 的选项，
     * 请注意，指定这个值，
     * 将会覆盖内置的 autoprefixer，
     * 所以需要自己将它加进去
     * 
        */
    postcss: {
        plugins: [require('autoprefixer')]
    },
    scss: {}, //加载 *.scss 文件的 sass-loader 的选项
    sass: { indentedSyntax: true }, // 加载 *.sass 文件的 sass-loader 的选项
    //sass: {}, // 加载 *.sass 文件的 sass-loader 的选项
    less: {}, // less-loader 的选项
    /**
     * 用于修改内部的 Webpack 配置。
     * 如果给定一个对象，那么它将会被 webpack-merge 合并到最终的配置中，
     * 如果给定一个函数，它将会接受 config 作为第一个参数，
     * 以及 isServer 作为第二个参数，
     * 你可以直接更改 config，也可以返回一个待合并的对象。
     * 
     * configureWebpack: (config, isServer) => {
     *    if (!isServer) {
     *      // 修改客户端的 webpack 配置
     *    }
     *  }
    */
    /* configureWebpack: {
      resolve: {
        alias: {
         '@public': path.join(process.cwd() , 'docs/.vuepress/public')
        }
      }
    }, */
    configureWebpack: (config, isServer) => {
      /* plugins: [
          new webpack.HotModuleReplacementPlugin()
      ] */
      /* config.resolve.alias = Object.assign({}, config.resolve.alias, {
           '@public':  path.join(process.cwd() , 'docs/.vuepress/public')
       }) */
      
      return {
          resolve: {
            alias: {
              '@public': path.join(process.cwd() , 'docs/.vuepress/public')
            }
          }
          
      }
      },
    /**
     * 通过 webpack-chain 来修改内部的 Webpack 配置
     * 
     * chainWebpack: (config, isServer) => {
     *    // config 是 ChainableConfig 的一个实例
     *  }
    */
    chainWebpack: undefined,
    /* 浏览器兼容性 */
    /**
     * 如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 true，
     * 这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，
     * 同时会带来更快的构建速度和更小的文件体积。
     * 
      */
    evergreen: false
}





