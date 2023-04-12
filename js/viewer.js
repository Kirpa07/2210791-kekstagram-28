const viewerContainer = document.querySelector('.big-picture');
const viewerCloseButton = viewerContainer.querySelector('#picture-cancel');

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    viewerContainer.classList.add('hidden');
  }
});


viewerCloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  viewerContainer.classList.add('hidden');
});


const renderPictureComments = (comments) => {
  const commentsContainer = viewerContainer.querySelector('.social__comments');
  commentsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = `
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    `;
    fragment.appendChild(commentElement);
  });
  commentsContainer.appendChild(fragment);
};


const showPicture = (picture) => {
  viewerContainer.classList.remove('hidden');
  viewerContainer.querySelector('.big-picture__img img').src = picture.url;
  viewerContainer.querySelector('.likes-count').textContent = picture.likes;
  viewerContainer.querySelector('.comments-count').textContent = picture.comments.length;
  viewerContainer.querySelector('.social__caption').textContent = picture.description;
  viewerContainer.querySelector('.social__comment-count').classList.add('hidden');
  viewerContainer.querySelector('.comments-loader').classList.add('hidden');
  viewerContainer.querySelector('.social__footer').classList.add('hidden');

  renderPictureComments(picture.comments);
  document.body.classList.add('modal-open');
};


export { showPicture };
