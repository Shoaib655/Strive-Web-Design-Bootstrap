// company-cards
const slider = document.getElementById("sliderTrack");
let cardWidth = slider.querySelector(".slider-card").offsetWidth + 16; // 16 = margin
let index = 0;

function slideCards() {
  index++;
  slider.style.transition = "0.5s";
  slider.style.transform = `translateX(${-cardWidth * index}px)`;

  // When card moves out, reset position (infinite loop effect)
  setTimeout(() => {
    if (index >= slider.children.length - 5) { 
      slider.style.transition = "none";
      index = 0;
      slider.style.transform = `translateX(0px)`;
    }
  }, 500);
}

// auto slide every 3 seconds
setInterval(slideCards, 3000);


// portfolio-part


  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      items.forEach(item => {
        if (filter === "all") {
          item.classList.remove("hidden");
        } else if (item.classList.contains(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });

    });
  });


