const encodedUserPasswords = {
  "dGVzdA==": "dGVzdDEyMw==",
  "YWRtaW4=": "YWRtaW50ZXN0MTIz"
};

const userPasswords = Object.fromEntries(
  Object.entries(encodedUserPasswords).map(([encodedUser, encodedPass]) => [
    atob(encodedUser),
    atob(encodedPass)
  ])
);

const encodedUrls = [
  "aHR0cHM6Ly9jaGF0Z3B0LmNvbS9nL2ctNjgzNzU5YjIzMzA4ODE5MWFlZGU0MzBhYmFhOTE2NjctdHJndmwtdHNraC15",
  "aHR0cHM6Ly9jaGF0Z3B0LmNvbS9nL2ctNjgzNzU5YjIzMzA4ODE5MWFlZGU0MzBhYmFhOTE2NjctdHJndmwtdHNraC15",
  "aHR0cHM6Ly9jaGF0Z3B0LmNvbS9nL2ctNjgzNzU5YjIzMzA4ODE5MWFlZGU0MzBhYmFhOTE2NjctdHJndmwtdHNraC15"
];

const dropdownOptions = encodedUrls.map(url => ({
  label: "צח\"י",
  url: atob(url)
}));
