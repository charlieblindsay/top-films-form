const button = document.getElementById('film-form-submit-button');

button.addEventListener('click', () => {
  let filmFormResponseObject = Array.from(document.getElementsByClassName("checkbox")).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.checked }),
    {}
  );

  filmFormResponseObject['username'] = document.getElementById('username').value;
  console.log(filmFormResponseObject['username']);

  axios({
    method: 'patch',
    url: 'api/v1/films',
    data: filmFormResponseObject,
    headers: {
      'Content-type': 'application/json',
    },
  })
})