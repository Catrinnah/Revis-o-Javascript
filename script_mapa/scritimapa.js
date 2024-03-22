function inserir_mapas() {
    let selecionar_mapas = document.getElementById("selecionar").value;
    console.log(selecionar_mapas);
    let imagem = document.getElementById("imagem");
    console.log(imagem);
    imagem.src =  "mapas/" + selecionar_mapas.value + ".gif"

}