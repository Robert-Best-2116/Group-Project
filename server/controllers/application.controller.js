const Application = require('../models/application.model')


// FIND ALL
module.exports.findAllApplications = (request, response) => {
    Application.find().sort({_id:-1})
        .then(allApplications => {
            response.status(200).json(allApplications)
        })
        .catch((err) => {
            res.status(500).json({err})
        });
}


// FIND ONE
module.exports.findOneApplication = (request, response) => {
    Application.findOne({ _id: request.params.id})
        .then(oneApplication => {
            response.json(oneApplication)
        })
        .catch((err) => {
            res.status(400).json({err})
        });
}


// UPDATE
module.exports.updateApplicationById= (request, response) => {
    Application.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(updateApplication => {
            response.json(updateApplication)
        })
        .catch((err) => {
            res.status(400).json({err})
        });
}


// CREATE
module.exports.createNewApplication = (request, response) => {
    Application.create(request.body) 
        .then(application => {
            response.json(application)
        })
        .catch((err) => {
            response.status(400).json({err})
        })
}


// DELETE
module.exports.deleteAnExistingApplication = (request, response) => {
    Application.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => {
            response.json(deleteConfirmation)
        })
        .catch((err) => {
            response.status(400).json({err})
        })
}