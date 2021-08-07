const express = require("express");
const app = express();
// const connect = require("./config/db");
app.use(express.json());
const Journeycontroller = require('./controllers/Journey.controller');
const MedicalController = require('./controllers/Medical.controller');
// const studentController = require('./controllers/student.controller');
// const topicController = require('./controllers/topic.controller');

app.use('/journeys',Journeycontroller);
app.use('/medicals',MedicalController);
// app.use('/students',studentController);
// app.use('/topics',topicController);

module.exports = app;