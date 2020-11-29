// type

// typeWriter
class TypeWriter {
  constructor(txtElement, words, wait = "3000") {
    console.log(this);
    this.txtElement = txtElement;
    this.words = words;
    this.txt = " ";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    //   console.log("type function is working");
    const current = this.wordIndex % this.words.length;
    //   console.log(current);
    const fullTxt = this.words[current];
    //   console.log(fullTxt);
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // console.log(this.txt);

    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
      //   console.log(typeSpeed + "is the speed");
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// init on dom load
document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("working");
  const txtElement = document.querySelector(".txt-type"),
    words = JSON.parse(txtElement.getAttribute("data-words")),
    wait = txtElement.getAttribute("data-wait");

  //   console.log("by");
  new TypeWriter(txtElement, words, wait);
}

// timeline

const items = document.querySelectorAll("#timeline li");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
