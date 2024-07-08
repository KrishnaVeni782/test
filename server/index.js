const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./Schema');
const resolvers = require('./resolvers');

const app = express();
const port = 3001;

const url = 'mongodb+srv://ravuriswapna3:oyvyuivYBaeMCeFX@cluster0.fgu5vrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => console.error('MongoDB connection error:', err));

// Middleware to parse JSON bodies
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    app.listen(port, () => {
        console.log(`Server is live at {port}`);
    });
}
function Testing(){
    return 0;
}
Testing();
startServer();
