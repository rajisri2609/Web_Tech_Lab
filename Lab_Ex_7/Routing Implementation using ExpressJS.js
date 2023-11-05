const express = require('express');
const app= express();
const port = 3000;
app.get('/', (req, res) => {
res.send('Hello Everyone this is your irctc website page');
});
app.get('/about', (req, res) => {
res.send('This is the about page of the irctc offficial website'); //
});
app.get('/contact', (req, res) => {
res.send('This is the customer contact page of the irctc official
website'); //
});
app.use((req, res) => {
res.status(404).send('Page not
found');
});
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
