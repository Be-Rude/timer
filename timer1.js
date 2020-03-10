
const input = process.argv.splice(2);

for (const alarm of input) {
  if (isNaN(alarm)) {
    return;
  }
  if (alarm < 0) {
  } else {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm*1000);
}
};