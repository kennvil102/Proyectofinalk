const apiUrl = "http://localhost:3001/productos";
export let getData = async () => {
  try {
     
    let response = await fetch(apiUrl, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  } catch(e) {
    console.log(e);
    return null;
  }
}