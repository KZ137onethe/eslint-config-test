import antfu from "@antfu/eslint-config";
import { typescript } from "./config/index.js";

export default antfu(
  {
    // 项目的类型
    type: "app",
    // 忽略检查的文件
    ignores: [],
    // 是否解析 .gitignore 来忽略文件
    gitignore: true,
    // 定制规则，参考：https://eslint.style/rules?
    stylistic: {
      indent: 2, // 缩进为 2
      quotes: "double", // 使用双引号
      semi: true, // 需要分号
      "max-len": {
        code: 100,
        tabWidth: 2,
      },
    },
    javascript: false,
    ...typescript("on"),
  },
  {
    rules: {
      "prefer-const": "warn",
      "no-unused-vars": "off",
      // 不允许使用 console，会报 warn 警告，但console.warn和console.error可以使用
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
);
