const path = require ('path');
const express = require('express');

const app = express();

//require routers
const userRoutes = require('./routes/userRoutes');

//require port
const PORT = 3000;

//parse request body
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.resolve(__dirname, '../client')));

//define route handlers
app.use('/api/userRoutes', userRoutes);

//global error handler
app.use((err, req, res, nest) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;