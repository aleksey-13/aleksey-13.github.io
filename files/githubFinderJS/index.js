const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value.trim();

  if (userText !== "") {
    github
      .getUser(userText)
      .then(({ profile, repos }) => {
        if (profile.message === "Not Found") {
          // Show alert
          ui.showAlert("Not found user! Please try again");
          // throw new Error("User is not found!");
        } else {
          // Show profile
          ui.showProfile(profile);
          ui.showRepos(repos);
        }
      })
      .catch((err) => console.log("Error:", err));
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
