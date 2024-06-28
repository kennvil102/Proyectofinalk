import { getData } from "../services/FGet"

const Login = () => {
  const []
  async function datos() {
     const datoss= await getData()
    console.log("datos",datoss)

    
  }
  datos()
   
  return (
    <div>
      <input type="text" placeholder="Usuario" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Contrasena" />
       <button>iniciar sesion</button>

    </div>
  )
}

export default Login
