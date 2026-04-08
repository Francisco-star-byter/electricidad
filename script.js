
document.querySelectorAll('.btn-ver').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.modal;
        document.getElementById(id).classList.add('active');
    });
});

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

//galeria

