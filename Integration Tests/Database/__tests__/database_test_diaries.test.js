const diaries = require("../calls/database_call_diaries");

test("get diaries from database", async () => {
    const result = await diaries.getAllDiaries();
    expect(result.length >= 1).toBeTruthy();
});

test("Create Diary to database", async () => {
    const data = {
        title: "o meu dia especial",
        description: "hoje comi a minha comida favorita e adorei",
        date: "14/06/2022",
        allUserUsername: "pedrosilva"
    }
    const result = await diaries.postDiary(data);
    expect(result).toBeTruthy();
    
});

test(
    "Delete diary",
    async () => {
      const result = await diaries.deleteOne();
      expect(result).toBeTruthy();
    },
);
