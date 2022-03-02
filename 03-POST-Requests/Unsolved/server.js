const express = require('express');
const { restoreDefaultPrompts } = require('inquirer');

const PORT = 3001;

const app = express();

// localhost:3001/api/reviews

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  console.log("user get");
  res.send('ok')

  // Your code here
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  console.log("user post");
  res.send('ok')

})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  console.log('user at /api/upvotes get')
  res.send('ok')
  // Your code here
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  console.log('user at/api/upvotes post')
  res.send('ok')
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
