let tabs = document.querySelector("#tabs > ul > li > a");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListner("click", selectTabs);
}

function selectTabs(event) {
  event.preventDefault();

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].removeAttribute("class");
  }

  event.target.className = "active";

  const thistab = event.target.getAttribute("href");
  const thisContent = document.querySelector(thistab);

  let oldContent = document.querySelector("visible");

  oldContent.className = "visuallyhidden";

  oldContent.addEventListener("transitionend", function () {
    oldContent.className = "hidden";
    thisContent.className = "visible visuallyhidden";

    setTimeout(function () {
      thisContent.classList.remove("visuallyhidden");
    }, 20);
  });
}
