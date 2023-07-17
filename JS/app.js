// Humburger menu sidebar
const humburger = document.querySelector(".humburger");
const nav = document.querySelector(".nav-bar");
const topLine = document.querySelector(".top.line");
const midLine = document.querySelector(".mid.line");
const lastLine = document.querySelector(".last.line");
const body = document.body;

const toggleMenu = () => {
  nav.classList.toggle("active");
  body.classList.toggle("off-scrolling");
  topLine.classList.toggle("left-transition");
  midLine.classList.toggle("disappear");
  lastLine.classList.toggle("right-transition");
};

humburger.addEventListener("click", toggleMenu);

// Bookmark btn checked
const bookmark = document.querySelector(".bookmark-button");
const bookmarkBtn = document.querySelector(".bookmark-button svg circle");
const bookmarkCaption = document.querySelector(".bookmark-button p");

const bookmarked = () => {
  bookmark.classList.toggle("bookmarked");
  bookmarkBtn.classList.toggle("bookmarked");
  bookmarkCaption.classList.toggle("bookmarked");

  if (bookmarkCaption.innerHTML === "Bookmark") {
    bookmarkCaption.innerHTML = "Bookmarked";
  } else {
    bookmarkCaption.innerHTML = "Bookmark";
  }
};

bookmark.addEventListener("click", bookmarked);

// Back this project btn
const backProjectBtn = document.querySelector(".back-project-button");
const rewardSelectedSection = document.querySelector(".reward-selected");
const exitButton = document.querySelector(".exit-button");
const reward_thanksContainer = document.querySelector(
  ".thanks-reward-container"
);

const openSelectedReward = () => {
  rewardSelectedSection.classList.toggle("opened");
  body.classList.toggle("off-scrolling");
};

backProjectBtn.addEventListener("click", openSelectedReward);

const getOut = () => {
  rewardSelectedSection.classList.remove("opened");
  body.classList.remove("off-scrolling");
};

exitButton.addEventListener("click", getOut);
