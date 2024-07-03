export const postData = async (nomb, price, imagen) => {
  try {
    let response = await fetch("http://localhost:3001/productos", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom: nomb,
        price: price,
        imagen: imagen
      })
    });
    if (!response.ok) {
      throw new Error('error en la solicitud: ' + response.statusText);
    }
    let data = await response.json();
    return data;
  } catch (e) {
    console.log('error:', e);
    return null;
  }
};

