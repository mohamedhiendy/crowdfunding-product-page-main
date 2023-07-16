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
