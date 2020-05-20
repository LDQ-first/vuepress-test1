---
lang: zh-cn
home: true
heroImage: logo-chrome.png
actionText: 快速上手 →
actionLink: /next/
# navbar: false  # 禁用某个指定页面的导航栏
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2019-present LDQ-first
---



# Hello VuePress!
123

![logo](logo-chrome.png)

![logo](vuepresstest/logo-chrome.png)


<img src="logo-chrome.png" alt="logo">

<img src="vuepresstest/logo-chrome.png" alt="logo">

<img :src="$withBase('logo-chrome.png')" alt="logo">

<<< @/docs/.vuepress/snippet.js{2}

test
