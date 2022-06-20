const images = require("../calls/database_call_images");

test("get images from database", async () => {
    const result = await images.getAllImages();
    expect(result.length >= 1).toBeTruthy();
});

test("post images to database", async () => {
    const data = {
        name: "integration_test_image",
        question: "Será que adivinhas?",
        correctAnswer: "Sim",
        wrongAnswer: "Não",
        img: "gato.png"
    }

    const result = await images.postImage(data);
    expect(result).toBeTruthy();
});


/*test(
    "Delete Image",
    async () => {
        const result = await images.deleteOne();
        expect(result).toBeTruthy();
    },
);*/