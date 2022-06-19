import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    "",
    "home",
    "slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: [
        {
          text: "导航",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["常用的前端轮子", "网站", "工具整合"],
        },
        {
          text: "前端",
          icon: "note",
          prefix: "front-end/",
          children: [
            {
              text: "JavaScript",
              icon: "note",
              collapsable: true,
              prefix: "JavaScript/",
              children: ["33个非常实用的JavaScript一行代码", "new命令原理", "ES5面向对象", "ES6面向对象", "多种数组去重性能对比", "比typeof运算符更准确的类型判断", "JS随机打乱数组", "判断是否为移动端浏览器", "将一维数组按指定长度转为二维数组", "防抖与节流函数", "JS获取和修改url参数"],
            },
            {
              text: "Vue",
              icon: "note",
              collapsable: true,
              prefix: "Vue/",
              children: ["基础/MVVM模式", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
  ],
});
