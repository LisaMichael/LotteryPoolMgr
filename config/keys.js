// passport was recommended by my tutor . I'll reconfigure this with my db info

module.exports = {
    

    mongoURI: "mongodb+srv://lisamichael:joe4hire@cluster0-mqdgn.mongodb.net/test?retryWrites=true&w=majority" || process.env.MONGODB_URI,
    
    secretOrKey: "secret"
};