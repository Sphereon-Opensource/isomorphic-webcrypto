const crypto = require('../src/index');

function includes(haystack, needle) {
  return haystack.indexOf(needle) > -1;
}

const hash = crypto.createHash('SHA-256').update('hello').digest();
console.log(hash.toString('hex'));

require('webcrypto-test-suite')({
  crypto,
  shouldSkip: function(spec) {
    if (includes(spec,'PBKDF2') && includes(spec,'deriveKey')) return true;
  }
});
