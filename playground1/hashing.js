const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$ta0mzaKBFU25QMUT6vMdreVeQp1IZ.ML/IvcpBNm1ItIxy.2Gub1e';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});


// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var deco = jwt.verify(token, '123abc');
// console.log(`Decoded:`, deco);



// var message = 'I am user number 456982';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data is gucci fam');
// } else {
//   console.log("Ya'll ninjas trippin'");
// }
