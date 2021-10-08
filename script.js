const dog = 'https://pictures.s3.yandex.net/frontend-developer/functions/dog-1.jpg';

function setDog() {
    const dog = 'https://pictures.s3.yandex.net/frontend-developer/functions/dog-2.jpg';
    document.querySelector('.dog').style.backgroundImage = `url(${dog})`;
}

document.querySelector('button').addEventListener('click', setDog);
