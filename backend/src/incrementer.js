let value = 1;

function increment() {
  console.log(`${process.platform} : ${value}`)
  value += 1;
}

module.exports = { increment }