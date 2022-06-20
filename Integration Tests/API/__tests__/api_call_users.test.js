const User = require('../calls/api_call_users')
const dbUsers = require("../calls/dbUsers");
const { diary } = require('../models');

const userTest = {
    username: "pedrosilva",
};

const newUser = {
    username: "usertest",
    password: "test",
    role: "tutor",
    email: "test@gmail.com",
    child_gender: "F",
    name: "Test TPW",
    child_avatar: "/salvador.png",
    birthDate: "2002-03-10",
};

const newDiary = {
    id: 100,
    title: "Diario para testes",
    description: "Descrição do novo diário",
    date: "2022-05-20",
    allUserUsername: "usertest"

};


test(
    "Create account",
    async () => {
      const response = await User.createAccount(newUser);
      expect(response.status).toBe(201);
      expect(response.data.success).toBeTruthy();
      expect(response.data.msg).toBe("User was registered successfully!");
      expect(response.data.uri).toBe(`users/${newUser.username}`);
    },
    
  );


let userKey = "" // The User token
let id = 0
test('Login', async () => {
    const response = await User.login(newUser);
    expect(response.status).toBe(200);
    expect(response.data.success).toBeTruthy();
    expect(response.data.accessToken).toBeTruthy();
    expect(response.data.role).toBe(newUser.role);
    expect(response.data.username).toBe(newUser.username);
    userKey = response.data.accessToken;
    
}
);

test('Login - Error 400', async () => {
    const response = await User.login(userTest);
    expect(response.status).toBe(400);
    expect(response.data.success).toBeFalsy();
    expect(response.data.msg).toBe("Must provide username and password.");
}
);

test('Get User Profile', async () => {
    const response = await User.getUserProfile(
        newUser.username,
        userKey
    );
    expect(response.status).toBe(200);
    expect(response.data.success).toBeTruthy();
    expect(response.data.user.username).toBe(newUser.username);
    expect(response.data.user.email).toBe(newUser.email);
    expect(response.data.user.role).toBe(newUser.role);
    expect(response.data.user.child_gender).toBe(newUser.child_gender);


});

test('Get User Profile Error 403', async () => {
    const response = await User.getUserProfile(
        'luisgomes',
        userKey
    );
    expect(response.status).toBe(403);
    expect(response.data.success).toBeFalsy();
    expect(response.data.msg).toBe("This request requires ADMIN role or the user authenticated!");

});


test(
    "User not authenticated",
    async () => {
        const response = await User.getUserProfile(
            newUser.username,
            ""
        );
        expect(response.status).toBe(401);
        expect(response.data.success).toBeFalsy();
        expect(response.data.message).not.toBe("Success");
    },
);


test(
    "Update password",
    async () => {
        const response = await User.updatePassword(
            newUser.username,
            { password: "pedro" },
            userKey
          );
          expect(response.status).toBe(200);
          expect(response.data.success).toBeTruthy();
          expect(response.data.msg).toBe(
            `The user's ${newUser.username} password was updated successfully.`
          );
    },
);

test(
    "Create diary",
    async () => {
      const response = await User.createDiary(newDiary, userKey);
      expect(response.status).toBe(201);
      expect(response.data.success).toBeTruthy();
      expect(response.data.msg).toBe(`Diary added to user with username ${newDiary.allUserUsername}.`);
      id = response.data.ID
    },
    
  );


test('Delete diary', async () => {
    const response = await User.deleteDiary(
        id,
        userKey
    );
    expect(response.status).toBe(200);
    expect(response.data.success).toBeTruthy();
    expect(response.data.msg).toBe(`Diary with id ${id} was successfully deleted!`);
}

);

test('Delete diary - Not found', async () => {
    const response = await User.deleteDiary(
        id,
        userKey
    );
    expect(response.status).toBe(404);
    expect(response.data.success).toBeFalsy();
    expect(response.data.msg).toBe(`Cannot find any diary with ID ${id}.`);
}

);

afterAll(async () => {
    dbUsers.deleteOne(newUser.username);
});