import { useState } from "react";
import styles from "./tarjeta.module.css";

const pilotos = [ 
    { name: "Max Verstappen",
     team:"Oracle Red Bull Racing",
     car: "RB19",
     titles: 2,
     country: "Netherlands",
     flag: "https://es.wikipedia.org/wiki/Temporada_2023_de_F%C3%B3rmula_1#/media/Archivo:Flag_of_the_Netherlands.svg",
     imagePilot:"https://cdn-2.motorsport.com/images/mgl/Y99d13AY/s300/max-verstappen-red-bull-racing-1.webp",
     imageCar:"https://www.clarin.com/img/2023/02/03/z0xDbXuwW_1256x620__1.jpg"
 
 },
     { name: "Lewis Hamilton",
     team:"Mercedes-AMG PETRONAS Formula One Team",
     car: "W14",
     titles: 7,
     country: "United Kingdom",
     flag: "https://es.wikipedia.org/wiki/Temporada_2023_de_F%C3%B3rmula_1#/media/Archivo:Flag_of_the_United_Kingdom_(3-5).svg",
     imagePilot:"https://cdn-4.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
     imageCar:"https://i0.wp.com/automundo.com.ar/wp-content/uploads/2023/02/Mercedes-AMG-F1-W14-E-PERFORMANCE-3.jpg?ssl=1"
 }
 ]

const Tarjeta = () => {

   


let TarjetaPiloto = 
`Piloto : ${piloto[0].name} `
+
`Equipo : ${piloto.team} ` ;


console.log(pilotos)
return (
<>
<div className = {styles.padre}>
<div>{TarjetaPiloto}</div>

</div>
</>
)
}

export default Tarjeta ;
