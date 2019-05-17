function signup(e) {
  e.preventDefault();

  const userName = $('#user-name-input')
    .val()
    .trim();
  const email = $('#email-input')
    .val()
    .trim();
  const password = $('#password-input')
    .val()
    .trim();

  // const photo = document.getElementById('profile-pic').files[0];

  const signUpData = new FormData();
  signUpData.append('userName', userName);
  signUpData.append('email', email);
  signUpData.append('password', password);

  console.log(signUpData);

  $.ajax({
    url: '/api/user/register',
    method: 'post',
    data: signUpData,
    contentType: false,
    processData: false
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function login(e) {
  e.preventDefault();

  const email = $('#email-input-login')
    .val()
    .trim();
  const password = $('#password-input-login')
    .val()
    .trim();

  const loginData = { email, password };

  $.ajax({
    url: '/api/user/login',
    method: 'post',
    data: loginData
  })
    .then(token => {
      console.log(token);
      localStorage.setItem('accessToken', token);
      getProfileData();
    })
    .catch(err => {
      console.log(err);
    });
}

function getProfileData() {
  const token = localStorage.getItem('accessToken');

  $.ajax({
    url: '/api/user',
    method: 'get',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(userData => {
      console.log(userData);
    })
    .catch(err => {
      console.log(err);
    });
}

$(document).ready(function() {
  $('#signup-form').on('submit', signup);
  $('#login-form').on('submit', login);
});
