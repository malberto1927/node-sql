const sequelize = new Sequelize('','','', {
  dialect: 'sqlite',
  storage: './db/prueba.db'
})

// const sequelize = new Sequelize('sqlite:./prueba.db')

module.exports = sequelize;
