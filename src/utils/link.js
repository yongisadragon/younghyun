// link.js

const handleScroll = (e) => {
  e.preventDefault();

  const targetId = e.target.getAttribute("href") || e.target.getAttribute("to"); // NavLink의 경우 'to' 속성 사용
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const addScrollEventListener = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", handleScroll);
  });
};

const removeScrollEventListener = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.removeEventListener("click", handleScroll);
  });
};

export { addScrollEventListener, removeScrollEventListener };
