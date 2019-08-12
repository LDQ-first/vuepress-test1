---
sidebar: auto
# sidebarDepth: 0
editLink: false
pageClass: custom-page-class
---


# Guide

## h2

### h3

#### h4


![logo](~@public/logo-chrome.png)

![logo](vuepresstest/~@public/logo-chrome.png)


<img src="~@public/logo-chrome.png" alt="logo">

<img src="vuepresstest/~@public/logo-chrome.png" alt="logo">

<img :src="$withBase('~@public/logo-chrome.png')" alt="logo">


<<< @/docs/.vuepress/snippet.js{2}


{{ 3 * 5 }}

{{ 3^5 }}


<span v-for="i in 3">{{ i }} </span>


{{ $page }}

<pre class="language-js">
{{ $page }}
</pre>

::: v-pre
`{{ This will be displayed as-is }}`
:::

::: v-pre
`<span v-for="i in 3">{{ i }} </span>`
:::         

::: v-pre
{{ This will be displayed as-is }}
:::

::: v-pre
<span v-for="i in 3">{{ i }} </span>
:::                

<Foo/>
<a-b/>

<style lang="scss">
 .title {
    font-size: 20px;
}
</style>