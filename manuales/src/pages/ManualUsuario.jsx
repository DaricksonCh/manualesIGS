import React from "react";

const ManualUsuario = () => {
  return (
    <div>
      <div className="">
        <h1>Manual de Usuario</h1>
        {/* favor realizar indice de nav */}
      </div>
      <div className="">
        <div className="">
          <h2> Objetivo</h2>
          <p>
            Capacitar a los participantes del proyecto IGS (Inventory Gastronomy
            SENA) en la comprensión y dominio de los pasos específicos para la
            gestión eficiente del aplicativo SIREP, abordando todas sus
            características y funcionalidades. El objetivo es garantizar que
            todos los usuarios del sistema adquieran un conocimiento integral
            del manejo del aplicativo, promoviendo así una experiencia óptima en
            su utilización.
          </p>
        </div>
        <div className="">
          <h2>Definiciones</h2>
          <p>
            <span>IGS: </span>Sistema de control de insumos del área
            gastronómica
          </p>
        </div>
      </div>
      <div className="">
        <h2> DESARROLLO DEL MANUAL DE USUARIO</h2>
        <p>
          <samp>ACCESO A LA APLICACIÓN</samp>
          El acceso a la aplicación IGS se limita a la red interna del SENA,
          garantizando su uso exclusivo dentro de la institución. La aplicación
          es accesible desde cualquier dispositivo con navegador web mediante la
          siguiente URL: <span>{/* url de igs */} </span>
        </p>
        {/* img url */}
        <p>
          Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Esta
          constituye la pantalla principal en la página de entrada de la
          aplicación IGS (Inventario Gastronómico SENA).
        </p>
        {/* img index.html */}
        <p>
          Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Tras
          cargar la página de inicio de la aplicación IGS, se procederá al
          acceso al sistema mediante la validación con el número de
          identificación y la contraseña. Es importante destacar que, por
          defecto, tanto el número de identificación como la contraseña serán el
          mismo y corresponderán al número de documento de la persona.
        </p>
        {/* img login.png */}
        <p>
          Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Una
          vez el usuario sea validado, será dirigido automáticamente a la página
          principal de IGS.
        </p>
        {/* img home.png */}
        <p>
          <h3>Administración de datos: </h3>
          Los usuarios tienen la capacidad de actualizar su información personal
          en la aplicación a través de la opción correspondiente ubicada junto
          al nombre del usuario.
        </p>
        {/* img user-data.png */}
        <p>
          En esta interfaz, los usuarios tienen la posibilidad de actualizar
          diversos datos personales, tales como el nombre, dirección de correo
          y, de manera crucial, la contraseña de acceso a la aplicación.
        </p>
        {/* img update-user.png */}
      </div>
    </div>
  );
};

export default ManualUsuario;
