import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (message) => {
  console.log(message + "xxxxx");
});

rl.once("close", () => {
  process.exit(0);
});
