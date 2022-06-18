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
          "article2",
          "article3",
          "article4",
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
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
