const db = require("../models");
const Diary = db.diary;


// Get Psychologists
exports.getAllDiaries = async function () {
    try {
        const response = await Diary.findAll();
        return response;
    } catch (error) {
        throw Error("error");
    }
};

exports.postDiary = async function (data) {
    try {
        const response = await Diary.create(data)
        return response.id
    } catch (error) {
        console.log(error)
        throw Error("error");
    }
}

// DELETE
exports.deleteOne = async function () {
    try {
      const response = await Diary.destroy({
        where: {
          id: 40
        }
      })
      return response;
    } catch (error) {
      throw Error("error");
    }
  };