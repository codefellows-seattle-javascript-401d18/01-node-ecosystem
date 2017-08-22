'use strict';

let theUser = module.exports = {};

theUser.hello = function(a){
  if (a) {
    return ('Hello ' + a);
  } else {
    return null;
  }
};
