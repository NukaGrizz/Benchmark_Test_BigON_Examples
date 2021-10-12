const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite
  .add('random test', function() {
    // benchmark generating a random number
    Math.floor(Math.random() * 10) + 1;
  })
  .on('complete', function() {
    console.log(this);
  })
  .run();