const button = document.getElementById('film-form-submit-button');

button.addEventListener('click', () => {
  let filmFormResponseObject = Array.from(document.getElementsByClassName("checkbox")).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.checked }),
    {}
  );

  filmFormResponseObject['username'] = document.querySelector('#username').value;
  console.log(filmFormResponseObject);
})


// );
