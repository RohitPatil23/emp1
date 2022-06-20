module.exports = (sequelize, Sequelize) => {
    const emp1 = sequelize.define("emp1", {
      empName: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      }
    });
  
    return emp1;
  };
  