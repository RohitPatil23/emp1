const db = require("../models");
const Emp1 = db.emp1s;
const Op = db.Sequelize.Op;

// Create and Save a new emp1
exports.create = (req, res) => {
  // Validate request
  if (!req.body.empName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a emp1
  const emp1 = {
    empName: req.body.empName,
    job: req.body.job,
    city : req.body.city
    
  };

  // Save emp1 in the database
  Emp1.create(emp1)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the emp1."
      });
    });
};

// Retrieve all emp1s from the database.
exports.findAll = (req, res) => {
  const empName = req.query.empName;
  var condition = empName ? { empName: { [Op.like]: `%${empName}%` } } : null;

  Emp1.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving emp1s."
      });
    });
};

// Find a single emp1 with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Emp1.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find emp1 with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving emp1 with id=" + id
      });
    });
};

// Update a emp1 by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Emp1.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "emp1 was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update emp1 with id=${id}. Maybe emp1 was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating emp1 with id=" + id
      });
    });
};

// Delete a emp1 with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Emp1.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "emp1 was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete emp1 with id=${id}. Maybe emp1 was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete emp1 with id=" + id
      });
    });
};

// Delete all emp1s from the database.
exports.deleteAll = (req, res) => {
  Emp1.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} emp1s were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all emp1s."
      });
    });
};

// find all city emp1
exports.findAllCity = (req, res) => {
  Emp1.findAll({ where: { city:city } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving emp1s."
      });
    });
};
