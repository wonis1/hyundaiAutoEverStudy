let input = require("fs").readFileSync(0, "utf8").trim();
if (input.length === 0) {
  process.exit(0);
}

let tokens = input.split(/\s+/);
let n = Number(tokens[0]);
let lossMer = tokens.slice(1, 1 + n).map((v) => BigInt(v));

lossMer.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let merSum = 0n;
let len = lossMer.length;

if (len % 2 === 1) {
  merSum = lossMer[len - 1];
  len--;
}

for (let i = 0; i < len / 2; i++) {
  let lowLoss = lossMer[i];
  let highLoss = lossMer[len - 1 - i];
  let pairSum = lowLoss + highLoss;
  if (pairSum > merSum) {
    merSum = pairSum;
  }
}

console.log(merSum.toString());
