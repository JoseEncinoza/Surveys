'use strict'
const Product = require('../models/product');

export function gets(req, res) {
  SurveyAccess.find().sort('token').exec((err, surveyAccess) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ surveyAccess });
  });
}

export function add(req, res) {
  if (!req.body.surveyAccess.token || !req.body.surveyAccess.survey) {
    res.status(403).end();
  }

  const newSurveyAccess = new SurveyAccess(req.body.surveyAccess);

  newSurveyAccess.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ surveyAccess: saved });
  });
}

export function get(req, res) {
  SurveyAccess.findOne({ token: req.params.token }).exec((err, surveyAccess) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ surveyAccess });
  });
}

export function update(req, res) {
  if (!req.body.surveyAccess.token || !req.body.surveyAccess.survey) {
    res.status(403).end();
  }

  SurveyAccess.findOneAndUpdate({ token: req.params.token }, req.body.surveyAccess, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).end();
  });
};

export function delete(req, res) {

  SurveyAccess.findOne({ token: req.params.token }).exec((err, surveyAccess) => {
    if (err) {
      res.status(500).send(err);
    }

    surveyAccess.remove(() => {
      res.status(200).end();
    });
  });
}
