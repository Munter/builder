var Builder = require('../index');

var builder = new Builder('test/fixtures/test-tree');

builder.loadConfigSync('test/fixtures/conditional-tree.config.js');

suite('Conditional Builds', function() {  
  test('Package environment traces all conditional variations', function() {
    return builder.trace('pkg/env-condition')
    .then(function(trace) {
      console.log(Object.keys(trace));
    });
  });
});
