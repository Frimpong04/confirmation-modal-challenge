const openBtn = document.getElementById('open');

const closeBtn = document.getElementById('confirm-cancel');

let openModal = document.getElementById('confirmation-caution');

let bkgChange =  document.getElementsByTagName('body')[0]

function closeFunction() {
    openModal.classList.remove('show');
    bkgChange.style.backgroundColor = 'white';
}

function myFunction() {
    openModal.classList.add('show');
    bkgChange.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}
openBtn.addEventListener('click',myFunction);
closeBtn.addEventListener('click',closeFunction);
