const express = require("express");
const app = express();
// const connect = require("./config/db");
app.use(express.json());
const Journeycontroller = require('./controllers/Journey.controller');
const EnggCollegeController = require('./controllers/enggCollege.controller');
const CommerceCollegeController = require('./controllers/commerceCollege.controller');
const ArtCollegeController = require('./controllers/artCollege.controller');
const IntermediateCollegeController = require('./controllers/intermediateCollege.controller');
const DiplomaCollegeController = require('./controllers/diplomaCollege.controller');
// const evaluationController = require('./controllers/evaluation.controller');
const MedicalController = require('./controllers/Medical.controller');
// const studentController = require('./controllers/student.controller');
// const topicController = require('./controllers/topic.controller');

app.use('/journeys',Journeycontroller);
app.use('/enggcollege',EnggCollegeController);
app.use('/commercecollege',CommerceCollegeController);
app.use('/artcollege',ArtCollegeController);
app.use('/intermediatecollege',IntermediateCollegeController);
app.use('/diplomacollege',DiplomaCollegeController);
// app.use('/evaluations',evaluationController);
app.use('/medicals',MedicalController);
// app.use('/students',studentController);
// app.use('/topics',topicController);

module.exports = app;