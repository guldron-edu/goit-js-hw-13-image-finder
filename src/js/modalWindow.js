import * as basicLightbox from 'basiclightbox';

export default function () {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  // `);
  instance.show();
}
