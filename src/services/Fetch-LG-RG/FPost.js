export let postData = async (email, password) => {
    try {
      let response = await fetch("http://localhost:3001/users", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password

        })
      });
      let data = await response.json();
      return data;
    } catch(e) {
      console.log(e);
      return null;
    }
  }