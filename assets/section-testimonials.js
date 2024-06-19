(() => {
  const slider = document.querySelectorAll('.testimonial-section');
  if (!slider || slider.length === 0) return;

  const initSlider = (slider) => {
    let activeSlide = 0;
    let curentTranslate = 0;
    const sliderBtns = slider.querySelectorAll('[data-button]');
    const slides = slider.querySelectorAll('.slide');

    sliderBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.dataset.button === "prev") {
          handleSlide(-1, 100, slides)
        } else if (btn.dataset.button === "next") {
          handleSlide(1, -100, slides)
        } else {
          return;
        }
        handleButtons();
      })
    })

    const handleButtons = () => {
      if (activeSlide === 0) {
        sliderBtns[0].disabled = true;
        sliderBtns[1].disabled = false;
      } else if (activeSlide === slides.length - 1) {
        sliderBtns[1].disabled = true;
        sliderBtns[0].disabled = false;
      } else {
        sliderBtns.forEach(btn => {
          btn.disabled = false;
        })
      }
    }

    const handleSlide = (slideUpdater, transform, slides) => {
      activeSlide += slideUpdater;
      curentTranslate += transform;
      slides.forEach(slide => {
        slide.style.transform = `translateX(${curentTranslate}%)`;
      })
    }

    handleButtons();
  }

  slider.forEach(slider => {
    initSlider(slider);
  });

})();