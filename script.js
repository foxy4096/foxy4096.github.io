async function get_repos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repos = await response.json();
  console.log(repos);
  document.getElementById("repos").innerHTML = repos
    .map((repo) =>
      `<div class="box">
<h4><a href="${repo.html_url}">${repo.name}</a></h4>
<p>${repo.description?? ""}</p>
</div>
`.slice(0, -1)
    )
    .join("");
}

get_repos("foxy4096");
