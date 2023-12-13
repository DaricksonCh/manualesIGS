import React from "react";

const ManualUsuario = () => {
  return (
    <div className="bg-gray-100 p-8">
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

        <img src="../../url.png" alt="img-Url" width="300" height="500" />


        <div className="mb-4">
          Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Esta
          constituye la pantalla principal en la página de entrada de la
          aplicación IGS (Inventario Gastronómico SENA).
        </div>
        {/* img index.html */}
        <div className="mb-4">
          Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Tras
          cargar la página de inicio de la aplicación IGS, se procederá al
          acceso al sistema mediante la validación con el número de
          identificación y la contraseña. Es importante destacar que, por
          defecto, tanto el número de identificación como la contraseña serán el
          mismo y corresponderán al número de documento de la persona.
        </div>
        {/* img login.png */}
        <div className="mb-4">
          Dentro del proyecto formativo IGS (Inventario Gastronómico SENA): Una
          vez el usuario sea validado, será dirigido automáticamente a la página
          principal de IGS.
        </div>
        {/* img home.png */}
        <div className="mb-4">
          <h3 className="font-bold">Administración de datos: </h3> Los usuarios
          tienen la capacidad de actualizar su información personal en la
          aplicación a través de la opción correspondiente ubicada junto al
          nombre del usuario.
        </div>
        {/* img user-data.png */}
        <div className="mb-4">
          En esta interfaz, los usuarios tienen la posibilidad de actualizar
          diversos datos personales, tales como el nombre, dirección de correo,
          y, de manera crucial, la contraseña de acceso a la aplicación.
        </div>
        {/* img update-user.png */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Control del Aplicativo</h2>
        <div className="mb-4">
          En la parte derecha de la pantalla estará ubicado un menú para
          facilitar el acceso y control del usuario al momento de usar el
          aplicativo.
        </div>
        {/* img */}
        <div className="mb-4">
          Es de importancia destacar que el usuario podrá minimizar y/o encoger
          el menú dando clic en el ícono representado como tres líneas
          horizontales.
        </div>
        {/* img */}
        {/* img */}
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
        {/* img */}
        <h3 className="mb-2">En la parte superior de la tabla se encontrará:</h3>
        <div className="mb-4">
          A la derecha, un botón que podrá ser utilizado para realizar nuevos
          registros. Este, al ser seleccionado, desplegará un modal con el que
          el usuario podrá diligenciar los datos requeridos para realizar el
          registro.
        </div>
        {/* img */}
        <div className="mb-4">
          Para que el registro sea exitoso, el usuario tendrá que hacer clic en
          un botón de confirmación. Después de eso, verá un mensaje ya sea de
          satisfacción o de fallo, según corresponda a la solicitud del cliente.
        </div>
        {/* img */}
        <div className="mb-4">
          A la izquierda, una sección donde el usuario podrá buscar productos
          previamente registrados. Para esta búsqueda, es necesario el nombre
          del producto que desea ver. Esta acción actualizará la tabla donde
          solo se mostrará información que coincida con la búsqueda.
        </div>
        {/* img */}
        <h3 className="mb-2">Botones Eliminar y Editar</h3>
        <div className="mb-4">
          Estos botones se encontrarán a lo largo de la tabla que lista la
          información de los elementos encontrados. Si el usuario selecciona
          eliminar, se le pedirá que confirme la acción por medio de una alerta
          que se desplegará en la pantalla.
        </div>
        {/* img delete */}
        <div className="mb-4">
          Si el usuario selecciona editar, se desplegará un modal muy similar al
          de registro, pero en este caso, contendrá la información que se
          relaciona al elemento seleccionado.
        </div>
        {/* img */}
        <div className="mb-4">
          Para que la actualización sea exitosa, el usuario tendrá que hacer
          clic en un botón de confirmación. Después de eso, verá un mensaje ya
          sea de satisfacción o de fallo, según corresponda a la solicitud del
          cliente.
        </div>
        {/* img */}
      </div>
    </div>
  );
};

export default ManualUsuario;
