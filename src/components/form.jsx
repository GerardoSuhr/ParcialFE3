import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {

//seteo estados y le doy valores iniciales
    const [id, setId] = useState();
    const [idusuario, setIdusuario] = useState();
    const [isErrorId, setIsErrorid] = useState(false); 
    const [isErrorIdusuario, setIsErroridusuario] = useState(false); 

//creo variables boolean para validacion
const isValidId = Number(id)
const isValidIdusuario = Number(idusuario)

 // Función cuando se dispara onSubmit event
 function sendData(e) {

    e.preventDefault();
    if (isValidId && isValidIdusuario) {
        setIsErrorid(false);
        setIsErroridusuario(false);
        console.log("Datos enviados");
        alert (`id: ${id} - idusuario: ${idusuario}`);
        let respuesta = {id, idusuario}
        console.log(respuesta)
    }else if (isValidId) {
        setIsErrorValues(true);
        console.log("El id del usuario debe ser numérico");
        console.log(isValidIdusuario)
    }else if (isValidIdusuario){
        setIsErroridusuario(false);
        console.log("El id del ticket debe ser numérico");
    }else {
        setIsErrorid(true);
        setIsErroridusuario(true);
        console.log("Ambos ids debeb ser numéricos");
        console.log(isValidIdusuario)
    }
    // Reseteo el valor de los input
    setId();
    setIdusuario();
 }
     // Función cuando se dispara onChange event en el id input
  const onIdChange = (e) => {
    setId(e.target.value);
  };  
     // Función cuando se dispara onChange event en el idusuario input
  const onIdusuarioChange = (e) => {
    setIdusuario(e.target.value);
  };  

  return (
    <>
    <h1>Asignar ticket a un usuario</h1>

    <form onSubmit={sendData}>
    <div>
        <input   className={!isErrorId ? styles.input : styles.inputError}
            type="text"
            placeholder="Id del ticket"
            value={id}
            onChange={onIdChange}
            />

    </div>
    <div>
        <input   className={!isErrorIdusuario ? styles.input : styles.inputError}
            type="text"
            placeholder="Id del usuario"
            value={idusuario}
            onChange={onIdusuarioChange}
            />

    </div>
     <div>
          <button type="submit">Enviar</button>
        </div>
    </form>
    </>


  );

}

export default Form;