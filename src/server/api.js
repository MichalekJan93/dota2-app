const mongoose = require("mongoose");
const Joi = require('joi');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(5000, () => console.log('Listening on port 5000...'));

mongoose
    .connect("mongodb://127.0.0.1:27017/dota-app", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB!"))
    .catch(error => console.error("Could not connect to MongoDB... ", error));

const heroes = new mongoose.Schema({
    name: String,
    img: String,
    attr: String
})

const validateHero = (hero) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        img: Joi.string().required(),
        attr: Joi.string().required()
    })

    return schema.validate(hero)
}

const Hero = mongoose.model("heroes", heroes);

app.get('/api/hero', (req, res) => {
    Hero.find()
        .then(heroes => {res.json(heroes)})
});

app.post('/api/hero', (req, res) => {
    const { error } = validateHero(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }else {
        Hero.create(req.body)
            .then(result => { res.json(result)})
            .catch(err => res.send("Nepodarilo se pridat hrdinu"));
    }
})