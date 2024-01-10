const backdropModal = document.getElementById('backdrop-modal');
const commentBoxModal = document.getElementById('comment-box__modal');
const commentButton = document.getElementById('comment-button')
const commentCancelButton = document.getElementById('comment__cancel-button')


commentButton.addEventListener('click', () => {
    backdropModal.style.display = 'block';
    commentBoxModal.style.display = 'block';
})

commentCancelButton.addEventListener('click', () => {
    backdropModal.style.display = 'None';
    commentBoxModal.style.display = 'None';
})
