const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth-users', {
  useMongoClient: true
})
.then(response => {
  console.log('\n===Connected to MongoDb===\n');
})
.catch(err => {
  console.log('Failed to connect to DB');
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
