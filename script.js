function checkPassword() {
    const password = document.getElementById('password').value.trim();
    const resultDiv = document.getElementById('result');
    const mainImage = document.getElementById('main-image');
    const correctPassword = 'JAYNIER LOVE DIWATA';
    const wrongImageUrl = 'mali.jpg';
    const successImageUrl = 'tama.jpg';

    if (password === correctPassword) {
        mainImage.src = successImageUrl;
        resultDiv.textContent = 'NAGPAKITA NA SI DIWATA';
    } else {
        mainImage.src = wrongImageUrl;
        resultDiv.textContent = 'Wrong password, try again.';
    }
}
