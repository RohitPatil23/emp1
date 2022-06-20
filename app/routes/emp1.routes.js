module.exports = app => {
    const emp1s = require("../controllers/emp1.controller.js");
  
    var router = require("express").Router();
  
    // Create a new emp1
    router.post("/", emp1s.create);
  
    // Retrieve all emp1s
    router.get("/", emp1s.findAll);
  
    // Retrieve all city emp1s
    router.get("/city", emp1s.findAllCity);
  
    // Retrieve a single emp1 with id
    router.get("/:id", emp1s.findOne);
  
    // Update a emp1 with id
    router.put("/:id", emp1s.update);
  
    // Delete a emp1 with id
    router.delete("/:id", emp1s.delete);
  
    // Delete all emp1s
    router.delete("/", emp1s.deleteAll);
  
    app.use('/api/emp1s', router);
  };
  