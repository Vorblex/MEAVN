const Project = require('../models/project');
const User = require('../models/user');

exports.get_projects = (req, res) => {
    console.log(req.userData);
    Project.find({}, 'name link', (err, projects) => {
        if (err) {
            res.sendStatus(500)
        } else {
          // const user = req.userData
          // user.credentials = 'regular'
          // if(user.role === 'admin') {
          //   user.credentials = 'top'
          // }

            res.status('200').send({projects})
        }
        }).sort({ _id: -1 })
};

exports.get_one_project = (req, res) => {
    Project.findById(req.params.id, 'name link', (err, project) => {
        if(err) {
            res.sendStatus(500)
        } else {
            res.send(project)
        }
      })
};

exports.get_project_users = (req, res) => {
  console.log(req.params);
  User.find({accessTo: req.params.name}, 'email role', (err, users) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.status(200).send({users})
    }
  }).sort({_id: -1});
};

exports.create_project = (req, res) => {
    const project = new Project({
        name: req.body.name,
        link: req.body.link
      })
      project.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.status('201')
                .send({
                    success: true,
                    message: `Project with ID_${data._id} saved successfully!`
                })
        }
      })
};

exports.update_project = (req, res) => {
    Project.findById(req.params.id, 'name link', (err, project) => {
        if(err) {
          console.log(err);
        } else {
          if(req.body.name) {
            project.name = req.body.name
          }
          if(req.body.link) {
            project.link = req.body.link
          }
          project.save((err, data) => {
            if(err) {
              res.sendStatus(500)
            } else {
              res.send({
                success: true,
                message: `Project with ID_${data._id} saved updated!` 
              })
            }
          })
        }
    })
};

exports.remove_project = (req, res) => {
    Project.remove({_id: req.params.id}, err => {
        if(err) {
          res.sendStatus(500)
        } else {
          res.sendStatus(200)
        }
      })
};