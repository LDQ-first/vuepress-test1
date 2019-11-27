# .vuepress\theme\index.js


```js

const path = require('path')

// Theme API.  
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
        .keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
  )

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    alias () {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    },

    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '警告'
        }
      }],
      ['smooth-scroll', enableSmoothScroll]
    ]
  }
}
```

## 功能

### 提供 主题 API

通过 module.exports 暴露 匿名函数来提供 主题 API
参数 (options, ctx)
ctx 包括 themeConfig siteConfig



### 配置 algolia 搜索

> locales  
提供多语言支持的语言配置

```js
const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
        .keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia) 
        // 当前 locale 的 algolia docsearch 选项
  )
```

通过 Object.keys() 获取 siteConfig.locales && themeConfig.locales 属性，多语言对应的路径
通过 Array.some() 判断  是否有路径下的 algolia 属性有值


### 返回
alias 
根据 isAlgoliaSearch 结果 给出 @AlgoliaSearchBox 的所对应的模块

plugins
插件

[@vuepress/plugin-active-header-links](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html)
页面滚动时自动激活侧边栏链接的插件


[@vuepress/plugin-search](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-search.html)
基于 Headers 的搜索插件



[@vuepress/plugin-nprogress](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-nprogress.html)
一个基于 nprogress 的进度条插件。


[smooth-scroll](https://iamdustan.github.io/smoothscroll)
Smooth Scroll behavior polyfill

The [Scroll Behavior specification](https://developer.mozilla.org/en/docs/Web/CSS/scroll-behavior) has been introduced as an extension of the `Window` interface to allow for the developer to opt in to native smooth scrolling. To date this has only been implemented in [_Chrome_, _Firefox_ and _Opera_](https://caniuse.com/#feat=css-scroll-behavior).




[vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container)
在你的 VuePress 站点中注册新的 Markdown 容器。
[Custom Containers](https://vuepress.vuejs.org/zh/guide/markdown.html)
