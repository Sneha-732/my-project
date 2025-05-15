// document.querySelectorAll(".gallery-container").forEach(container => {
//   const track = container.querySelector(".image-track");
//   const prevBtn = container.querySelector(".prevBtn");
//   const nextBtn = container.querySelector(".nextBtn");
//   let currentIndex = 0;

//   const originalImages = Array.from(track.children).slice(0, 12);
//   for (let i = 0; i < 4; i++) {
//     const clone = originalImages[i].cloneNode(true);
//     track.appendChild(clone);
//   }

//   function getImagesPerPage() {
//     const width = window.innerWidth;
//     if (width <= 479) return 2;
//     if (width <= 767) return 3;
//     return 4;
//   }

//   function updateTrackPosition(animate = true) {
//     const imagesPerPage = getImagesPerPage();
//     const images = Array.from(track.children);
//     const targetIndex = currentIndex * imagesPerPage;

//     if (!images[targetIndex]) return;

//     const targetOffset = images[targetIndex].offsetLeft;

//     track.style.transition = animate ? "transform 0.5s ease" : "none";
//     track.style.transform = `translateX(-${targetOffset}px)`;
//   }

//   nextBtn.addEventListener("click", () => {
//     const imagesPerPage = getImagesPerPage();
//     const totalPages = Math.ceil(track.children.length / imagesPerPage);

//     currentIndex++;
//     updateTrackPosition(true);

//     if (currentIndex >= totalPages - 1) {
//       setTimeout(() => {
//         currentIndex = 0;
//         updateTrackPosition(false);
//       }, 500);
//     }
//   });

//   prevBtn.addEventListener("click", () => {
//     const imagesPerPage = getImagesPerPage();
//     const totalPages = Math.ceil(track.children.length / imagesPerPage);

//     if (currentIndex === 0) {
//       currentIndex = totalPages - 2;
//       updateTrackPosition(false);
//       setTimeout(() => {
//         updateTrackPosition(true);
//         currentIndex--;
//       }, 20);
//     } else {
//       currentIndex--;
//       updateTrackPosition(true);
//     }
//   });

//   window.addEventListener("resize", () => updateTrackPosition(false));
//   window.addEventListener("load", () => updateTrackPosition(false));
// });





// document.addEventListener("DOMContentLoaded", () => {
//   const scrollNavTrack = document.getElementById("scrollNavTrack");
//   const scrollLeftBtn = document.getElementById("scrollLeft");
//   const scrollRightBtn = document.getElementById("scrollRight");

//   const cloneNavItems = () => {
//     const items = scrollNavTrack.querySelectorAll(".nav-items");
//     items.forEach(item => {
//       const clone = item.cloneNode(true);
//       scrollNavTrack.appendChild(clone);
//     });
//   };

  
//   let isCloned = false;

//   scrollLeftBtn.addEventListener("click", () => {
//     scrollNavTrack.scrollBy({
//       left: -150,
//       behavior: "smooth",
//     });
//   });

//   scrollRightBtn.addEventListener("click", () => {
//     const maxScrollLeft = scrollNavTrack.scrollWidth - scrollNavTrack.clientWidth;

//     if (!isCloned && scrollNavTrack.scrollLeft >= maxScrollLeft - 10) {
//       cloneNavItems();
//       isCloned = true;
//     }

//     scrollNavTrack.scrollBy({
//       left: 150,
//       behavior: "smooth",
//     });
//   });
// });




 
  
// const toggleBtn = document.getElementById("dropdownToggle"); // for support
// const supportInfo = document.getElementById("supportInfo");
// const chatBtn = document.getElementById("chatBtn");
// const phoneBtn = document.getElementById("phoneBtn");
// const svg = toggleBtn.querySelector("svg");

// const email = "support@example.com";
// const phone = "+123-456-7890";

// function renderSupportRow(label, value) {
//   return `
//     <div class="support-row">
//       <span>${label}</span>
//       <span>${value}</span>
//     </div>
//   `;
// }

// toggleBtn.addEventListener("click", () => {
//   const showingBoth =
//     supportInfo.innerHTML.includes(email) &&
//     supportInfo.innerHTML.includes(phone);

//   if (showingBoth) {
//     supportInfo.innerHTML = "";
//     svg.classList.remove("rotate");
//   } else {
//     supportInfo.innerHTML = `
//       ${renderSupportRow("Technical Support", email)}
//       ${renderSupportRow("Technical Support", phone)}
//     `;
//     svg.classList.add("rotate");
//   }
// });

// chatBtn.addEventListener("click", () => {
//   supportInfo.innerHTML = renderSupportRow("Technical Support", email);
//   svg.classList.remove("rotate");
// });

// phoneBtn.addEventListener("click", () => {
//   supportInfo.innerHTML = renderSupportRow("Technical Support", phone);
//   svg.classList.remove("rotate");
// });



//   document.addEventListener("DOMContentLoaded", function () {
//     const menuDropdownToggle = document.getElementById("menuDropdownToggle");
//     const dropdownContent = document.getElementById("dropdownContent");

