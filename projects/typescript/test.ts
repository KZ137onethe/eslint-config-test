interface Foo {
  foo: ((s: string) => void) & ((n: number) => void) & ((sn: string | number) => void);
  bar: () => void;
}

// @ts-ignore: 这个x没有使用
const x: string[] = ["a", "b"];
const _y: readonly string[] = ["a", "b"];

let a = "a12";

try {
  // @ts-expect-error: b不存在
  let _a_1 = a + b;
}
catch (e) {

}

let _xx = "abc" as const;

type NumAndStr = number | string;
interface O1 {
  a: string;
  b: number;
}

const NUM_1: NumAndStr = 1;

console.log(NUM_1);
export const func = (value: any): number => value + 1;

export function test(a: string, b: string): string;
export function test(a: number): number;
export function test(a: unknown) {
  return a;
}

function add(this: void, x2: number, x3: number, x4: number) {
  return x2 + x3 + x4;
}

const A_B = 2;
console.warn(A_B);
const COUNT = 2;
console.log(COUNT);
