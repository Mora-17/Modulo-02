const cargarInformacion = async() => {

const respuesta = await fetch ('../json/persona.json');
const persona = await respuesta.json ();
console.log ('persona obtenida', persona)
} 

// forma 1

/*
const btnInfo = document.getElementById('btn-Info')
btnInfo.addEventListener ('click', cargarInformacion) */

const cargarApi =  async() => {
    try {
        const respuesta1 = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto');
        const pokemones = await respuesta1.json ();
         console.log ('pokemones obtenidos', pokemones)
    } catch (error) { 
        console.error ('Hubo error inesperado', error);
        alert ('Hubo error inesperado, intente mas tarde')
        
    }


}

const mostrarInfo = (persona) => {
    console.log('Vamos a construir un html');

    const contenedor = document.getElementById('datos');

    contenedor.innerHTML = `
        <h2 class="miNombre">${persona.nombre}</h2>
            <p class="miEdad">Edad: ${persona.edad}</p>
            <div class="misHobbies">
                <h3>Hobbies</h3>
                <li>hobbie1</li>
                <li>hobbie2</li>
                <li>hobbie3</li>
            </div>
    `
}