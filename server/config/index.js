module.exports = {
    port: 9999,
    dbURL: `mongodb+srv://${process.env.MONGO_ATLAS_CREDENTIALS}@cluster0-39xcb.mongodb.net/meavn?retryWrites=true`,
    dbOptions: {useNewUrlParser: true, autoIndex: false}
}