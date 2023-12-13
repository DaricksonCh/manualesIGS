import React from "react";
import img1 from "../../public/url.png"
import img2 from "../../public/index.png"
import img3 from "../../public/logIn.png"
// import img4 from "../../public/url.png"
import img5 from "../../public/editar.png"
// import img6 from "../../public/url.png"
import img7 from "../../public/menu.png"
import img8 from "../../public/menuDesplegado.png"
import img9 from "../../public/tabla.png"
import img10 from "../../public/nuevo.png"
import img11 from "../../public/exito.png"
import img12 from "../../public/fallo.png"
import img13 from "../../public/buscar.png"
import img14 from "../../public/editar.png"
import img15 from "../../public/confirmacion.png"

const ManualUsuario = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center text-lg leading-10">
      <div className="container p-8 w-[60%]">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Manual de Usuario</h1>
          {/* Favor de realizar un índice de navegación */}
        </div>
        <div className="mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Objetivo</h2>
            <p className="text-gray-700">
              Capacitar a los participantes del proyecto IGS (Inventory Gastronomy
              SENA) en la comprensión y dominio de los pasos específicos para la
              gestión eficiente del aplicativo SIREP, abordando todas sus
              características y funcionalidades. El objetivo es garantizar que
              todos los usuarios del sistema adquieran un conocimiento integral
              del manejo del aplicativo, promoviendo así una experiencia óptima en
              su utilización.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Definiciones</h2>
            <p className="text-gray-700">
              <span className="font-bold">IGS:</span> Sistema de control de
              insumos del área gastronómica.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Desarrollo del Manual de Usuario</h2>
          <div className="mb-4">
            <samp className="font-bold">ACCESO A LA APLICACIÓN</samp> El acceso a
            la aplicación IGS se limita a la red interna del SENA, garantizando su
            uso exclusivo dentro de la institución. La aplicación es accesible
            desde cualquier dispositivo con navegador web mediante la siguiente
            URL: <span className="font-bold">{/* URL de IGS */}</span>.
          </div>

          <img src={img1} alt="img-Url" />


          <div className="mb-4">
            Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Esta
            constituye la pantalla principal en la página de entrada de la
            aplicación IGS (Inventario Gastronómico SENA).
          </div>
          <img src={img2} alt="img-index" />
          <div className="mb-4">
            Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Tras
            cargar la página de inicio de la aplicación IGS, se procederá al
            acceso al sistema mediante la validación con el número de
            identificación y la contraseña. Es importante destacar que, por
            defecto, tanto el número de identificación como la contraseña serán el
            mismo y corresponderán al número de documento de la persona.
          </div>
          <img src={img3} alt="login" />
          <div className="mb-4">
            Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Una
            vez el usuario sea validado, será dirigido automáticamente a la página
            principal de IGS.
          </div>
          {/* <img src={img4} alt="home" /> */}
          <h3 className="font-bold mb-5 text-center">Administración de datos: </h3>
          <div className="flex mb-8">
            <div className="w-1/2 pr-8 ">

              Los usuarios tienen la capacidad de actualizar su información personal en la aplicación a través de la opción correspondiente ubicada junto al nombre del usuario.
            </div>
            <img style={{ width: '30%'}} src={img5} alt="img-menu-config" />
            <p className="w-1/2 pr-8 p-2">
            En esta interfaz, los usuarios tienen la posibilidad de actualizar
            diversos datos personales, tales como el nombre, dirección de correo,
            y, de manera crucial, la contraseña de acceso a la aplicación.
          </p>
          </div>

          
          {/* <img src={img6} alt="Update-info-user" /> */}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Control del Aplicativo</h2>
          <div className="mb-4">
            En la parte derecha de la pantalla estará ubicado un menú para
            facilitar el acceso y control del usuario al momento de usar el
            aplicativo.
          </div>
          <img src={img7} alt="menu" />
          <div className="mb-4">
            Es de importancia destacar que el usuario podrá minimizar y/o encoger
            el menú dando clic en el ícono representado como tres líneas
            horizontales.
          </div>
          <img src={img8} alt="login" />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Realizar Registros en la Base de Datos
          </h2>
          <div className="mb-4">
            Con el fin de realizar una interfaz fácil de manejar, todas las
            páginas de control tienen la misma lógica de funcionamiento. Una vez
            hayan seleccionado una opción desde el menú de inicio, se desplegará
            una tabla que va a contener la información de dicho elemento, por
            ejemplo, "proveedores contendrá una tabla con todos los proveedores".
            Además de esta información, se desplegarán unos botones para eliminar
            o editar la información de un determinado objeto, según la necesidad
            del usuario.
          </div>
          <img src={img9} alt="tabla-proveedores" />
          <h3 className="mb-2">En la parte superior de la tabla se encontrará:</h3>
          <div className="mb-4">
            A la derecha, un botón que podrá ser utilizado para realizar nuevos
            registros. Este, al ser seleccionado, desplegará un modal con el que
            el usuario podrá diligenciar los datos requeridos para realizar el
            registro.
          </div>
          <img src={img10} alt="img-new-object" />

          <div className="mb-4">
            Para que el registro sea exitoso, el usuario tendrá que hacer clic en
            un botón de confirmación. Después de eso, verá un mensaje ya sea de
            satisfacción o de fallo, según corresponda a la solicitud del cliente.
          </div>
          <h3 className="text-2xl font-bold ">-Mensaje de operación exitosa</h3>
          <img src={img11} alt="img-new-object" />
          <h3 className="text-2xl font-bold"> -Mensaje de operación no exitosa</h3>
          <img src={img12} alt="img-new-object" />
          <div className="mb-4">
            A la izquierda, una sección donde el usuario podrá buscar productos
            previamente registrados. Para esta búsqueda, es necesario el nombre
            del producto que desea ver. Esta acción actualizará la tabla donde
            solo se mostrará información que coincida con la búsqueda.
          </div>
          <img src={img13} alt="img-new-object" />
          <h3 className="mb-2">Botones Eliminar y Editar</h3>
          <div className="mb-4">
            Estos botones se encontrarán a lo largo de la tabla que lista la
            información de los elementos encontrados. Si el usuario selecciona
            eliminar, se le pedirá que confirme la acción por medio de una alerta
            que se desplegará en la pantalla.
          </div>
          <img src={img15} alt="img-new-object" />
          <div className="mb-4">
            Si el usuario selecciona editar, se desplegará un modal muy similar al
            de registro, pero en este caso, contendrá la información que se
            relaciona al elemento seleccionado.
          </div>

          <img src={img14} alt="img-new-object" />
          <div className="mb-4">
            Para que la actualización sea exitosa, el usuario tendrá que hacer
            clic en un botón de confirmación. Después de eso, verá un mensaje ya
            sea de satisfacción o de fallo, según corresponda a la solicitud del
            cliente.
          </div>
          <h3 className="text-2xl font-bold ">-Mensaje de operación exitosa</h3>
          <img src={img11} alt="img-new-object" />
          <h3 className="text-2xl font-bold"> -Mensaje de operación no exitosa</h3>
          <img src={img12} alt="img-new-object" />
        </div>
      </div>
    </div>
  );
};

export default ManualUsuario;
