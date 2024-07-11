// funcion para agregar un nuevo usuario
export let postData = async (email, password) => {
  try {
    // hace una peticion POST a la API con la URL para agregar un usuario
    let response = await fetch("http://localhost:3001/users", {
      method: "POST", // metodo HTTP utilizado para crear datos
      mode: "cors", // habilita el uso de CORS
      credentials: "same-origin", // incluye credenciales en la peticion
      headers: {
        "Content-Type": "application/json", // tipo de contenido que se envia al servidor
      },
      body: JSON.stringify({
        email: email, // email del nuevo usuario
        password: password // password del nuevo usuario
      })
    });

    // convierte la respuesta de la API a JSON
    let data = await response.json();
    return data; // devuelve los datos del nuevo usuario
  } catch (e) {
    // maneja cualquier error que ocurra durante la peticion
    console.log(e);
    return null; // devuelve null en caso de error
  }
};
