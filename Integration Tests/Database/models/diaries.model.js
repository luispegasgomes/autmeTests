module.exports = (sequelize, DataTypes) => {
    const Diary = sequelize.define(
        "diaries",
        {
            title: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Title cannot be empty or null!",
                    },
                },
            },
            description: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Description cannot be empty or null!",
                    },
                },
            },
            date: {
                type: DataTypes.DATE,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Date cannot be empty or null!",
                    },
                },
            },
            allUserUsername: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
    return Diary;
};
