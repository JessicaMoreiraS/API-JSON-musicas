var campos = ['musica1', 'musica2', 'musica3']

document.getElementById("categoria").innerHTML="Musicas"
function escolheBanda(cantante){
    console.log(cantante)
    carregaMusicas(cantante)
}


//Metodo fetch() para buscar o arquivo dados.json transformando o resultado em um objeto usando o metodo response.json()
function carregaMusicas(cantante){
    fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {
        var musicasMorat = [corpo.moratMusica1, corpo.moratMusica2, corpo.moratMusica3];
        var musicasTimo = [corpo.timoMusica1, corpo.timoMusica2, corpo.timoMusica3];
        var musicasCharlieRodd = [corpo.charlieRoddMusica1, corpo.charlieRoddMusica2, corpo.charlieRoddMusica3];

        //acessando os dados do objeto json e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML(Front-End)
        if(cantante == "morat"){
            for(x=0; x<musicasMorat.length; x++){
                document.getElementById(campos[x]).innerHTML = musicasMorat[x].image+"<p>"+musicasMorat[x].name+"</p><p>"+musicasMorat[x].music+"</p><p>"+musicasMorat[x].albun+"</p><p>"+musicasMorat[x].style+"</p><p>"+musicasMorat[x].price+"</p>";
            }
        }
        if(cantante == "timo"){
            for(x=0; x<musicasTimo.length; x++){
                document.getElementById(campos[x]).innerHTML = musicasTimo[x].image+"<p>"+musicasTimo[x].name+"</p><p>"+musicasTimo[x].music+"</p><p>"+musicasTimo[x].albun+"</p><p>"+musicasTimo[x].style+"</p><p>"+musicasTimo[x].price+"</p>";
            }
        }
        if(cantante == "CharlieRodd"){
            for(x=0; x<musicasCharlieRodd.length; x++){
                document.getElementById(campos[x]).innerHTML = musicasCharlieRodd[x].image+"<p>"+musicasCharlieRodd[x].name+"</p><p>"+musicasCharlieRodd[x].music+"</p><p>"+musicasCharlieRodd[x].albun+"</p><p>"+musicasCharlieRodd[x].style+"</p><p>"+musicasCharlieRodd[x].price+"</p>";
            }
        }
    })
}