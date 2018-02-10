module.exports = {
    db: {
        database: 'skill',
        host: 'localhost',
        port: 3306,
        user: 'skill',
        password: 'skill'
    },

    sequelize: {
        options: {
            timestamps: false,
            freezeTableName: true
        }
    }
}