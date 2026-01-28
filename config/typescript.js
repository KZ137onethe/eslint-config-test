export function typescript(status = "default") {
  if (status === "default") return {};
  if (status === "off") {
    return {
      typescript: false,
    };
  }
  if (status === "on") {
    return {
      typescript: {
        // 覆盖选项
        overrides: {
          // 插件来源于 https://github.com/typescript-eslint/typescript-eslint
          // 具体的插件可以看：https://typescript-eslint.io/rules
          "ts/adjacent-overload-signatures": "error",
          "ts/array-type": ["error", { default: "array" }],
          "ts/ban-ts-comment": [
            "error",
            {
              minimumDescriptionLength: 5,
              "ts-check": true,
              "ts-expect-error": "allow-with-description",
              "ts-ignore": "allow-with-description",
              "ts-nocheck": true,
            },
          ],
          "ts/class-literal-property-style": ["error", "fields"],

          "ts/consistent-generic-constructors": ["error", "type-annotation"],
          "ts/consistent-indexed-object-style": ["error", "record"],
          "ts/consistent-type-assertions": [
            "error",
            {
              assertionStyle: "as",
            },
          ],
          "ts/consistent-type-definitions": ["error", "interface"],
          "ts/consistent-type-exports": [
            "error",
            {
              fixMixedExportsWithInlineTypeSpecifier: false,
            },
          ],
          "ts/consistent-type-imports": [
            "error",
            {
              prefer: "type-imports",
              fixStyle: "separate-type-imports",
              disallowTypeAnnotations: false,
            },
          ],
          "ts/explicit-function-return-type": [
            "error",
            {
              allowExpressions: false,
              allowTypedFunctionExpressions: false,
              allowHigherOrderFunctions: false,
              allowDirectConstAssertionInArrowFunctions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
              allowFunctionsWithoutTypeParameters: true,
              allowedNames: ["ignoredFunctionName", "ignoredMethodName"],
            },
          ],
          "ts/explicit-member-accessibility": [
            "error",
            {
              accessibility: "explicit",
              overrides: {
                constructors: "no-public",
                properties: "explicit",
                parameterProperties: "no-public",
                accessors: "no-public",
              },
            },
          ],
          "ts/explicit-module-boundary-types": [
            "error",
            {
              allowArgumentsExplicitlyTypedAsAny: true,
              allowDirectConstAssertionInArrowFunctions: true,
              allowHigherOrderFunctions: true,
              allowTypedFunctionExpressions: true,
              allowOverloadFunctions: true,
            },
          ],
          "ts/method-signature-style": ["error", "property"],
          "ts/naming-convention": [
            "error",
            // 强制变量，类属性，对象属性 格式为 "snake_case", "camelCase"
            {
              format: ["snake_case", "camelCase"],
              selector: ["variable", "classProperty", "objectLiteralProperty"],
            },
            // 强制函数，类方法，对象方法 格式为 "camelCase"
            {
              format: ["camelCase"],
              selector: ["function", "classMethod", "objectLiteralMethod"],
            },
            // 强制枚举名称，枚举成员，接口 格式为 "StrictPascalCase"
            {
              format: ["StrictPascalCase"],
              selector: ["enum", "enumMember", "interface"],
            },
            // 强制 ESM 的 import 导入变量 格式为 "StrictPascalCase" "strictCamelCase" "camelCase"
            {
              format: ["StrictPascalCase", "strictCamelCase", "camelCase"],
              selector: ["import"],
            },
            // 强制 所有的常量变量 格式为 "UPPER_CASE" "snake_case"
            {
              format: ["UPPER_CASE", "snake_case"],
              modifiers: ["const"],
              selector: ["variable"],
            },
          ],
          // 不允许对数组值使用delete运算符。
          "ts/no-array-delete": "error",
          // 要求仅对在字符串化时提供有用信息的对象调用.toString（）和.toLocaleString（）。
          "ts/no-base-to-string": [
            "error",
            {
              // 检查未知类型
              checkUnknown: true,
            },
          ],
          // 不允许在可能造成混淆的位置使用非空断言。
          "ts/no-confusing-non-null-assertion": "error",
          // 要求void类型的表达式出现在语句位置。（默认禁止接收一个没有返回的函数或者方法）
          "ts/no-confusing-void-expression": [
            "error",
            {
              // 忽略箭头函数
              ignoreArrowShorthand: true,
              // 忽略以void运算符开头的返回
              ignoreVoidOperator: true,
              // 不忽略来自具有显式void返回类型的函数和具有上下文void返回类型函数的返回
              ignoreVoidReturningFunctions: false,
            },
          ],
          // 不允许使用 JSDoc 标记为 @deprecated 的代码（弃用代码）
          "ts/no-deprecated": "error",
          // 不允许重复的枚举值
          "ts/no-duplicate-enum-values": "error",
          // 不允许并集或交集类型的重复成分。
          "ts/no-duplicate-type-constituents": [
            "error",
            {
              // 不忽略交集
              ignoreIntersections: false,
              // 忽略并集
              ignoreUnions: true,
            },
          ],
          // 不允许使用 delete 删除可以计算的操作符上的键
          "ts/no-dynamic-delete": "error",
        },
        // 传递给typescript配置来启用类型感知规则
        tsconfigPath: "tsconfig.json",
      },
      rules: {
        //
        "class-methods-use-this": "off",
        "ts/class-methods-use-this": [
          "error",
          { ignoreOverrideMethods: true, ignoreClassesThatImplementAnInterface: "public-fields" },
        ],
        // "ts/consistent-return" 忽略，被tsconfig.json中的 noImplicitReturns 所替代
        "ts/consistent-return": "off",
        // 强制将默认参数设置为最后一个
        "default-param-last": "off",
        "ts/default-param-last": "error",
        // 尽可能使用点运算符
        "dot-notation": "off",
        "ts/dot-notation": ["error"],
        // 在变量声明时需要初始化
        "init-declarations": "off",
        "ts/init-declarations": ["error", "always"],
        // 在函数中参数限制不超过n个，在下面限制最多为3个，this会被记为参数，this被推断为void时，不会记为参数
        "max-params": "off",
        "ts/max-params": ["error", { countVoidThis: false, max: 3 }],
        // 不允许不标识类型的数组构造函数
        "no-array-constructor": "off",
        "ts/no-array-constructor": "error",
        // 不允许重复的类成员(ts的方法重载)
        "no-dupe-class-members": "off",
        "ts/no-dupe-class-members": "error",
      },
    };
  }
}
