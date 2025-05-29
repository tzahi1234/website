// Encoded usernames and passwords
const encodedUserPasswords = {
  "dGVzdA==": "dGVzdDEyMw==",        // "test": "test123"
  "YWRtaW4=": "YWRtaW50ZXN0MTIz"     // "admin": "admintest123"
};

// Decode all usernames and passwords at runtime
const userPasswords = Object.fromEntries(
  Object.entries(encodedUserPasswords).map(([encodedUser, encodedPass]) => [
    atob(encodedUser),
    atob(encodedPass)
  ])
);

// Base64-encoded URLs
const encodedUrls = [
  "aHR0cHM6Ly9jaGF0Z3B0LmNvbS9nL2ctNjgzNzU5YjIzMzA4ODE5MWFlZGU0MzBhYmFhOTE2NjctdHJndmwtdHNraC15",
  "aHR0cHM6Ly9jaGF0Z3B0LmNvbS9nL2ctNjgzNzU5YjIzMzA4ODE5MWFlZGU0MzBhYmFhOTE2NjctdHJndmwtdHNraC15",
  "aHR0cHM6Ly9jaGF0Z3B0LmNvbS9nL2ctNjgzNzU5YjIzMzA4ODE5MWFlZGU0MzBhYmFhOTE2NjctdHJndmwtdHNraC15"
];

// Decode all URLs at runtime
const dropdownOptions = encodedUrls.map(url => ({
  label: "צח\"י",
  url: atob(url)
}));
