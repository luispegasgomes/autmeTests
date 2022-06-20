module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define(
        "images",
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Name cannot be empty or null!",
                    },
                },
            },
            question: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: true,
            },
            correctAnswer: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Correct answer cannot be empty or null!",
                    },
                },
            },
            wrongAnswer: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Wrong answer cannot be empty or null!",
                    },
                },
            },
            img: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "image cannot be empty or null!",
                    },
                },
            },

        },
        {
            timestamps: false,
        }
    );
    return Image;
};
