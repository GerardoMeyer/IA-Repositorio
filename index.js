// Función buscar pokemon

function buscarPokemon() {
    let nombre = ''
    let peso = []
    let altura = []
    let baseExperience = []
    let pokemonExistente = []




    // Información introducida por el usuario
    let pokemon = document.querySelector('.txtPokemon').value
    pokemon = pokemon.toLowerCase()




    // DOM de los divs para la tarjeta del pokemon
    let pokemonNombre = document.querySelector('.nomPokemon')
    let pokemonInfo = document.querySelector('.infoPokemon')
    let pokemonImg = document.querySelector('.imgPokemon')




    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        // Aquí podemos hacer lo que queramos con el objeto traído del server
        .then((data) => {
            console.log(data)
            // Nombre pokemon
            nombre = data.name
            nombre = primeraLetraMayuscula(nombre)

            // Información del pokemon
            //HP  
            //ATTACK  
            //ABILITIES
            altura.push(data.height)
            peso.push(data.weight)
            baseExperience.push(data.base_experience)
            console.log(peso)

            // Imagen del pokemon
            url = data.sprites.front_default
            url = url.toString()

            // Crear carta por carta en el contenedor de cartas
            let contenedorCartas = document.querySelector('.containerCards')

            // Creando el título
            let newTitulo = data.id

            // Mapeando habilidades pokemon
            let habilidades = []
            array = data.abilities
            // Añadiendo cada habilidad al array habilidades en el FOREACH
            array.forEach(habilidad =>
                habilidades.push(primeraLetraMayuscula(habilidad.ability.name)),
                console.log(habilidades)
            )

            // Mapeando movimientos del pokemon
            let tipos = []
            arrayTipo = data.types
            //Añadiendo los tipos del pokemon
            arrayTipo.forEach(tipo =>
                tipos.push(primeraLetraMayuscula(tipo.type.name))
            )

            // Creando el contenido de la carta
            let newPokemon = document.createElement('div')
            newPokemon.setAttribute('class', 'card-container-new mb-4 border-dark bg-transparent')
            newPokemon.style.width = '20rem'
            newPokemon.innerHTML = `
                        <br>
                        <div>
                        <div class="cardFinal">
                            <div class="card-header border-dark">
                                <!-- Número de pokemon encabezado -->
                                <h4> Número pokemon: ${newTitulo} </h4>
                                <!-- Contenedor imagen Pokemon -->
                                <div class="imgPokemon">
                                    <img src="${url}" width="100%">
                                </div>
                            </div>
                            <div class="card-description text-center border-dark">
                            <!-- Contenedor información pokemon -->
                            <div class="nomPokemon">
                                <h2>${nombre}</h2>
                            </div>
                            <!-- Contenedor información pokemon -->
                            <div class="infoPokemon">
                                <b>Weight:</b> ${peso} <br> <b>Height:</b> ${altura} <br> <b>Base experience:</b> ${baseExperience} <br> <b>Abilities:</b> ${habilidades}
                                <br> <b>Type:</b> ${tipos}
                            </div>
                            </div>
                            </div>
                        </div>
                        <br> <br> <br> <br>`
            contenedorCartas.appendChild(newPokemon)
        })
        .catch((e) => {
            alert(`El pokemon no se ha encontrado, intente nuevamente`)
            console.log(e)
            // Vaciar el INPUT al escribir algo erróneo
            document.querySelector('.txtPokemon').value = ""
            document.querySelector('.card').value = ""
        })
        .finally(document.querySelector('.txtPokemon').value = "")
}

// Primer letra mayúscula función
let primeraLetraMayuscula = (cadena) => {
    let primerCaracter = cadena.charAt(0).toUpperCase();
    let restoDeLaCadena = cadena.substring(1, cadena.length);
    return primerCaracter.concat(restoDeLaCadena);
}


// Función limpiar historial de pokemons
let limpiarPokemon = () => {
    /* let contenedorPokemons = document.querySelector('.containerCards')
    contenedorPokemons.innerHTML = "" */
    var answer = window.confirm("¿Quieres borrar los pokemons buscados?");
    if (answer) {
        let contenedorPokemons = document.querySelector('.containerCards')
        contenedorPokemons.innerHTML = ""
    } else {
        return
    }
}