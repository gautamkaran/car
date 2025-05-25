

document.getElementById('contactBtn').addEventListener('click', function () {
    const menu = document.getElementById('contactMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
