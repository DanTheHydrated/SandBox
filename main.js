const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': '8a6c0babf5msh1f116faf0b503d0p17e49djsna577b0921d0a',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
