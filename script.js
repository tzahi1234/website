const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');

window.addEventListener('load', () => {
  usernameInput.value = '';
  passwordInput.value = '';
});

function showInstructionPopup(username) {
  const popup = document.createElement('div');
  popup.className = 'instruction-popup';

  popup.innerHTML = `
    <h2>ברוך הבא, ${username}</h2>
    <p>אנא קרא את ההוראות הבאות לפני שתמשיך:</p>
    <ul>
      <li>לאחר לחיצה על כפתור "המשך", יופיע חלון צ'אט. בראש החלון תראו את ההודעה "לחץ כאן כדי להתחיל" לחצו על ההודעה כדי להתחיל את השיחה.</li>
      <li>לאחר הלחיצה, תוצגנה מספר אפשרויות נושא, ממוספרות מ-1 עד 8. הקלידו את המספר המתאים לנושא שמעניין אתכם.</li>
      <li>הצ'אט ימשיך לשאול שאלות בהתאם לנושא שבחרתם. חשוב להשיב בצורה מדויקת ונכונה.</li>
    </ul>
    <button id="continueBtn">המשך</button>
  `;

  document.body.appendChild(popup);

  document.getElementById('continueBtn').addEventListener('click', () => {
    const firstURL = dropdownOptions[0]?.url;
    if (firstURL) {
      window.location.href = firstURL;
    } else {
      alert('לא נמצאו קישורים זמינים.');
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
      showInstructionPopup(enteredUsername);
    }, 1000);
  } else {
    message.textContent = 'שם משתמש או סיסמה שגויים.';
    message.className = 'message error';
  }
});
