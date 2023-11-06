document.addEventListener('scroll', handleScroll);
let arrowUpBtn = document.querySelector('.arrow-up');

function handleScroll() {
  let scroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let RATIO = 0.1;

  if (document.documentElement.scrollTop / scroll > RATIO) {
    arrowUpBtn.style.display = 'block';
  } else {
    arrowUpBtn.style.display = 'none';
  }
}

arrowUpBtn.addEventListener('click', scrollToUp);

function scrollToUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}