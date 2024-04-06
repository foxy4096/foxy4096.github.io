
document.querySelector(
  "#banner"
).innerHTML = `<a href="https://hyperstar.vercel.app" target="_blank"><code class="jolly-bg">Hyperstar 🌠</code> v1.0 released</a>`;


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
  document.querySelector("#current-year").innerHTML = new Date().getFullYear();
} catch {
  console.log("Never Gonna Give You Up....");
}

