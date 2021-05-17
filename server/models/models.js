const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 
    'lopes', 
    '72315953', 
    {
        host: 'localhost',
        dialect: 'mysql'
    })

const User = sequelize.define('users', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    balance: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {timestamps: false})


const Operations = sequelize.define('operations', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    } 
}, {timestamps: false})

User.hasMany(Operations, {onDelete: 'cascade'})
Operations.belongsTo(User, {foreignKey: 'id', onUpdate: 'CASCADE', allowNull: false})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: User,
    Operations: Operations
}