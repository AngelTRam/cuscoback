const mongoose = require('mongoose');
const URL = 'mongodb+srv://HellGrey:teamoalondra99@clusterdeangel.hm69s.mongodb.net/test';

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('MongoDB Connected'))
.catch(err => console.log('Error: ' + err));

module.exports = mongoose;