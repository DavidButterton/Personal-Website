const backdropModal = document.getElementById('backdrop-modal');
const commentBoxModal = document.getElementById('comment-box__modal');
const commentButton = document.getElementById('comment-button')


commentButton.addEventListener('click', () => {
    backdropModal.style.display = 'block';
    commentBoxModal.style.display = 'block';
})

