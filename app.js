'use strict'

const mapa = document.querySelector('#map')
const sigla = document.querySelector('#sigla')
const getEstado = ({ target }) => {
   const estado = target.id.replace('BR-', ' ')
   const valorSigla = sigla.innerHTML = estado  
}

mapa.addEventListener('click', getEstado)

