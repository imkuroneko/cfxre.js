<h1 align="center">🤖 cfxre.js 🐌</h1>

> Un pequeño bot para monitorear los servicios de cfx.re relacionados a FiveM

<br>
Reamde on english <a href="/readme_en.md">here</a>.

<br><br>

<h2 align="center">📋 Utilidades</h2>
<p align="center">
    <b>Comando:</b> Para listar en un embed el estado de todos los servicios <br>
    <img src="https://i.imgur.com/D60BJ4Z.png" title="comando">
</p>
<br>
<p align="center">
    <b>Estado:</b> Cada 5 minutos se actualiza la descripción y el estado del bot según el estado de los servicios <br>
    <img src="https://i.imgur.com/rtpW4Lq.png" title="estado del bot">
</p>

<br><br>

<h2 align="center">📚 Dependencias</h2>
<ul>
  <li>discord.js</li>
  <li>cheerio</li>
  <li>request-promises</li>
  <li>https</li>
</ul>

<br><br>

<h2 align="center">🧰 Como configurar</h2>
<ul>
  <li>Crear un bot <a href="https://discord.com/developers/applications">aquí</a>, tomar nota del Token y en <code>Privileged Gateway Intents</code> habilitar las 3 opciones; Recuerda deshabilita el parámetro de <code>Public Bot</code> para que nadie mas lo agregue a su servidor.</li>
  <li>Completar todos los parámetros requeridos en <code>config.js</code></li>
  <li>instalar todas las dependencias con <code>npm install</code></li>
  <li>en discord, ejecutar el comando <code>$slashregister</code> (esto se realiza una sola vez) para que se creen los comandos slash disponibles </li>
  <li>para que el bot se quede activo 24/7 en el servidor, realiza <code>pm2 start</code> para que este se encargue de mantener activo el bot</li>
</ul>

<br><br><br>

Espero el bot te sea de utilidad 💜
