const viewerContainer = document.querySelector('.big-picture');
const viewerCloseButton = viewerContainer.querySelector('#picture-cancel');

const viewerCommentsLoader = viewerContainer.querySelector('.comments-loader');
const commentsContainer = viewerContainer.querySelector('.social__comments');


const COMMENTS_PER_PAGE = 5;


function renderComments(comments) {
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
}


const createCommentsView = (comments) => {
  let currentPage = 1;
  commentsContainer.innerHTML = '';

  function setPage(page) {
    const start = page * COMMENTS_PER_PAGE - COMMENTS_PER_PAGE;
    const end = Math.min(start + COMMENTS_PER_PAGE, comments.length);

    const commentsRange = comments.slice(start, end);
    renderComments(commentsRange);

    if (end >= comments.length) {
      viewerCommentsLoader.classList.add('hidden');
    } else {
      viewerCommentsLoader.classList.remove('hidden');
    }

    document.querySelector('.social__comment-count').innerHTML = `${end} из <span className="comments-count">${comments.length}</span> комментариев`;
    currentPage = page;
  }

  const onLoadMoreClick = (e) => {
    e.preventDefault();
    setPage(currentPage + 1);
  };

  viewerCommentsLoader.addEventListener('click', onLoadMoreClick);

  return {
    destroy: () => {
      // удаляем предыдущий обработчик, чтобы не дублировать на каждое открытие окна обработчики
      viewerCommentsLoader.removeEventListener('click', onLoadMoreClick);
    },
    setPage,
  };
};


const showPicture = (picture) => {
  viewerContainer.querySelector('.big-picture__img img').src = picture.url;
  viewerContainer.querySelector('.likes-count').textContent = picture.likes;
  viewerContainer.querySelector('.social__caption').textContent = picture.description;
  viewerContainer.querySelector('.social__footer').classList.add('hidden');

  viewerContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const commentsView = createCommentsView(picture.comments);
  commentsView.setPage(1);

  document.addEventListener('keydown', onKeydownDocument);
  viewerCloseButton.addEventListener('click', onCloseViewer);

  function onKeydownDocument(e) {
    if (e.key === 'Escape') {
      onCloseViewer();
    }
  }

  function onCloseViewer() {
    viewerContainer.classList.add('hidden');
    commentsView.destroy();

    // обязательно отчищаем обработчики на закрытие, чтобы мы не множили их при каждом открытии окна
    document.removeEventListener('keydown', onKeydownDocument);
    viewerCloseButton.removeEventListener('click', onCloseViewer);
  }
};


export { showPicture };
