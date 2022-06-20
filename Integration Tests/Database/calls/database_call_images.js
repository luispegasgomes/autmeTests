const db = require("../models");
const Image = db.image;

// Get Psychologists
exports.getAllImages = async function () {
    try {
        const response = await Image.findAll();
        return response;
    } catch (error) {
        throw Error("error");
    }
};


exports.postImage = async function (data) {
    try {
        const response = await Image.create(data)
        return response
    } catch (error) {
        throw Error("error");
    }
}

// DELETE
exports.deleteOne = async function () {
    try {
        const response = await Image.destroy({
            where: {
                name: "integration_test_image"
            }
        })
        return response;
    } catch (error) {
        throw Error("error");
    }
};