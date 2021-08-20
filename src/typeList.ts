/* eslint-disable @typescript-eslint/no-unused-vars */

// TypeScriptの基本の型

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 型の配列？
let tuple: [number, string] = [0, "B"];

// any なんでもござれ型。多用は好ましくない
let any1: any = false;

// void 何も返さない関数
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
// obj型は以下の様に宣言しておくことで、入ってきた値の型が指定の型と異なるときに、
// エラーを返してくれるので、管理がしやすくなる。
let obj2: { id: number; name: string } = { id: 0, name: 1 };
// ↑nameがstring方を指定している中で、name: 1となっているのでエラーが返されている
