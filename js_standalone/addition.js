import { readFileSync } from "fs";

var input = readFileSync(0, "utf8").trim().split(/\s+/);

var a = Number(input[0]);
var b = Number(input[1]);

console.log("Sum =", a + b);