//     menuDropdownToggle.addEventListener("click", () => {
//       dropdownContent.classList.toggle("show");
//     });
//   });



  document.addEventListener("DOMContentLoaded", () => {
    // ========== Game carousel logic ==========
    document.querySelectorAll(".gallery-container").forEach(container => {
      const track = container.querySelector(".image-track");
      const prevBtn = container.querySelector(".prevBtn");
      const nextBtn = container.querySelector(".nextBtn");
      let currentIndex = 0;

      const originalImages = Array.from(track.children).slice(0, 12);
      for (let i = 0; i < 4; i++) {
        const clone = originalImages[i].cloneNode(true);
        track.appendChild(clone);
      }

      function getImagesPerPage() {
        const width = window.innerWidth;
        if (width <= 479) return 2;
        if (width <= 767) return 3;
        return 4;
      }

      function updateTrackPosition(animate = true) {
        const imagesPerPage = getImagesPerPage();
        const images = Array.from(track.children);
        const targetIndex = currentIndex * imagesPerPage;

        if (!images[targetIndex]) return;

        const targetOffset = images[targetIndex].offsetLeft;
        track.style.transition = animate ? "transform 0.5s ease" : "none";
        track.style.transform = `translateX(-${targetOffset}px)`;
      }

      nextBtn.addEventListener("click", () => {
        const imagesPerPage = getImagesPerPage();
        const totalPages = Math.ceil(track.children.length / imagesPerPage);

        currentIndex++;
        updateTrackPosition(true);

        if (currentIndex >= totalPages - 1) {
          setTimeout(() => {
            currentIndex = 0;
            updateTrackPosition(false);
          }, 500);
        }
      });

      prevBtn.addEventListener("click", () => {
        const imagesPerPage = getImagesPerPage();
        const totalPages = Math.ceil(track.children.length / imagesPerPage);

        if (currentIndex === 0) {
          currentIndex = totalPages - 2;
          updateTrackPosition(false);
          setTimeout(() => {
            updateTrackPosition(true);
            currentIndex--;
          }, 20);
        } else {
          currentIndex--;
          updateTrackPosition(true);
        }
      });

      window.addEventListener("resize", () => updateTrackPosition(false));
      window.addEventListener("load", () => updateTrackPosition(false));
    });

    // ========== Scrollable nav ==========
    const scrollNavTrack = document.getElementById("scrollNavTrack");
    const scrollLeftBtn = document.getElementById("scrollLeft");
    const scrollRightBtn = document.getElementById("scrollRight");

    if (scrollNavTrack && scrollLeftBtn && scrollRightBtn) {
      let isCloned = false;

      const cloneNavItems = () => {
        const items = scrollNavTrack.querySelectorAll(".nav-items");
        items.forEach(item => {
          const clone = item.cloneNode(true);
          scrollNavTrack.appendChild(clone);
        });
      };

      scrollLeftBtn.addEventListener("click", () => {
        scrollNavTrack.scrollBy({ left: -150, behavior: "smooth" });
      });

      scrollRightBtn.addEventListener("click", () => {
        const maxScrollLeft = scrollNavTrack.scrollWidth - scrollNavTrack.clientWidth;
        if (!isCloned && scrollNavTrack.scrollLeft >= maxScrollLeft - 10) {
          cloneNavItems();
          isCloned = true;
        }
        scrollNavTrack.scrollBy({ left: 150, behavior: "smooth" });
      });
    }

    // ========== Support Info Toggle ==========
    const toggleBtn = document.getElementById("dropdownToggle");
    const supportInfo = document.getElementById("supportInfo");
    const chatBtn = document.getElementById("chatBtn");
    const phoneBtn = document.getElementById("phoneBtn");
    const svg = toggleBtn?.querySelector("svg");

    const email = "support@example.com";
    const phone = "+123-456-7890";

    const renderSupportRow = (label, value) => `
      <div class="support-row">
        <span>${label}</span>
        <span>${value}</span>
      </div>
    `;

    toggleBtn?.addEventListener("click", () => {
      const showingBoth = supportInfo.innerHTML.includes(email) && supportInfo.innerHTML.includes(phone);
      if (showingBoth) {
        supportInfo.innerHTML = "";
        svg?.classList.remove("rotate");
      } else {
        supportInfo.innerHTML = `
          ${renderSupportRow("Technical Support", email)}
          ${renderSupportRow("Technical Support", phone)}
        `;
        svg?.classList.add("rotate");
      }
    });

    chatBtn?.addEventListener("click", () => {
      supportInfo.innerHTML = renderSupportRow("Technical Support", email);
      svg?.classList.remove("rotate");
    });

    phoneBtn?.addEventListener("click", () => {
      supportInfo.innerHTML = renderSupportRow("Technical Support", phone);
      svg?.classList.remove("rotate");
    });

    // ========== Menu Dropdown Toggle ==========
    const menuDropdownToggle = document.getElementById("menuDropdownToggle");
    const dropdownContent = document.getElementById("dropdownContent");

    menuDropdownToggle?.addEventListener("click", () => {
      dropdownContent?.classList.toggle("show");
    });
  });





