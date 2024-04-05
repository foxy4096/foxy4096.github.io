try {
  let confetti = null;

  if (confetti === null) {
    confetti = new JSConfetti();
  }
  // sourcery skip: avoid-function-declarations-in-blocks
  function pop_conf() {
    confetti.addConfetti();
  }

  let today = new Date();
  if (today.getDay() == 1 && today.getMonth() == 0) {
    document.querySelector(
      "#banner"
    ).innerHTML = `Happy New Year <u>${today.getFullYear()}</u> 🎉`;
    pop_conf();
  }
} catch {
  console.log("Never Gonna Give You Up....");
}

document.querySelector("#current-year").innerHTML = new Date().getFullYear();