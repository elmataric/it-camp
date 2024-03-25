const fetchQuotes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes().then((data) => {
  const contentDiv = document.getElementById("content2");
  console.log(data);

  const quotes = data
    .map((quote) => {
      return `<div class="card">
                  <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                  <p class="content" id="contentText">${quote.content}</p>
                 </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
});

const fetchQuotes3 = async () => {
  try {
    const input = document.getElementById("search");
    const response = await fetch(
      `https://dummyjson.com/products
          ${input.value}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const showQuotes = (data) => {
  const contentDiv = document.getElementById("content3");

  const quotes = data
    .map((quote) => {
      console.log(quote);
      return `<div class="card">
                  <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                  <p class="content" id="contentText">${quote.content}</p>
                 </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
};

const searchButton = document.getElementById("searchClick");

searchButton.addEventListener("click", () => {
  fetchQuotes3().then(showQuotes);
});
