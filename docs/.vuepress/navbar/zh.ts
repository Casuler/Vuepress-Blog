import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/zh/",
  "/zh/home",
  { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "工具",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "工具整合", icon: "edit", link: "工具整合" },
          "常用的前端轮子",
          "网站",
        ],
      },
      {
        text: "学习笔记",
        icon: "edit",
        children: [
          "note/人工智能导论",
          "note/JavaSE教程",
          "note/Android",
          "note/Java多线程",
        ],
      },
      {
        text: "前端",
        icon: "edit",
        children: [
          "front-end/JavaScript/JavaScript导航",
        ]
      }
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
