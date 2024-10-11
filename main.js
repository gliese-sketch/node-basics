import Cryptr from "cryptr";

console.clear();

const cryptObj = new Cryptr("12345");

const message = "Hello class";
const encrypted = cryptObj.encrypt(message);

console.log(encrypted);

const txt = `75a87a1a9cbb5239af992542271b3811f8314b941ada77f23228d80d23327a0c3aaf0d5fbc85096e71e7fbd9ec91a51d7c9aef89ba1abb89fbcd77ba38bf94c9a1469dad403ba25bbc8ff14f57515fa467e21db3392d452100206e045a09b664567cdf52e7a2a999087153`;

console.log(cryptObj.decrypt(txt));
