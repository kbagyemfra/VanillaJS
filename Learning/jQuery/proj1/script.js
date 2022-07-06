const ourRequest = new XMLHttpRequest();

const TheURL = "https://leanrwebcode.github.io/json-exampple/animals-1.json";

ourRequest.open("GET", TheURL, true);

ourRequest.onload = () => {
  console.log(ourRequest.responseText);
};

ourRequest.send();
