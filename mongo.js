const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://partsi:${password}@phonebookbackend.nltzltg.mongodb.net/persons?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    id: 1,
    name: 'Ville Partanen',
    number: '213213'
})

person.save().then(result => {
    console.log('person saved')
    mongoose.connection.close()
})



