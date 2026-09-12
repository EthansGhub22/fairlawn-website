(function () {
  var GALLERIES = {
    tuxedo: {
      title: "Tuxedo Rental & Sale",
      images: [
        { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=700&auto=format&fit=crop", alt: "Tuxedo fitting", cap: "A Fine Fitting" },
        { src: "https://images.unsplash.com/photo-1714321960831-c8753b534400?q=80&w=700&auto=format&fit=crop", alt: "Pressing a finished garment", cap: "The Final Press" },
        { src: "https://images.unsplash.com/photo-1623310658847-33f12eaab710?q=80&w=700&auto=format&fit=crop", alt: "Folded fabric bolts", cap: "Fine Fabrics" }
      ]
    },
    alterations: {
      title: "Alterations",
      images: [
        { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=700&auto=format&fit=crop", alt: "Tailoring workroom", cap: "The Workroom" },
        { src: "https://images.unsplash.com/photo-1769192932507-edee0acdd5ca?q=80&w=700&auto=format&fit=crop", alt: "Sewing tools and measuring tape", cap: "Tools of the Trade" },
        { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=700&auto=format&fit=crop", alt: "A vintage sewing machine at work", cap: "Old-Fashioned Precision" }
      ]
    },
    embroidery: {
      title: "Custom Embroidery",
      images: [
        { src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=700&auto=format&fit=crop", alt: "Embroidery detail", cap: "Custom Embroidery" },
        { src: "https://images.unsplash.com/photo-1767039362599-1b51a9c7abe8?q=80&w=700&auto=format&fit=crop", alt: "Spools of thread", cap: "Thread & Notions" },
        { src: "https://images.unsplash.com/photo-1560796952-f1c9b838544c?q=80&w=700&auto=format&fit=crop", alt: "Sewing machine close-up", cap: "Stitch by Stitch" }
      ]
    },
    bridal: {
      title: "Bridal & Gifts",
      images: [
        { src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=700&auto=format&fit=crop", alt: "Bridal and special gifts", cap: "Heirlooms in the Making" },
        { src: "https://images.unsplash.com/photo-1623310658847-33f12eaab710?q=80&w=700&auto=format&fit=crop", alt: "Folded fabric bolts", cap: "Fine Fabrics" },
        { src: "https://images.unsplash.com/photo-1767039362599-1b51a9c7abe8?q=80&w=700&auto=format&fit=crop", alt: "Spools of thread", cap: "Thread & Notions" }
      ]
    }
  };

  function initWorkroomGallery() {
    var lightbox = document.getElementById("workroomLightbox");
    if (!lightbox) return;

    var titleEl = lightbox.querySelector(".lightbox-title");
    var gridEl = lightbox.querySelector(".lightbox-grid");
    var lastFocused = null;

    function open(key) {
      var data = GALLERIES[key];
      if (!data) return;
      titleEl.textContent = data.title;
      gridEl.innerHTML = "";
      data.images.forEach(function (img) {
        var fig = document.createElement("div");
        fig.className = "engraving";
        fig.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy"><div class="cap">' + img.cap + "</div>";
        gridEl.appendChild(fig);
      });
      lastFocused = document.activeElement;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lightbox-close").focus();
    }

    function close() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    document.querySelectorAll(".gallery-cover").forEach(function (btn) {
      btn.addEventListener("click", function () {
        open(btn.getAttribute("data-gallery"));
      });
    });

    lightbox.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWorkroomGallery);
  } else {
    initWorkroomGallery();
  }
})();
