/**
 *  Model Users
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        "users",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(50),
                notEmpty: true
            },
            email: {
                type: DataTypes.STRING(50),
                unique: true,
                validate: {
                    isEmail: {
                        msg: "Email address must be valid"
                    }
                }
            },
            password: {
                type: DataTypes.STRING(50),
                notEmpty: true,
                allowNull: false
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
        },
        {
            tableName: "users",
            timestamps: false,
            underscored: true
        }
    );
    return Users;
};

module.exports = Users;
