# eslint 配置测试

## 介绍

本项目使用的是 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 库来衍生出来的eslint配置，主要是个人用于不同技术栈的自定义的代码规范。

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## 技术栈

### Typescript

**Typescript 配置项** 来源于 [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) 这个开源项目，具体规则可以参考 https://typescript-eslint.io/rules/

typescript-eslint 有一个[训练场](https://typescript-eslint.io/play/)，可以在线理解规则的用法

项目中规则的配置可以从 `eslint.config.mjs` -> `/config/typescript.js` 中看到

> 🔁规则配置会随个人开发的习惯而动态变化
>
> ❌`npx eslint`报错可以追踪到 [issues#690](https://github.com/antfu/eslint-config/issues/690)
