export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Hello World\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"这是VuePress\",\"slug\":\"这是vuepress\",\"link\":\"#这是vuepress\",\"children\":[]},{\"level\":2,\"title\":\"这是文档搭建工具\",\"slug\":\"这是文档搭建工具\",\"link\":\"#这是文档搭建工具\",\"children\":[]},{\"level\":2,\"title\":\"测试测试\",\"slug\":\"测试测试\",\"link\":\"#测试测试\",\"children\":[]}],\"git\":{\"updatedTime\":1662953861000,\"contributors\":[{\"name\":\"徐静波\",\"email\":\"897884964@qq.com\",\"commits\":4}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
