const share = document.querySelector(".share");

share.addEventListener('click', _ => {
    let myElement = document.querySelector(".platforms")
    myElement.classList.toggle("hidden");
    document.querySelector(".share .image").style.backgroundColor = "var(--dark-grayish-blue)";
});
