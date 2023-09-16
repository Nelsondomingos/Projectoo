function toggleMode() {
    const html=document.documentElement;
    
    // aqui fizemos a função toogle debaixos dos panos
    // if (html.classList.contains('light')) {
    //     html.classList.remove('light');
    // }else
    // {
    //     html.classList.add('light');
    // }
    
    //faz a verificação se existe class remove senão add a class
    html.classList.toggle('light'); 
    

    // pegar a tag img e subistituir 
    const image = document.querySelector('#profile img');
    if (html.classList.contains('light')) {
        // se tiver a class light colocar outra imagem
        image.setAttribute('src','./assets/avatar-Nelson.jpg');
        image.setAttribute('alt','The same photo');
    }else
    {
        // senão tiver a class manter a imagem 
        image.setAttribute('src', './assets/Nelson.jpg');
        image.setAttribute('alt',' The first photo');
    }
}