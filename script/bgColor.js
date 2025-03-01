document.getElementById('change-color').addEventListener('click', function (event) {
    event.preventDefault;

    let bgColor = Math.floor(Math.random() * 9786).toString(16);
    document.body.style.backgroundColor ='#' + bgColor;
})