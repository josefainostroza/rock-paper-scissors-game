const buttonElement = document.getElementById('button');
const modalElement = document.getElementById('modal');

const showModal = () => {
  modalElement.classList.add('modal-show');
};

const hideModal = () => {
  modalElement.classList.remove('modal-show');
};
buttonElement.addEventListener('click', showModal);
modalElement.addEventListener('click', hideModal);
