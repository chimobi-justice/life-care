window.addEventListener('load', () => { setTimeout(Loader, 400); });

const Loader = () => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('bodyContainer').style.display = 'block';
}