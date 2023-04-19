const ApplicationController = require('../controllers/application.controller')

module.exports = app => {
    app.get('/api/applications', ApplicationController.findAllApplications);
    app.get('/api/application/:id', ApplicationController.findOneApplication);
    app.patch('/api/application/:id', ApplicationController.updateApplicationById);
    app.post('/api/application', ApplicationController.createNewApplication);
    app.delete('/api/application/:id', ApplicationController.deleteAnExistingApplication);
}
