const axios = require('axios')

exports.getAllUsers = async function () {
  try {
    const response = await axios.get('http://127.0.0.1:3000/users')
    return response
  } catch (error) {
    throw Error('error');
  }
}

exports.createAccount = async function (data) {
  try {
    const response = await axios.post("http://127.0.0.1:3000/users", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.login = async function (data) {
  try {
    const response = await axios.post("http://127.0.0.1:3000/users/login", data);
    console.log(response);
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.createDiary = async function (diary, token) {
  try {
    //const response = await axios.post(`http://127.0.0.1:3000/users/${diary.allUserUsername}/diaries`, data);
    const response = await axios.post(`http://127.0.0.1:3000/users/${diary.allUserUsername}/diaries`, diary, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.deleteDiary = async function (id, token) {
  try {
    const response = await axios.delete(`http://127.0.0.1:3000/users/usertest/diaries/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.getUserProfile = async function (user, token) {
  try {
    const response = await axios.get(`http://127.0.0.1:3000/users/${user}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

exports.updatePassword = async function (user, data, token) {
  try {
    const response = await axios.patch(`http://127.0.0.1:3000/users/password/${user}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};