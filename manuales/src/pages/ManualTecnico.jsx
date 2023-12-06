import React from "react";

const ManualTecnico = () => {
  return (
    <div>
      <div id="objetivoGeneral">
        <h1>Objetivo general:</h1>
        <p>
          El objetivo de este manual es brindar información necesaria a los
          administradores que llevarán a cabo el control de la plataforma de los
          programas y herramientas utilizadas para el desarrollo y configuración
          del aplicativo de IGS.
        </p>
      </div>

      <div id="objetivosEspecificos">
        <h2>Objetivos específicos</h2>
        <ol>
          <li>
            <p>
              Identificar y catalogar de manera precisa todos los insumos
              alimenticios a ser incluidos en el inventario.
            </p>
          </li>

          <li>
            <p>
              Desarrollar un sistema de codificación eficiente para facilitar la
              identificación y búsqueda rápida de los productos en el
              inventario.
            </p>
          </li>

          <li>
            <p>
              Establecer protocolos y procedimientos para el registro y
              actualización periódica de los niveles de existencias de los
              insumos.
            </p>
          </li>

          <li>
            <p>
              Capacitar a los usuarios y administradores en el uso adecuado de
              la plataforma, programas y herramientas relacionadas con el
              aplicativo de IGS.
            </p>
          </li>

          <li>
            <p>
              Optimizar la eficiencia del proceso de gestión de inventario
              mediante la identificación y eliminación de posibles cuellos de
              botella.
            </p>
          </li>

          <li>
            <p>
              Establecer un sistema de alertas para notificar a los
              administradores sobre niveles bajos de existencias o productos
              próximos a caducar.
            </p>
          </li>
        </ol>
      </div>
      <div className="">
        <h2>Introducción</h2>
        <p>
          Este manual se realiza con el fin de detallar el sistema en términos
          técnicos, proporcionando los pasos necesarios para realizar la
          correcta instalación del sistema IGS. IGS tiene como objetivo
          facilitar el manejo de los insumos alimenticios que ingresan y se
          utilizan en la unidad productiva de gastronomía. El uso de este manual
          está recomendado única y exclusivamente para el administrador
          encargado del control y/o instalación del sistema.
        </p>
        <p>
          La configuración de este manual está realizada para el sistema
          operativo linux - Ubuntu Server.
        </p>
      </div>
      <div className="">
        <h2>Requisitos tecnicos minimos de Hardware</h2>
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
      <div className="">
        <h2>REQUISITOS TÉCNICOS MINIMOS DE SOFTWARE</h2>
        <p> Privilegios de administrador</p>
        <p>
          {" "}
          Sistema Operativo: Windows 7/8/8.1/10/11 – Linux – MacOS – IOS -
          Android.
        </p>
        <p>Navegadores de internet: Google Chrome, Opera, Safari.</p>
      </div>
      <div className="">
        <h2>
          {" "}
          HERRAMIENTAS UTILIZADAS PARA LA INSTALACION Y EJECUCION DEL APLICATIVO
        </h2>
        <p>
          <span> Node.js</span> : Es un entorno controlado por eventos diseñado
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
        <p>La instalación del servidor local constituye el proceso de configurar el entorno donde se ejecutará la aplicación, así como el alojamiento de los archivos asociados. Este servidor local permite compartir la aplicación, brindando la posibilidad a otros usuarios de acceder a ella. En este manual, se aborda la instalación en un entorno Ubuntu Server. Es crucial contar con privilegios de Super Usuario para llevar a cabo la instalación correcta de los paquetes y programas necesarios.</p>
        <p>
        Antes de proceder con la instalación de estos programas y paquetes, se recomienda realizar una actualización de los repositorios mediante el comando
        <span>sudo apt-get update.</span>
        Además, para asegurar la obtención de las versiones más recientes, se puede ejecutar
        <span>sudo apt-get upgrade</span>
        </p>
      </div>
    </div>
  );
};

export default ManualTecnico;
