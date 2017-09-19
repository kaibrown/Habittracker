module.exports = function (sequelize, DataTypes) {
    var Progress = sequelize.define("Progress", {
        date: {
            type: DataTypes.DATE,
        }
    });
    Progress.associate = (function (models) {
        Progress.belongsTo(models.Habit, {
            foreignKey: {
                allowNull: false
            }
        });
    });
    return Progress;
};