module.exports = function (sequelize, DataTypes) {
    var Habit = sequelize.define("Habit", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Habit.associate = (function (models) {
        Habit.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    });
    return Habit;
};