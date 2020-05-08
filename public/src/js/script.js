function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  lightGallery(document.querySelector('.gallery-1'))
  lightGallery(document.querySelector('.gallery-2'))
  lightGallery(document.querySelector('.gallery-3'))
  lightGallery(document.querySelector('.gallery-4'))
  lightGallery(document.querySelector('.gallery-5'))
  lightGallery(document.querySelector('.gallery-6'))
})
