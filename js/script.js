function loadPage(search) {
  let info = document.querySelector("#back-skyrim");
  let requirement = new XMLHttpRequest();

  requirement.onreadystatechange = () => {
    if (requirement.readyState == 4 && requirement.status == 200) {
      info.innerHTML = requirement.response;
    }
  };

  requirement.open("GET", `${search}.html`);
  requirement.send();
}
