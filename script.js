const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');

window.addEventListener('load', () => {
  usernameInput.value = '';
  passwordInput.value = '';
});

function showSelectionPopup(username) {
  const popup = document.createElement('div');
  popup.className = 'selection-popup';

  let optionsHTML = '<option value="" disabled selected>בחר אפשרות</option>';
  dropdownOptions.forEach(option => {
    optionsHTML += `<option value="${option.url}">${option.label}</option>`;
  });

  popup.innerHTML = `
    <h2>ברוך הבא, ${username}</h2>
    <p>בחר לאן תרצה להיכנס:</p>
    <select id="selectionMenu">${optionsHTML}</select>
    <button id="enterBtn">המשך</button>
  `;

  document.body.appendChild(popup);

  document.getElementById('enterBtn').addEventListener('click', () => {
    const selectedURL = document.getElementById('selectionMenu').value;
    if (selectedURL) {
      window.location.href = selectedURL;
    } else {
      alert('אנא בחר אפשרות.');
    }
  });
}

loginBtn.addEventListener('click', () => {
  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (!enteredUsername) {
    message.textContent = 'אנא הזן שם משתמש.';
    message.className = 'message error';
    return;
  }

  if (!enteredPassword) {
    message.textContent = 'אנא הזן סיסמה.';
    message.className = 'message error';
    return;
  }

  if (userPasswords[enteredUsername] === enteredPassword) {
    message.textContent = 'התחברות הצליחה!';
    message.className = 'message success';

    setTimeout(() => {
      document.querySelector('.container').style.display = 'none';
      showSelectionPopup(enteredUsername);
    }, 1000);
  } else {
    message.textContent = 'שם משתמש או סיסמה שגויים.';
    message.className = 'message error';
  }
});
