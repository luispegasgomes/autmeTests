const db = require("../models");
const User = db.user;

// Get Psychologists
exports.getAllPsychologists = async function () {
  try {
    const response = await User.findAll({
      where: {
        role: "psychologist",
      },
    });
    return response;
  } catch (error) {
    throw Error("error");
  }
};

exports.postUser = async function (data) {
  try {
    const response = await User.create(data)
    return response
  } catch (error) {
    console.log(error)
    throw Error("error");
  }
} 

exports.updateUser = async function (data) {
  try {

    const response = await User.update({ child_avatar: 'photo' }, { where: { username: data } })
    return response
  } catch (error) {
    console.log(error)
    throw Error("error");
  }
} 


// DELETE
exports.deleteOne = async function () {
  try {
    const response = await User.destroy({
      where: {
        username: 'usertest'
      }
    })
    return response;
  } catch (error) {
    throw Error("error");
  }
};