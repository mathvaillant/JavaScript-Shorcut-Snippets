document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('http://api.icndb.com/jokes/random/3')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      let output = '';

      data.value.forEach((joke) => {
        output += `
          <li>${joke.joke}</li>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
    });
}