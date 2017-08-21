'use-strict';

module.exports = (str) => {
  if (typeof str === 'string') {
    return 'hello ' + str + '.';
  } else {
    console.log('You must input only letters.');
  }

};
