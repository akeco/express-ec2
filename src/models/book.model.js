module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      title: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
    });
  
    return Book;
  };