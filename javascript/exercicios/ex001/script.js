var horario = document.getElementById("horario");
var imagem = document.getElementById("imagem");
var hora = new Date().getHours();
var min = new Date().getMinutes().toString().padStart(2, '0')
    if (hora >= 18) {
        document.body.classList.add('noite');
        horario.innerHTML = `Boa Noite! Agora são ${hora}:${min}.`;
        if (hora >= 21) {
            imagem.src = 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=400'
        } else {
            imagem.src = 'https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    } else if (hora > 12) {
        document.body.classList.add('tarde');
        horario.innerHTML = `Boa Tarde! Agora são ${hora}:${min}.`
        if (hora >=16.5) {
            imagem.src = 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        } else {
            imagem.src = 'https://images.pexels.com/photos/2652496/pexels-photo-2652496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        };
    } else if (hora >= 6) {
        document.body.classList.add('manha');
        horario.innerHTML = `Bom Dia! Agora são ${hora}:${min}.`
        if (hora >= 11) {
            imagem.src = 'https://images.pexels.com/photos/27411634/pexels-photo-27411634/free-photo-of-mar-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=400'
        } else {
            imagem.src = 'https://images.pexels.com/photos/16035520/pexels-photo-16035520/free-photo-of-cabana-en-bois-de-pecheurs-sur-le-bord-de-la-rivere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        };
    } else {
        document.body.classList.add('madrugada');
        horario.innerHTML = `Boa Madrugada! Agora são ${hora}:${min}.`;
        imagem.src = 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=400'
    }



