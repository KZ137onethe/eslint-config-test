/*
	eslint typescript 规则
	不使用的插件（明确禁用）
		1. no-unused-vars
		2. consistent-return
		3. member-ordering
		4. no-dupe-class-members
		5. no-invalid-this
  没有启用的插件（没有配置该规则）
		1. no-non-null-assertion
		2. no-restricted-imports
		3. no-restricted-types
	废弃的插件
		1. no-empty-interface
		2. no-loss-of-precision
		3. no-type-alias
*/

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
          // 不允许意外的使用空对象
          "ts/no-empty-object-type": [
            "error",
            {
              // 允许从单个基本接口扩展出来的空接口
              allowInterfaces: "with-single-extends",
              // 不允许空对象字面量
              allowObjectTypes: "never",
              // 允许下面符合正则表达式的规则的名称使用空对象 (暂未设置)
              allowWithName: "",
            },
          ],
          // 不允许 any 类型
          "ts/no-explicit-any": [
            "error",
            {
              // 不能将 any 类型修复成 unknown 类型
              fixToUnknown: false,
              // 不忽略 剩余参数数组
              ignoreRestArgs: false,
            },
          ],
          // 不允许额外的非空断言
          "ts/no-extra-non-null-assertion": "error",
          // 不允许类用作命名空间
          "ts/no-extraneous-class": [
            "error",
            {
              allowConstructorOnly: false,
              allowEmpty: false,
              allowStaticOnly: false,
              allowWithDecorator: false,
            },
          ],
          // 对 Promise 语句做处理
          "ts/no-floating-promises": [
            "error",
            {
              checkThenables: false,
              // 忽略空表达式。
              ignoreVoid: true,
              // 忽略异步IIFE（立即调用的函数表达式）
              ignoreIIFE: true,
              //
              allowForKnownSafePromises: [],
              //
              allowForKnownSafeCalls: [],
            },
          ],
          // 禁止使用 for ... in ... 循环迭代数组
          "ts/no-for-in-array": "error",
          // 当导入只有带内联类型限定符的说明符时，强制使用顶级导入类型限定符。import { type A } from "xxx" => import type { A } from "xxx"
          "ts/no-import-type-side-effects": "error",
          // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明。(因为 ts 可以推断出来，显示类型声明是多余的)
          "ts/no-inferrable-types": [
            "error",
            {
              // 忽略函数参数
              ignoreParameters: true,
              // 忽略属性
              ignoreProperties: true,
            },
          ],
          // 不允许泛型或返回类型之外的 void 类型
          "ts/no-invalid-void-type": [
            "error",
            {
              allowInGenericTypeArguments: true,
              allowAsThisParameter: true,
            },
          ],
          // 除非用于丢弃值，否则不允许使用void运算符。
          "ts/no-meaningless-void-operator": "error",
          // 强制 new操作符 和 constructor方法的有效定义
          "ts/no-misused-new": "error",
          // 不允许在不合适用 Promise 的地方使用 Promise
          "ts/no-misused-promises": [
            "error",
            {
              // 不允许在条件语句中使用 Promise
              checksConditionals: true,
              // 不检查 函数的void 返回
              checksVoidReturn: false,
              // 检查 ... 运算符解构 Promise
              checksSpreads: true,
            },
          ],
          // 不误用 ... 运算符
          "ts/no-misused-spread": "error",
          // 不混合使用 数字枚举 和 字符串枚举
          "ts/no-mixed-enums": "error",
          // 不使用 Typescript 命名空间
          "ts/no-namespace": [
            "error",
            {
              // 不允许使用自定义TypeScript命名空间进行声明
              allowDeclarations: false,
              // 可以在 .d.ts 中使用自定义命名空间
              allowDefinitionFiles: true,
            },
          ],
          // 不允许在 ?? 左侧使用非空断言(!)
          "ts/no-non-null-asserted-nullish-coalescing": "error",
          // 不允许在可选链表达式后使用非空断言。
          "ts/no-non-null-asserted-optional-chain": "error",
          // 不允许 联合类型 和 交叉类型 啥也不做或者 覆盖类型信息
          "ts/no-redundant-type-constituents": "error",
          // 不允许 使用 require
          "ts/no-require-imports": "error",
          // 不允许 混淆 this
          "ts/no-this-alias": [
            "error",
            {
              // 是否允许解构 this
              allowDestructuring: true,
              // 允许 this 能被赋值的名称，有需要的时候很有用，但默认不配置
              allowedNames: [],
            },
          ],
          // 不允许 对布尔值和布尔值字面量 进行不必要的比较
          "ts/no-unnecessary-boolean-literal-compare": [
            "error",
            {
              // 允许 null 和 true 进行比较
              allowComparingNullableBooleansToTrue: true,
              // 允许 null 和 false 进行比较
              allowComparingNullableBooleansToFalse: true,
            },
          ],
          // 不允许类型总是 类似于true 和 类似于false 的条件语句
          "ts/no-unnecessary-condition": [
            "error",
            {
              // 可以允许 true, false, 0, 1 这样的循环条件语句
              allowConstantLoopConditions: "only-allowed-literals",
              // 不检查类型谓词函数的断言参数是否存在不必要的条件
              checkTypePredicates: false,
            },
          ],
          // 不允许对构造函数属性参数进行不必要的赋值。
          "ts/no-unnecessary-parameter-property-assignment": "error",
          // 不允许使用 不必要的 命名空间限定词，包括：enum 和 namespace
          "ts/no-unnecessary-qualifier": "error",
          // 不允许使用 不必要的 模板表达式
          "ts/no-unnecessary-template-expression": "error",
          // 不允许使用等于默认值的类型参数。
          "ts/no-unnecessary-type-arguments": "error",
          // 不允许没有必要的类型断言
          "ts/no-unnecessary-type-assertion": [
            "error",
            {
              // 不检查字面常量断言
              checkLiteralConstAssertions: false,
              // 要忽略检查的类型名称列表
              typesToIgnore: [],
            },
          ],
          // 不允许对泛型类型施加不必要的约束
          "ts/no-unnecessary-type-constraint": "error",
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
        // 不允许空函数
        "no-empty-function": "off",
        "ts/no-empty-function": [
          "error",
          {
            // 下面函数为空时允许的：私有构造函数，装饰器函数，受保护的构造函数，子类覆盖父类的方法
            allow: [
              "private-constructors",
              "protected-constructors",
              "decoratedFunctions",
              "overrideMethods",
            ],
          },
        ],
        // 不允许使用类似于 eval 的函数
        "no-implied-eval": "off",
        "ts/no-implied-eval": "error",
        // 不允许在循环语句中包含不安全引用的函数声明
        "no-loop-func": "off",
        "ts/no-loop-func": "error",
        // 不允许使用魔幻数字
        "no-magic-numbers": "off",
        "ts/no-magic-numbers": [
          "error",
          {
            // 枚举是可以使用数字的
            ignoreEnums: true,
            // 数字类型是可以使用的
            ignoreNumericLiteralTypes: true,
            // 忽略只读的类属性（数字）
            ignoreReadonlyClassProperties: true,
            // 不允许使用索引类型
            ignoreTypeIndexes: false,
          },
        ],
        // 不允许变量重复声明
        "no-redeclare": "off",
        "ts/no-redeclare": [
          "error",
          {
            // 忽略某些TypeScript声明类型之间的声明合并
            ignoreDeclarationMerge: true,
          },
        ],
        // 不允许变量声明，已经在外部作用域中声明的变量。
        "no-shadow": "off",
        "ts/no-shadow": [
          "error",
          {
            // 包含 type 和 function
            hoist: "functions-and-types",
            // 忽略与变量同名的类型
            ignoreTypeValueShadow: true,
            // 忽略与变量同名的函数参数
            ignoreFunctionTypeParameterNameValueShadow: true,
          },
        ],
      },
    };
  }
}
