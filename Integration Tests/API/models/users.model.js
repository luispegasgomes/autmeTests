module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "allUsers",
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true,
        validate: {
          notNull: {
            msg: "Username cannot be empty or null!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        trim: true, // remove spaces on both ends
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password cannot be empty or null!",
          },
        },
      },

      role: {
        type: DataTypes.ENUM("child", "psychologist", "tutor"),
        defaultValue: "child",
        validate: {
          isIn: {
            args: [["child", "psychologist", "tutor"]],
            msg: "Allowed roles: child, psychologist, or tutor",
          },
        },
      },
      child_gender: {
        type: DataTypes.ENUM("M", "F"),
        defaultValue: "F",
        validate: {
          isIn: {
            args: [["M", "F"]],
            msg: "Allowed gender: M or F",
          },
        },
      },
      child_avatar: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      birthDate: {
        type: DataTypes.STRING,
      },
      connectionId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  );
  return User;
};
