//for switching energy modes
(function(){
    const t = document.querySelector('#toggle-theme');
    let light;
    t.onclick = () => {
        document.querySelector('html').toggleAttribute('light');
        light = !light;
        t.innerText = light ? '🌙' : '☀️';
        localStorage.setItem('light-theme', light);
    }
    if (JSON.parse(localStorage.getItem('light-theme', light))) t.click();
}());