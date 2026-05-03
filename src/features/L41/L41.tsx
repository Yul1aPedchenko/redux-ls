const L41 = () => {
  // let any: any;
  // any = 10;
  // any = "Something";

  // const list: number[] = [1, 2, 3];
  // const ob: { name: string; age: number } = {
  //   name: "alex",
  //   age: 12,
  // };

  // const objarray: { name?: string; age: number }[] = [{ age: 16 }, { name: "yul", age: 16 }];

  // const some: unknown = 10;

  // //? use only that type of data and that quantity of elements, not more, not less
  // let fixed: [string, number];
  // fixed = ['Text', 10];

  // //? enum
  // enum Role {
  //   ADMIN,
  //   USER
  // }

  // const person = {
  //   role: Role.ADMIN,
  // }

  // if (person.role === Role.ADMIN) {
  //   console.log('Role:', person.role)
  // }

  // let union: string | number;

  //* 1
  let age: number = 50;
  let name: string = "Max";
  let toggle: boolean = true;
  let empty: null = null;
  let notInitialize: undefined = undefined;
  let callback = (a: number) => {
    return 100 + a;
  };

  //*2
  let anything: any = -20;
  anything = "Text";
  anything = {};

  //*3
  let some: unknown;
  some = "Text";

  //* 4
  let str: string | unknown;

  str = some;

  //* 5
  let person: [string, number] = ["Max", 21];

  //* 6
  enum Status {
    LOADING,
    READY,
  }

  //*7
  let numOrStr: number | string;

  //*8
  function showMessage(message: string): void {
    console.log(message);
  }

  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }

  function customError(): void {
    throw new Error("Error");
  }
  return <></>;
};
