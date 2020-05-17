function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(function () {
  lightGallery(document.querySelector('.gallery-1'))
  lightGallery(document.querySelector('.gallery-2'))
  lightGallery(document.querySelector('.gallery-3'))
  lightGallery(document.querySelector('.gallery-4'))
  lightGallery(document.querySelector('.gallery-5'))
  lightGallery(document.querySelector('.gallery-6'))

  var handleSubmit = function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var url = 'https://formspree.io/xlepggvj';
    const formData = new FormData( event.currentTarget );

    fetch(url, {
      method: 'post',
      redirect: 'manual',
      body: formData,
    }).then(function (response) {
      document.querySelector('.btn-primary').classList.add('hidden')
      document.querySelector('[data-component="success-message"]').classList.remove('hidden')
    }).catch(function (error) {
      document.querySelector('[data-component="error-message"]').classList.remove('hidden');
    })
  }

  document.querySelector('[data-component~="ajax-form"]').addEventListener('submit', handleSubmit)
})
