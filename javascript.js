let filmes = [{
    id: 1,
    imagemDoFilme: 'clube da luta.jpg' ,
    NomeDesseFilme: 'Clube da Luta',
    SinopseDesseFilme: 'Jack é um executivo jovem, trabalha como investigador de seguros, mora confortavelmente, mas ele está ficando cada vez mais insatisfeito com sua vida medíocre. Para piorar ele está enfrentando uma terrível crise de insônia, até que encontra uma cura inusitada para o sua falta de sono ao frequentar grupos de auto-ajuda. Nesses encontros ele passa a conviver com pessoas problemáticas como a viciada Marla Singer e a conhecer estranhos como Tyler Durden. Misterioso e cheio de ideias, Tyler apresenta para Jack um grupo secreto que se encontra para extravasar suas angústias e tensões através de violentos combates corporais.'
    },
    {
    id: 2,
    imagemDoFilme:'esquadrao suicida750.jpg',
    NomeDesseFilme: 'O Esquadrão Suicida',
    SinopseDesseFilme: 'Liderados por Sanguinário, Pacificador, Coronel Rick Flag, e pela psicopata favorita de todos, Arlequina, o Esquadrão Suicida está disposto a fazer qualquer coisa para escapar da prisão. Armados até os dentes e rastreados pela equipe de Amanda Waller, eles são jogados (literalmente) na remota ilha Corto Maltese, repleta de militantes adversários e forças de guerrilha. O grupo de supervilões busca destruição, mas basta um movimento errado para que acabem mortos.'
    },

    {
    id: 3,
    imagemDoFilme:'os croods750.jpg',
    NomeDesseFilme:'Os Croods',
    SinopseDesseFilme: 'Em plena era pré-histórica, escondidos na maior parte do tempo dentro de uma caverna, vivem Grug, a esposa Ugga, a vovó, o garoto Thunk, a pequena e feroz Sandy e a jovem Eep. Eles são os Croods, uma família liderada por um pai que morre de medo do mundo exterior. Só que grandes transformações estão para acontecer, pois a adolescente Eep acaba conhecendo o também jovem Guy e ele vai apresentar um incrível mundo novo, para o desespero do paizão protetor. Agora, juntos, eles vão enfrentar grandes desafios e se adaptar a uma nova e divertida era..'


    },

    {
        id: 4,
        imagemDoFilme:'Scream-5.png',
        NomeDesseFilme: 'Panico 5',
        SinopseDesseFilme: 'Pânico é a quinta parte da franquia clássica de terror iniciada nos anos 90, sendo uma sequência direta dos acontecimentos do filme de 2011, que mostrará uma mulher voltando para sua cidade natal e tentando descobrir quem está cometendo os atuais crimes cruéis, vinte e cinco anos depois que uma série de assassinatos brutais chocou a pacata cidade de Woodsboro, na Califórnia. Agora um novo assassino veste a máscara do Ghostface e começa a mirar em um grupo de adolescentes, o que será capaz de ressuscitar segredos do passado mortal da cidade, além de reacender traumas nos sobreviventes, que, novamente, precisaram enfrentar essa ameaça obscura e violenta.'


    },

    {
        id: 5,
        imagemDoFilme: 'um lugar silencioso.jpg',
        NomeDesseFilme: 'Um lugar silencioso',
        SinopseDesseFilme:'Um Lugar Silencioso mostra uma realidade pós-apocaliptica, onde a população da Terra foi dizimada por uma entidade assustadora que ataca quando escuta um menor sinal de barulho. Em uma fazenda dos Estados Unidos, acompanhamos uma família do meio-oeste que tenta se manter em total silêncio para sobreviver à ameaça que ronda a sua casa.',

    }
]

//variaveis recebendo os valores que vao ser mudados dinamicamente
const imagemFilme = document.querySelector('#imagemFilme')
const tituloFilme = document.querySelector('#tituloFilme')
const sinopseFilme = document.querySelector('#sinopseFilme')


// atrelando os botões
const btnComedia = document.querySelector('#btnComedia')
const btnAcao = document.querySelector('#btnAcao')
const btnHorror = document.querySelector('#btnHorror')
const btnSuspense = document.querySelector('#btnSuspense')
const btnDrama = document.querySelector('#btnDrama')
 

//variavel para valor/filme inicial
let itemAtual = 0

//função para n ter problemas no carregamento do filme inicial
window.addEventListener('DOMContentLoaded', function() {
    mostrarFilme(itemAtual)
    
})

//função pra mudar o filme
function mostrarFilme(itemAtual){
    let item = filmes[itemAtual]
    imagemFilme.src = item.imagemDoFilme
    tituloFilme.textContent = item.NomeDesseFilme
    sinopseFilme.textContent = item.SinopseDesseFilme
}

btnComedia.addEventListener('click', function(){
    itemAtual = 2
    mostrarFilme(itemAtual)

})

btnAcao.addEventListener('click', function(){
    itemAtual = 1
    mostrarFilme(itemAtual)
})

btnHorror.addEventListener('click', function(){
    itemAtual = 3
    mostrarFilme(itemAtual)

})

btnSuspense.addEventListener('click', function(){
    itemAtual = 4
    mostrarFilme(itemAtual)

})

btnDrama.addEventListener('click', function(){
    itemAtual = 0
    mostrarFilme(itemAtual)

})