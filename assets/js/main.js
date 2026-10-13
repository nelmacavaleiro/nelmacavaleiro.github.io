// To show your video pitch on the home page, upload it to YouTube as an unlisted
// video and paste its ID between the quotes below. The ID is the part after "v="
// in the link: https://www.youtube.com/watch?v=AbC123xYz has the ID "AbC123xYz".
// While this is empty, the video section stays hidden.
const YOUTUBE_VIDEO_ID = "";

(function () {
  const section = document.getElementById("video");
  if (section && YOUTUBE_VIDEO_ID) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(YOUTUBE_VIDEO_ID) + "?rel=0";
    iframe.title = "Video introduction from Nelma Cavaleiro";
    iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    document.getElementById("video-frame").appendChild(iframe);
    section.hidden = false;
  }

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
