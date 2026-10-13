// To show your video pitch, upload it to YouTube as an unlisted video and paste
// its ID between the quotes below. The ID is the part after "v=" in the link,
// for example https://www.youtube.com/watch?v=AbC123xYz has the ID "AbC123xYz".
// While this is empty, the video section stays hidden.
const YOUTUBE_VIDEO_ID = "";

(function () {
  if (YOUTUBE_VIDEO_ID) {
    const section = document.getElementById("video");
    const frame = document.getElementById("video-frame");
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(YOUTUBE_VIDEO_ID) + "?rel=0";
    iframe.title = "Video introduction from Nelma Cavaleiro";
    iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    frame.appendChild(iframe);
    section.hidden = false;
  }

  function openFromHash() {
    const target = location.hash && document.querySelector(location.hash);
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      target.querySelector("summary").focus({ preventScroll: true });
    }
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
