// scroll navbar
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 )
});

// video
function toggle() {
    var popupVideo = document.querySelector(".popup-video")
    popupVideo.classList.toggle("active")
};

// responsive navbar
let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.add("active");
}

document.querySelector("#nav-close").onclick = () => {
    navbar.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove("active")
};

// watch more
let loadMore = document.querySelector("#load-more");
let currentItem = 3;

loadMore.onclick = () => {
    let boxes = [...document.querySelectorAll(".region .box-container .box")];
    for (let i = currentItem; i < currentItem +3; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMore.style.display = "none"
    }
};

// gallery
let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

openFullImg = (pic) => {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

closeFullImg = () => {
    fullImgBox.style.display = "none"
};

function abdulloh() {
    console.log("This Website's FrontEnd Developed by Abdulloh Rahimjonov. Date: 09.11.2022");
}