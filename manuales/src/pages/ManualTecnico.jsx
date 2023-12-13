import React from "react";
import Node from "../../img/node.png";
import Mysql from "../../img/mysql.png";
import Npm from "../../img/npm.png";
import Apache from "../../img/apache.png";
import NodeInstall from "../../img/nodeIntall.png";
import npmInstall from "../../img/npmIntall.png";
import MysqlInstall from "../../img/mysql2.png";
import Pm2Install from "../../img/pm2.png";
import ApacheInstall from "../../img/apcheIntall.png";
import PhpInstall from "../../img/phpinstall.png";

const ManualTecnico = () => {
  return (
  <div className="bg-gray-100 flex items-center justify-center text-lg leading-10">
    <div className="container p-8 w-[60%]">

      <div id="objetivoGeneral" className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Objetivo general:</h1>
        <p className="text-gray-700">
          El objetivo de este manual es brindar información necesaria a los
          administradores que llevarán a cabo el control de la plataforma de los
          programas y herramientas utilizadas para el desarrollo y configuración
          del aplicativo de IGS.
        </p>
      </div>

      <div id="objetivosEspecificos" className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Objetivos específicos</h2>
        <ol className="list-decimal pl-6">
          <li className="text-gray-700 mb-2">
            Identificar y catalogar de manera precisa todos los insumos
            alimenticios a ser incluidos en el inventario.
          </li>
          <li className="text-gray-700 mb-2">
            Desarrollar un sistema de codificación eficiente para facilitar la
            identificación y búsqueda rápida de los productos en el inventario.
          </li>
          <li className="text-gray-700 mb-2">
            Establecer protocolos y procedimientos para el registro y
            actualización periódica de los niveles de existencias de los
            insumos.
          </li>
          <li className="text-gray-700 mb-2">
            Capacitar a los usuarios y administradores en el uso adecuado de la
            plataforma, programas y herramientas relacionadas con el aplicativo
            de IGS.
          </li>
          <li className="text-gray-700 mb-2">
            Optimizar la eficiencia del proceso de gestión de inventario
            mediante la identificación y eliminación de posibles cuellos de
            botella.
          </li>
          <li className="text-gray-700 mb-2">
            Establecer un sistema de alertas para notificar a los
            administradores sobre niveles bajos de existencias o productos
            próximos a caducar.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Introducción</h2>
        <p className="text-gray-700 leading-9">
          Este manual se realiza con el fin de detallar el sistema en términos
          técnicos, proporcionando los pasos necesarios para realizar la
          correcta instalación del sistema IGS. IGS tiene como objetivo
          facilitar el manejo de los insumos alimenticios que ingresan y se
          utilizan en la unidad productiva de gastronomía. El uso de este manual
          está recomendado única y exclusivamente para el administrador
          encargado del control y/o instalación del sistema.
        </p>
        <p className="text-gray-700">
          La configuración de este manual está realizada para el sistema
          operativo Linux - Ubuntu Server.
        </p>
      </div>

      <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Características de Cómputo</h2>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <p className="text-lg font-semibold">Equipo de cómputo con las siguientes características:</p>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">RAM: <span className="font-semibold">4GB</span></li>
              <li className="text-gray-700">ALMACENAMIENTO: <span className="font-semibold">Mínimo 120GB</span></li>
              <li className="text-gray-700">PROCESADOR: <span className="font-semibold">Intel Core Celeron N4020 o superior</span></li>
            </ul>
          </li>
          <li className="mb-4">
            <p className="text-lg font-semibold">Información técnica del servidor implementado.</p>
            <ul className="list-disc pl-6">
              <li className="text-gray-700">Procesador - <span className="font-semibold">Intel Xeon (R) W-2145 CPU@</span></li>
              <li className="text-gray-700">Frecuencia - <span className="font-semibold">3.70 GHz</span></li>
              <li className="text-gray-700">RAM instalada <span className="font-semibold">32.0 GB (31.7 GB Usable)</span></li>
              <li className="text-gray-700">Tipo de sistema – <span className="font-semibold">Sistema operativo de 64 bits, procesador basado en x64</span></li>
              <li className="text-gray-700">Sistema operativo – <span className="font-semibold">Linux Ubuntu Server</span></li>
              <li className="text-gray-700">Versión – <span className="font-semibold">22.04</span></li>
              <li className="text-gray-700">Disco duro – <span className="font-semibold">Mecánico 1TB</span></li>
            </ul>
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Privilegios de Administrador</h2>
        <p className="text-lg font-semibold mb-2">Sistema Operativo:</p>
        <p className="text-gray-700 mb-2">
          Windows 7/8/8.1/10/11 – Linux – MacOS – IOS - Android.
        </p>
        <p className="text-lg font-semibold mb-2">Navegadores de Internet:</p>
        <p className="text-gray-700 mb-2">Google Chrome, Opera, Safari.</p>
      </div>

      <div className="mb-12 p-4 bg-gray-100 leading-10 text-lg">
        <div className="flex mb-4 h-64">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">Node.js</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Node.js</span>: Es un entorno controlado por eventos diseñado
              para crear aplicaciones escalables, permitiéndote establecer y gestionar
              múltiples conexiones al mismo tiempo. Gracias a esta característica, no
              tienes que preocuparte con el bloqueo de procesos, pues no hay bloqueos.
            </p>
          </div>
            <img className="w-1/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={Node} alt="" />
        </div>

        <div className="flex mb-4">
          <div className="flex-grow h-64">
            <h2 className="text-2xl font-bold">MySQL</h2>
            <p className="text-gray-700">
              <span className="font-semibold">MySQL</span>: Es un sistema de gestión de bases de datos
              relacional que permite almacenar y acceder a los datos a través de múltiples
              motores de almacenamiento, incluyendo InnoDB, CSV y NDB. MySQL también es
              capaz de replicar datos y particionar tablas para mejorar el rendimiento y
              la durabilidad.
            </p>
          </div>
          <img className="w-1/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={Mysql} alt="" />
        </div>

        <div className="flex mb-4 h-64">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">NPM</h2>
            <p className="text-gray-700">
              <span className="font-semibold">npm</span>: Es el sistema de gestión de paquetes por
              defecto para Node.js, un entorno de ejecución para JavaScript, bajo Artistic
              License 2.0.
            </p>
          </div>
          <img className="w-1/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={Npm} alt="" />
        </div>

        <div className="flex">
          <div className="flex-grow h-64">
            <h2 className="text-2xl font-bold">Apache</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Apache</span>: Apache, o Apache HTTP Server, es un
              servidor web de código abierto y gratuito desarrollado y mantenido por la
              Apache Software Foundation. Es uno de los servidores web más populares y
              ampliamente utilizados en el mundo. Apache proporciona un entorno seguro y
              eficiente para la entrega de contenido web, permitiendo a los usuarios
              publicar sus sitios y aplicaciones de manera efectiva. Ofrece soporte para
              diversos módulos y extensiones, lo que lo hace altamente configurable y
              adaptable a diferentes necesidades.
            </p>
          </div>
          <img className="w-1/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={Apache} alt="" />
        </div>
      </div>

      <div className="mb-8 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">INSTALACIÓN DEL SERVIDOR LOCAL</h2>
        <p className="text-gray-700 mb-4">
          La instalación del <span className="font-bold">servidor local</span> constituye el proceso de configurar
          el entorno donde se ejecutará la aplicación, así como el alojamiento
          de los archivos asociados. Este <span className="font-bold">servidor local</span> permite compartir la
          aplicación, brindando la posibilidad a otros usuarios de acceder a
          ella. En este manual, se aborda la instalación en un entorno <span className="font-bold">Ubuntu
          Server</span>. Es crucial contar con privilegios de Super Usuario para llevar
          a cabo la instalación correcta de los paquetes y programas necesarios.
        </p>
        <p className="text-gray-700 mb-4">
          Antes de proceder con la instalación de estos programas y paquetes, se
          recomienda realizar una actualización de los repositorios mediante el
          comando <span className="font-bold">sudo apt-get update.</span> Además, para
          asegurar la obtención de las versiones más recientes, se
          puede ejecutar <span className="font-bold">sudo apt-get upgrade</span>.
        </p>
      </div>

      <div>
          <div className="flex mb-8">
            <div className="w-2/4 pr-8">
              <h2 className="text-2xl font-bold mb-4">
                INSTALACIÓN DE Node.JS
              </h2>
              <p className="text-gray-700 mb-4">
                Para instalar <span className="font-bold">NodeJS</span>en Ubuntu
                Server se debe estar iniciado como super usuario o usuario root.
                <span className="font-bold">
                  a sudo apt-get install nodejs{" "}
                </span>
                . Y deberá esperar hasta que finalice la descarga.
              </p>
              <p className="text-gray-700 mb-4">
                Ahora puede comprobar que la instalación haya resultado con
                éxito ejecutando la siguiente entrada{" "}
                <span className="font-bold">npm -v</span>
              </p>
            </div>
            <img className="w-2/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={NodeInstall} alt="" />
          </div>

          <div className="flex mb-8">
            <div className="w-2/4 pr-8">
              <h2 className="text-2xl font-bold mb-4">
                INSTALACIÓN DE npm (Node Package Manager)
              </h2>
              <p className="text-gray-700 mb-4">
                PPara instalar npm en Ubuntu Server se debe estar iniciado como
                super usuario o usuario root. Ejecutando la siguiente entrada en
                la consola
                <span className="font-bold">sudo apt-get install npm.</span>. Y
                deberá esperar hasta que finalice la descarga.
              </p>
              <p className="text-gray-700">
                Para comprobar la instalación del programa se ejecuta la
                siguiente entrada <span className="font-bold">npm -v</span> y si
                todo ha salido bien deberá mostrar la siguiente salida. Lo cual
                sería en el entorno principal versión 8.5.1 de npm.
              </p>
            </div>
            <img className="w-2/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={NodeInstall} alt="" />
          </div>
        </div>




      <div>
        <div className="flex mb-8">
          <div className="w-2/4 pr-8">
            <h2 className="text-2xl font-bold mb-4">INSTALACIÓN DE MySQL</h2>
            <p className="text-gray-700 mb-4">
              Para instalar <span className="font-bold">MySQL</span> en Ubuntu Server se debe estar iniciado como super
              usuario o usuario root. Ejecutando la siguiente entrada en la consola
              <span className="font-bold">sudo apt-get install mysql-server</span>. Y deberá esperar hasta que finalice
              la descarga.
            </p>
            <p className="text-gray-700 mb-4">
              Una vez finalice la descarga se debe proceder a instalar el paquete ya
              que MySQL necesita de unas configuraciones adicionales. Para iniciar
              la configuración se ejecuta la siguiente entrada <span className="font-bold">sudo mysql_secure_installation</span>
            </p>
            <p className="text-gray-700">
              Para comprobar la instalación del programa se ejecuta la siguiente
              entrada <span className="font-bold">mysql -u root</span> y si todo ha salido bien deberá mostrar la
              siguiente salida. Lo cual sería en el entorno principal de MySQL en
              Linux.
            </p>
          </div>
          <img className="w-2/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={MysqlInstall} alt="" />
        </div>

        <div className="flex mb-8">
          <div className="w-2/4 pr-8">
            <h2 className="text-2xl font-bold mb-4">INSTALACIÓN DE PM2</h2>
            <p className="text-gray-700 mb-4">
              Para instalar pm2 en Ubuntu Server se debe estar iniciado como super
              usuario o usuario root. Ejecutando la siguiente entrada en la consola
              <span className="font-bold">sudo npm install pm2@latest -g</span>. Y deberá esperar hasta que finalice la
              descarga.
            </p>
            <p className="text-gray-700">
              Para comprobar la instalación del programa se ejecuta la siguiente
              entrada <span className="font-bold">pm2 -v</span> y si todo ha salido bien deberá mostrar la siguiente
              salida. Lo cual sería en el entorno principal de pm2 en Linux.
            </p>
          </div>
          <img className="w-2/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={Pm2Install} alt="" />
        </div>
      </div>
      <div>
        <div className="flex mb-8">
          <div className="w-2/4 pr-8">
            <h2 className="text-2xl font-bold mb-4">INSTALACION DE APACHE</h2>
            <p className="text-gray-700 mb-4">
              Para instalar Apache en Ubuntu Server se debe estar iniciado como super
              usuario o usuario root. Ejecutando la siguiente entrada en la consola
              <span className="font-bold">sudo apt install apache2</span>. Y deberá esperar hasta que finalice la
              descarga.
            </p>
            <p className="text-gray-700 mb-4">
              Una vez finalice la descarga se debe proceder a instalar el paquete ya
              que MySQL necesita de unas configuraciones adicionales. Para iniciar
              la configuración se ejecuta la siguiente entrada <span className="font-bold">sudo mysql_secure_installation</span>
            </p>
            <p className="text-gray-700">
              Una vez descargado e instalado se debe proceder a iniciar el servicio
              con la siguiente entrada <span className="font-bold">sudo service apache2 start</span>. Si todo ha salido
              bien al iniciar el servicio se ejecuta <span className="font-bold">sudo service apache2 status</span> y
              mostrará el estado de Apache.
            </p>
          </div>
          <img className="w-2/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={ApacheInstall} alt="" />
        </div>
        <div className="flex mb-8">
          <div className="w-2/4 pr-8">
            <h2 className="text-2xl font-bold mb-4">INSTALACION DE PHP</h2>
            <p className="text-gray-700 mb-4">
              Para instalar PHP en Ubuntu Server se debe estar iniciado como super
              usuario o usuario root. Ejecutando la siguiente entrada en la consola
              <span className="font-bold">sudo apt-get install php8.1</span> y se instalará la versión 8.1 en este
              caso. Y deberá esperar hasta que finalice la descarga.
            </p>
          </div>
          <img className="w-2/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0" src={PhpInstall} alt="" />
        </div>
      </div>

      <div>
        <div className="flex mb-8">
          <div className="w-3/4 pr-8">
            <h2 className="text-2xl font-bold mb-4">PROTOCOLO SSH</h2>
            <p className="text-gray-700 mb-4">
              Para instalar Apache en Ubuntu Server se debe estar iniciado como super
              usuario o usuario root. Ejecutando la siguiente entrada en la consola
              <span className="font-bold">sudo apt install apache2</span>. Y deberá esperar hasta que finalice la
              descarga.
            </p>
            <p className="text-gray-700 mb-4">
              Es la solución para garantizar conexiones remotas seguras. SSH es un
              protocolo de comunicación que encripta los datos que se intercambian,
              y es virtualmente imposible romper la privacidad de la comunicación.
              El acrónimo SSH viene del inglés: Secure SHell. El protocolo SSH es
              muy versátil, tiene un software cliente que posibilita el acceso a la
              línea de comandos, permite la transferencia de archivos y la creación
              de túneles seguros con soporte de comunicación para otros protocolos.
            </p>
          </div>
          {/* <div className="w-1/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0"></div> */}
        </div>

        <div className="flex mb-8">
          <div className="w-3/4 pr-8">
            <h2 className="text-2xl font-bold mb-4">Clientes SSH</h2>
            <p className="text-gray-700 mb-4">
              Terminal SSH: Es un emulador de terminal que permite acceder de forma
                remota desde un equipo a la línea de comandos del equipo remoto,
                utilizando el protocolo SSH. Cliente SFTP: Se trata de un cliente para
                transferencia de archivos que utiliza el Protocolo de Transferencia
                Segura de Archivos. Sus siglas significan en inglés (Secure File
                Transfer Protocol (SFTP)).
            </p>
          </div>
          {/* <div className="w-1/4 h-auto bg-gray-300 ml-4 rounded-lg flex-shrink-0"></div> */}
        </div>
      </div>

        <div className="bg-gray-100">
          <h1 className="text-4xl font-bold mb-8">Guía de Configuración del Servidor</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-bold">Clientes Linux</h2>
            <p>
              <span className="font-bold">openssh-client</span>: Este software ofrece utilidades para acceso remoto (cliente SSH), copia de seguridad de archivos (SCP) y transferencia segura de archivos (SFTP), entre otras.
            </p>
            <p>
              <span className="font-bold">FileZilla</span>: Cliente SFTP.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold">Clientes Windows</h2>
            <p>
              <span className="font-bold">PuTTY</span>: Terminal SSH.
            </p>
            <p>
              <span className="font-bold">FileZilla</span>: Cliente SFTP.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold">INSTALACIÓN</h2>
            <p className="mb-4">root@server:~# apt install openssh-server openssh-client</p>
            <p>
              Una vez instalado, activa el servicio con el siguiente comando:
              <span className="font-bold">sudo systemctl enable --now ssh</span>
            </p>
            
            <p>
              Para comprobar que esté activo, ejecuta el siguiente comando:
              <span className="font-bold">sudo systemctl status ssh</span>
            </p>
            <p>
              Ahora, verifica que el servidor sea accesible; se puede hacer un ping con la dirección IP del servidor desde el equipo cliente, que en este caso será un equipo con Windows. Se debe ir a la consola de Windows y ejecutar:
            </p>
            {/* img */}
            <p>
              Si todo va bien, puedes ingresar al servidor usando el cliente FileZilla. Ingresa la IP del servidor, el nombre de usuario, la contraseña de acceso y el puerto del servidor.
            </p>
            {/* img */}
            <p>
              Una vez configurado el servidor, puedes transferir la aplicación usando el cliente FileZilla.
            </p>
            <p>
              - Busca la aplicación en el equipo cliente desde FileZilla y cópiala.
            </p>
            {/* img */}
            <p>
              - Luego, pégala en la carpeta remota del servidor en la ruta que, en este ejemplo, es:
              <span className="font-bold"> {/* aquí la ruta de la carpeta */} </span>
            </p>
            {/* img */}
            <p>
              - Realiza el mismo proceso con la base de datos para luego importarla en MySQL.
            </p>
            {/* img */}
            {/* ¡Felicidades! Has completado la configuración del servidor y la transferencia de la aplicación. Ahora tu servidor está listo para operar. ¡Bienvenido a bordo! */}
          </div>
        </div>



    </div>
    </div>

  );
};

export default ManualTecnico;
