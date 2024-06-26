// const crypto = require('crypto');
const { generateKeyPairSync } = require('node:crypto');
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});
// console.log(publicKey, privateKey)
module.exports = { publicKey, privateKey }