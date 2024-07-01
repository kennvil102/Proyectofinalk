export let postData = async () => {
    try {
      let response = await fetch("http://localhost:3001/productos", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nom:nomb,
            price:price
        })
      });
      let data = await response.json();
      return data;
    } catch(e) {
      console.log(e);
      return null;
    }
  }