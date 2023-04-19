const Application = require('../models/application.model')

module.exports.findAllApplications = (request, response) => {
    Application.find().sort({_id:-1})
        .then(allApplications => {
            response.json(allApplications)
        })
        .catch(err => response.json(err));
}

module.exports.findOneApplication = (request, response) => {
    Application.findOne({ _id: request.params.id})
        .then(oneApplication => {
            response.json(oneApplication)
        })
        .catch(err => response.json(err));
}

module.exports.updateApplicationById= (request, response) => {
    Application.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(updateApplication => {
            response.json(updateApplication)
        })
        .catch(err => response.json(err));
}

module.exports.createNewApplication = (request, response) => {
    Application.create(request.body) 
        .then(application => {
            response.json(application)
        })
        .catch(err => response.json(err));
}

module.exports.deleteAnExistingApplication = (request, response) => {
    Application.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => {
            response.json(deleteConfirmation)
        })
        .catch(err => response.json(err));
}