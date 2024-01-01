try{

  
  let confetti = null;

  if (confetti === null) {
    confetti = new JSConfetti();
  }
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
  
}
catch{
  console.log("Never Gonna Give You Up....");
}