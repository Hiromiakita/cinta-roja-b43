import React from 'react';
import './App.css';

//importar un componente de otro archivo
import Card from './componentes/Card/Card';
import Navbar from './componentes/Navbar/Navbar';
import PerfilUsuario from './componentes/PerfilUsuario/PerfilUsuario';

function App() {

  let usuarios = [
    {name: 'Jesús', edad: 20, ciudad: 'CDMX'},
    {name: 'Diego', edad: 21, ciudad: 'GDL'},
    {name: 'Julia', edad: 35, ciudad: 'MTY'},
    {name: 'Ana', edad: 40, ciudad: 'OAX'},
    {name: 'Ricardo', edad: 17, ciudad: 'SP'},
    {name: 'Hiromi', edad: 17, ciudad: 'X'},
    {name: 'Jesús', edad: 20, ciudad: 'CDMX'},
    {name: 'Diego', edad: 21, ciudad: 'GDL'},
    {name: 'Julia', edad: 35, ciudad: 'MTY'},
    {name: 'Ana', edad: 40, ciudad: 'OAX'},
    {name: 'Ricardo', edad: 17, ciudad: 'SP'},
    {name: 'Hiromi', edad: 17, ciudad: 'X'}

  ];



  return (
    <div>
      <Navbar />
      
      <h1 className="titulo">Esta es nuestra primer app</h1>
      <Card titulo="Alojamiento 1" descripcion="Soy la descripción 1" calificacion="5"/>
      <Card titulo="Alojamiento 2" descripcion="Soy la descripción 2" calificacion="2"/>
      <Card titulo="Alojamiento 3" descripcion="Soy la descripción 3" calificacion="3"/>
      <Card titulo="Alojamiento 4" descripcion="Soy la descripción 4" calificacion="1"/>
  

      { usuarios.map( (usuario, index) => {
        return (
          <PerfilUsuario 
            key={index}
            nombre={usuario.name} 
            edad={usuario.edad}
            ciudad={usuario.ciudad}  
          />
        )
      } )}

    </div>
  );
}

export default App;
