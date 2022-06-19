import { defineUserConfig } from "vuepress";
import {searchPlugin} from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "四宮 かぐや",
      description: "God rewards the diligent",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "四宮 かぐや",
      description: "天道酬勤",
    },
  },
  // extendsMarkdown:(md)=>{
  //   md.use(require("markdown-it-mathjax3"));
  //   md.use(require("markdown-it-texmath"));
  // },
  plugins:[
    searchPlugin({
      locales:{
        '/':{
          placeholder: 'Search',
        },
        'zh':{
          placeholder: '搜索',
        },
      },
      hotKeys:['ctrl','k'],
      maxSuggestions: 10,   
    }),
  ],

  theme,
});
