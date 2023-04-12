const thumbTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = function ({comments, url, description, likes}) {
  const thumbnail = thumbTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const renderThumbnail = function({ pictures, onClick }) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    thumbnail.addEventListener('click', (e) => {
      e.preventDefault();
      onClick(picture);
    });
    fragment.appendChild(thumbnail);
  });
  container.appendChild(fragment);
};


export {renderThumbnail};
