const Benchmark = require('benchmark');
const { bubbleSort , quickSort } = require('./Sort');

const numbers = [];
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) - i);
}
console.log(numbers)

const suite = new Benchmark.Suite;

suite
  .add('bubbleSort', function() {
    const testArray = [...numbers];
    bubbleSort(testArray);
  })
  .add('quicksort', function() {
    const testArray = [...numbers];
    console.log(quickSort(testArray));
  })
  .on('complete', function() {
    // loop over and print each result
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();