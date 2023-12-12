<div className="">
<p>
  Una vez el archivo .sql este en el servidor se procede a importar
  desde la consola ingresando a MySQL con el comando en este caso será:
  <span>mysql -u root {/* reemplazar de ser necesario */}</span>
</p>
<p> - Se crea la base de datos.</p>
{/* img */}
<p> - Se selecciona la base de datos.</p>
{/* img */}
<p> - Se ubica el archivo .sql y se importa con el comando source:</p>
{/* img */}
<p>
  {" "}
  - Una vez se haya ejecutado el comando empezará a importar la base de
  datos con su información.
</p>
{/* img */}
<p>
  Una vez terminada la operación ya se podrá visualizar la base de
  datos.
</p>
{/* img */}
</div>
<div className="">
<h2>DESPLEGAR LA APLICACIÓN CON PM2</h2>
<p>
  Para desplegar la aplicación se usará el gestor de procesos PM2. Lo
  primero será situarse dentro del directorio de la aplicación y ubicar
  el archivo principal que lo mas común es que se llame index.js o
  app.js
</p>
<p>
  En este caso el directorio de la aplicación está en la ruta:
  <span>/home/david/IGS/</span>
</p>
{/* img */}
<p>
  Ahora para desplegar se usa el comando <span>pm2 start</span> así:
</p>
{/* img */}
<p> - Una vez desplegada la app aparecerá así:</p>
{/* img */}
<p>
  {" "}
  - Para acceder a la aplicación desplegada en la red se debe poner la
  dirección ip del servidor mas el puerto de la aplicación en este
  ejemplo sería así:
  <span>http://192.168.0.34:5000</span>
</p>
</div>