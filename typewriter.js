const sentence = "hello there from lighthouse labs";
const loopy = function(param) {
  for (let i = 0; i < param.length; i++) {
    setTimeout(() => {
      process.stdout.write(param[i]);
    }, i * 50);
  }
  setTimeout(() => process.stdout.write("\n"), param.length * 50);
};
loopy(sentence);