import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "hasan";
const yourPassword = "hasanapi";
const yourAPIKey = "8e7b7bab-260b-4fca-88ed-09d1b0c6eb80";
const yourBearerToken = "a11fcd9a-0f31-4898-99f2-fbe191b4b10a";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  axios.get("https://secrets-api.appbrewery.com/random")
  .then(response => {
    res.render("index.ejs", { content: JSON.stringify(response.data) });
    })
    .catch(error => {
      res.render("index.ejs", { content: JSON.stringify(error.message) });
      });
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", (req, res) => {
  axios.get("https://secrets-api.appbrewery.com/all?page=2", {
    auth: {
      username: "hasan",
      password: "hasanapi",
    },
    })
      .then(response => {
        res.render("index.ejs", { content: JSON.stringify(response.data) });
        })
        .catch(error => {
          res.render("index.ejs", { content: JSON.stringify(error.message) });
          });

  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908  
   });

app.get("/apiKey", (req, res) => {
  axios.get("https://secrets-api.appbrewery.com/filter?score=5&apiKey=8e7b7bab-260b-4fca-88ed-09d1b0c6eb80", {    
      })
      .then(response => {
        res.render("index.ejs", { content: JSON.stringify(response.data) });
        })
        .catch(error => {
          res.render("index.ejs", { content: JSON.stringify(error.message) });
          });

  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  axios.get("https://secrets-api.appbrewery.com/secrets/42", 
    {
      headers: {
        Authorization: "Bearer 9bcf8165-ec04-40b0-8fe4-b521a6f04053"
        }
        })
        .then(response => {
          res.render("index.ejs", { content: JSON.stringify(response.data) });
          })
          .catch(error => {
            res.render("index.ejs", { content: JSON.stringify(error.message) });
            });
    
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
