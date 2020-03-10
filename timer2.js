
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

stdin.on('data', (key) => {
  
if (key === '\u0003') {
  process.exit();
}
if (key === "b") {
  process.stdout.write('\x07');
}
if (key > 0 && key < 10) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, key*1000);
};
});