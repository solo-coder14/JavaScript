fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err));


async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getData();
