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
      // 缩进为 2
      indent: 2,
      // 使用双引号
      quotes: "double",
      // 需要分号
      semi: true,
    },
    javascript: undefined,
    ...typescript("on"),
  },
  {
    rules: {
      "style/quote-props": ["error", "as-needed"],
      "style/max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2,
        },
      ],
      "prefer-const": "warn",
      // 对没有使用的变量，会报 warn 警告
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "warn",
      // 不允许使用 console，会报 warn 警告，但console.warn和console.error可以使用
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
);
