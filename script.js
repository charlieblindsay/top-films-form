console.log(
  Array.from(document.querySelectorAll("#film-form input")).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.checked }),
    {}
  )
);

const makeGet = async function () {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(request);
};

makeGet();
