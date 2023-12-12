import React from "react";

const ManualTecnico = () => {
  return (
  <div className="bg-gray-100 flex items-center justify-center">
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
      <div className="mb-8">
        <h2 className="text-2xl font-bold"></h2>
        <ul>
          <li>
            <p> Equipo de cómputo con las siguientes características:</p>
            <ul>
              <li>RAM: 4GB</li>
              <li>ALMACENAMIENTO: Mínimo 120Gb.</li>
              <li>PROCESADOR: Intel Core Celeron N4020 o superior</li>
            </ul>
          </li>
          <li>
            <p> Información técnica del servidor implementado.</p>
            <ul>
              <li>Procesador - Intel Xeon (R) W- 2145 CPU@</li>
              <li>Frecuencia - 3.70 GHz</li>
              <li>RAM instalada 32.0 GB (31,7 GB Usable)</li>
              <li>
                Tipo de sistema – Sistema operativo de 64 bits, procesador
                basado en x64
              </li>
              <li>Sistema operativo – Linux Ubuntu Server</li>
              <li>Versión – 22.04</li>
              <li>Disco duro – Mecánico 1TB</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold"></h2>
        <p> Privilegios de administrador</p>
        <p>
          {" "}
          Sistema Operativo: Windows 7/8/8.1/10/11 – Linux – MacOS – IOS -
          Android.
        </p>
        <p>Navegadores de internet: Google Chrome, Opera, Safari.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold"></h2>
        <p>
          <span>Node.js</span> : Es un entorno controlado por eventos diseñado
          para crear aplicaciones escalables, permitiéndote establecer y
          gestionar múltiples conexiones al mismo tiempo. Gracias a esta
          característica, no tienes que preocuparte con el bloqueo de procesos,
          pues no hay bloqueos.
        </p>
        <p>
          <span>MySQL</span> : Es un sistema de gestión de bases de datos
          relacional que permite almacenar y acceder a los datos a través de
          múltiples motores de almacenamiento, incluyendo InnoDB, CSV y NDB.
          MySQL también es capaz de replicar datos y particionar tablas para
          mejorar el rendimiento y la durabilidad
        </p>
        <p>
          <span>npm</span> : Es el sistema de gestión de paquetes por defecto
          para Node.js, un entorno de ejecución para JavaScript, bajo Artistic
          License 2.0.
        </p>
        <p>
          <span>Apache</span> : Apache, o Apache HTTP Server, es un servidor web
          de código abierto y gratuito desarrollado y mantenido por la Apache
          Software Foundation. Es uno de los servidores web más populares y
          ampliamente utilizados en el mundo. Apache proporciona un entorno
          seguro y eficiente para la entrega de contenido web, permitiendo a los
          usuarios publicar sus sitios y aplicaciones de manera efectiva. Ofrece
          soporte para diversos módulos y extensiones, lo que lo hace altamente
          configurable y adaptable a diferentes necesidades.
        </p>
      </div>
      {/* instalar un servedor local */}
      <div className="">
        <h2> INSTALACIÓN DEL SERVIDOR LOCAL</h2>
        <p>
          La instalación del servidor local constituye el proceso de configurar
          el entorno donde se ejecutará la aplicación, así como el alojamiento
          de los archivos asociados. Este servidor local permite compartir la
          aplicación, brindando la posibilidad a otros usuarios de acceder a
          ella. En este manual, se aborda la instalación en un entorno Ubuntu
          Server. Es crucial contar con privilegios de Super Usuario para llevar
          a cabo la instalación correcta de los paquetes y programas necesarios.
        </p>
        <p>
          Antes de proceder con la instalación de estos programas y paquetes, se
          recomienda realizar una actualización de los repositorios mediante el
          comando
          <span>sudo apt-get update.</span>
          Además, para asegurar la obtención de las versiones más recientes, se
          puede ejecutar
          <span>sudo apt-get upgrade</span>
        </p>
      </div>
      <div className="">
        <h2>INSTALACION DE Node.JS</h2>
        <p>
          Para instalar NodeJS en Ubuntu Server se debe estar iniciado como
          super usuario o usuario root. Ejecutando la siguiente entrada en la
          consola sudo apt-get install nodejs y luego empezara la descarga de
          paquetes. Y deberá esperar hasta que finalice la instalación
        </p>
        {/* aqui una img */}
        <p>
          Ahora puede comprobar que la instalación haya resultado con éxito
          ejecutando la siguiente entrada node -v y si todo ha salido bien debe
          mostrar la siguiente salida. Se puede ver que en este caso está
          instalada la versión 12.22.9 de NodeJS.
        </p>
        {/* aqui una imagen */}
      </div>
      <div className="">
        <h2> INSTALACION DE npm (Node Package Manager)</h2>
        <p>
          Para instalar npm en Ubuntu Server se debe estar iniciado como super
          usuario o usuario root. Ejecutando la siguiente entrada en la consola
          sudo apt-get install npm. Y deberá esperar hasta que finalice la
          instalación.
        </p>
        {/* uma img aqui */}
        <p>
          Ahora puede comprobar que la instalación haya resultado con éxito
          ejecutando la siguiente entrada npm -v y si todo ha salido bien debe
          mostrar la siguiente salida. Se puede ver que en este caso está
          instalada la versión 8.5.1 de npm.
        </p>
      </div>
      <div className="">
        <h2> INSTALACION DE MySQL</h2>
        <p>
          Para instalar MySQL en Ubuntu Server se debe estar iniciado como super
          usuario o usuario root. Ejecutando la siguiente entrada en la consola
          sudo apt-get install mysql-server. Y deberá esperar hasta que finalice
          la descarga.
        </p>
        {/* aqui una img */}
        <p>
          Una vez finalice la descarga se debe proceder a instalar el paquete ya
          que MySQL necesita de unas configuraciones adicionales. Para iniciar
          la configuración se ejecuta la siguiente entrada sudo
          mysql_secure_installation
        </p>
        {/* aqui una img */}
        <p>
          Para comprobar la instalación del programa se ejecuta la siguiente
          entrada mysql -u root y si todo ha salido bien deberá mostrar la
          siguiente salida. Lo cual sería en entorno principal de MySQL en
          Linux.
        </p>
        {/* aqui una img */}
      </div>
      <div className="">
        {" "}
        INSTALACION DE PM2
        <p>
          Para instalar pm2 en Ubuntu Server se debe estar iniciado como super
          usuario o usuario root. Ejecutando la siguiente entrada en la consola
          sudo npm install pm2@latest -g. Y deberá esperar hasta que finalice la
          descarga
        </p>
        {/* img aqui */}
        <p>
          Para comprobar la instalación del programa se ejecuta la siguiente
          entrada pm2 -v y si todo ha salido bien deberá mostrar la siguiente
          salida. Lo cual sería en entorno principal de pm2 en Linux
        </p>
        {/* img */}
      </div>
      <div className="">
        <h2> INSTALACION DE APACHE</h2>
        <p>
          Para instalar pm2 en Ubuntu Server se debe estar iniciado como super
          usuario o usuario root. Ejecutando la siguiente entrada en la consola
          sudo apt install apache2. Y deberá esperar hasta que finalice la
          descarga.
        </p>
        {/* img */}
        <p>
          Una vez descargado e instalado se debe proceder a iniciar el servicio
          con la siguiente entrada sudo service apache2 start. Si todo ha salido
          bien al iniciar el servicio se ejecuta sudo service apache2 status y
          mostrará el estado de apache.
        </p>
        {/* img */}
      </div>
      <div className="">
        <h2>INSTALACION DE PHP</h2>
        <p>
          Para instalar PHP en Ubuntu Server se debe estar iniciado como super
          usuario o usuario root. Ejecutando la siguiente entrada en la consola
          sudo apt-get install php8.1 y se instalará la versión 8.1 en este
          caso. Y deberá esperar hasta que finalice la descarga.
        </p>
        {/* img */}
      </div>
      <div className="">
        <h2>PROTOCOLO SSH</h2>
        <p>
          Es la solución para garantizar conexiones remotas seguras. SSH es un
          protocolo de comunicación que encripta los datos que se intercambian,
          y es virtualmente imposible romper la privacidad de la comunicación.
          El acrónimo ssh viene del inglés: Secure SHell. El protocolo ssh es
          muy versátil, tiene un software cliente que posibilita el acceso a la
          línea de comandos, permite la transferencia de archivos y la creación
          de túneles seguros con soporte de comunicación para otros protocolos
        </p>
      </div>
      <div className="">
        <h2>Clientes SSH</h2>
        <p>Los clientes ssh se dividen en dos grupos:</p>
        <p>
          Terminal SSH Es un emulador de terminal que permite acceder de forma
          remota desde un equipo a la línea de comandos del equipo remoto,
          utilizando el protocolo SSH. Cliente SFTP Se trata de un cliente para
          transferencia de archivos que utiliza el Protocolo de Transferencia
          Segura de Archivos. Sus siglas significan en inglés (Secure File
          Transfer Protocol (SFTP))
        </p>
      </div>
      <div className="">
        <h2>Clientes Linux</h2>
        <p>
          <span>openssh-client</span> : este software ofrece utilidades para
          acceso remoto (cliente ssh), copia de seguridad de archivos (scp) y
          transferencia segura de archivos (sftp), entre otras.
        </p>
        <p>
          <span>FileZilla</span> : Cliente SFTP.{" "}
        </p>
        <h2>Clientes Windows</h2>
        <p>
          <span>PuTTY</span> : Terminal SSH.
        </p>
        <p>
          <span>FileZilla</span> : Cliente SFTP
        </p>
      </div>
      <div className="">
        <h2>INSTALACIÓN</h2>
        <p>root@server:~# apt install openssh-server openssh-client</p>
        <p>
          Una vez se haya instalado se activa el servicio con el siguiente
          comando.
          <span>sudo systemctl enable - -now ssh</span>
        </p>
        <p>
          Para comprobar de que esté activo se ejecuta el siguiente comando.
          <span>sudo systemctl status ssh</span>
        </p>
        <p>
          Ahora se debe verificar que el servidor sea accesible, se puede hacer
          un ping con la dirección ip del servidor desde el equipo cliente, que
          en este caso será un equipo con Windows. Se debe ir a la consola de
          Windows y ejecutar:
        </p>
        {/* img */}
        <p>
          Si todo va bien se puede proceder a ingresar al servidor por medio del
          cliente FileZilla. Donde se deberá ingresar la IP del servidor, el
          nombre de usuario del servidor, la contraseña de acceso al mismo y el
          puerto del servidor.
        </p>
        {/* img */}
        <p>
          Una vez el servidor esté configurado ya se puede transferir la
          aplicación al servidor. Para ello se usará el cliente FileZilla.
        </p>
        <p>
          {" "}
          - Primero se busca la aplicación en el equipo cliente desde FileZilla
          y se copea.
        </p>
        {/* img */}
        <p>
          {" "}
          Se pega en la carpeta remota del servidor en la ruta que en este
          ejemplo es:{" "}
        </p>
        <span> {/* aqui la ruta de la carpeta */} </span>
        {/* img */}
        <p>
          {" "}
          - Se debe hacer lo mismo con la base de datos para luego importarla en
          MySQL.
        </p>
        {/* img */}
      </div>

    </div>
    </div>

  );
};

export default ManualTecnico;
