const firstDiv = document.getElementById('first');
const secondDiv = document.getElementById('second')
const btn = document.getElementById('toggle');
    btn.onclick = function () {
      if (firstDiv.style.display !== 'none') {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'block';
      } else {
        firstDiv.style.display = 'block';
        secondDiv.style.display = 'none';
      }
    };
const btnSignup = document.getElementById('signupbtn');
   btnSignup.onclick = function () {
    if (firstDiv.style.display !== 'none') {
      firstDiv.style.display = 'none';
      secondDiv.style.display = 'block';
    } else {
      firstDiv.style.display = 'block';
      secondDiv.style.display = 'none';
    }
   }