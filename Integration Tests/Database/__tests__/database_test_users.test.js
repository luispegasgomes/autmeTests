const users = require("../calls/database_call_users");

const user = {
  username: "usertest",
  password: "password",
  email: "usertest@gmail.com",
  role: "child",
  child_gender: "M",
  child_avatar: "",
  birthDate: "05/03/2002",
  name: "Test User",
};

test("Get psychologists from database", async () => {
  const result = await users.getAllPsychologists();
  expect(result.length >= 1).toBeTruthy();
}); 


test("Create user to database", async () => {
  const result = await users.postUser(user);
  expect(result).toBeTruthy();
}); 

test(
  "Update user",
  async () => {
    const result = await users.updateUser(user.username);
    expect(result).toBeTruthy();
  },
  
);


test(
  "Delete user",
  async () => {
    const result = await users.deleteOne();
    expect(result).toBeTruthy();
  },
);


