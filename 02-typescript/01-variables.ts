//01-variables.ts

let nombre: string = 'Vinicio'; //Duck Typing
//nombre = 1;

let edad: number = 31;
let casado: boolean = false;
let fecha = new Date();
let sueldo: number;
sueldo = 12.4;
let marihuana: any = 2;
marihuana = "2";
marihuana = true;
marihuana = ()=> '2';

let edadMultiple: number | string  = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';