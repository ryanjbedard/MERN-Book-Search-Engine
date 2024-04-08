const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ryanjbedard:5BUvDWbyN&qE@cluster0.jjaessc.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
