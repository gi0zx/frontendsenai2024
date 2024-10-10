const imgBanner = ['../assets/Pandora.jpg'];


    let fotoInicial = 0;

    function slider(){
        const banner = document.getElementById('banner');
        banner.style.backgroundImage =
             `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;

    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}
setInterval(slider, 2500)               