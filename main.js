// const axios = require('axios').default;

// const options = {
//   method: 'GET',
//   url: 'https://dad-jokes.p.rapidapi.com/random/joke',
//   headers: {
//     'X-RapidAPI-Key': '8a6c0babf5msh1f116faf0b503d0p17e49djsna577b0921d0a',
//     'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const isBellow = (currentValue) => currentValue < 20;

const array1 = [1, 16, 9, 19, 10, 13];

const array2 = [1, 116, 19, 30, 22];

const isHigher = (currentValue) => currentValue > 20

console.log(array1.every(isBellow));

console.log(array2.some(isHigher));

const array3 = [
  {number: 69, stat: 'nice'},
  {number: 420, stat: 'nice'},
  {number: 100, stat: 'ok'},
  {number: 42069, stat: 'wow'},
  {number: 320, stat: 'ok'},
  {number: 1000, stat: 'ok'},
  {number: 34.5, stat: 'ok'}
];

const funnyNum = array3.filter(numbers => numbers.stat === 'wow' || numbers.stat === 'nice');
console.log(funnyNum);

const findFunny = arry3.map(item => item * 2) 
    if (item.number === 69) {
      array3.setAttribute('stat', 'nice');
      console.log(array3[6]);
    };





