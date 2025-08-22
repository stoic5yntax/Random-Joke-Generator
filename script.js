const API_URL = "https://official-joke-api.appspot.com/random_joke";

const jokeContainer = document.getElementById("content-container");
const button = document.getElementById("generateBtn");

// INITIAL STATE
jokeContainer.innerHTML = `
  <h2>
    Nothing to display!! <br>
    Click to generate one 😀
  </h2>
`;

// FUCTIONS
const displayJoke = (joke) => {
  jokeContainer.innerHTML = `
    <p id="setup-element">
      ❝ ${joke.setup} 🤔 ❞
      <small>${joke.type}</small>
    </p>
    <p id="punchline-element">...</p>
  `;

  setTimeout(() => {
    document.getElementById(
      "punchline-element"
    ).textContent = `${joke.punchline} 😆`;
  }, 3000);
};

const getJoke = async () => {
  try {
    console.log("working");
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const joke = await response.json();
    displayJoke(joke);
  } catch (err) {
    console.log("Error fetching joke", err);
    jokeContainer.innerHTML = `<p>⚠️ Could not load a joke. Please try again.</p>`;
  }
};

// EVENT LISTENER
button.addEventListener("click", getJoke);
