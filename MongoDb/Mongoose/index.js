// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/cockpitKart');
  console.log("We are connected ...")
}

const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting ="Meow name is " + this.name
    console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

silence.save();
silence.speak();

Kitten.find({ name: 'Silence' },function (err,Kittens){
    if (err) return console.error(err);
    console.log(Kittens);
});