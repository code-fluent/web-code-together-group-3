const axios = require("axios");

axios.get("https://www.random.org").then(function(response) {
  console.log(response.data);
});
