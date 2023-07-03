<h1 align="center">🤖 cfxre.js 🐌</h1>

> A small bot to monitor FiveM-related services on cfx.re

<br>

<pre> This was translated with ChatGPT; any issue please let me know <br> Disclaimer: all the strings on the bot are on spanish currently </pre>

<br><br>

<h2 align="center">📋 Utilities</h2>
<p align="center">
    <b>Command:</b> To list the status of all services in an embed <br>
    <img src="https://i.imgur.com/D60BJ4Z.png" title="comando">
</p>
<br>
<p align="center">
    <b>Status:</b> The bot's description and status are updated every 5 minutes based on the status of the services <br>
    <img src="https://i.imgur.com/rtpW4Lq.png" title="estado del bot">
</p>

<br><br>

<h2 align="center">📚 Dependencies</h2>
<ul>
  <li>discord.js</li>
  <li>cheerio</li>
  <li>request-promises</li>
  <li>https</li>
</ul>

<br><br>

<h2 align="center">🧰 Como configurar</h2>
<ul>
  <li>Create a bot <a href="https://discord.com/developers/applications">here</a>, take note of the Token, and enable all 3 options under Privileged Gateway Intents. Remember to disable the Public Bot parameter so that no one else can add it to their server.</li>
  <li>Complete all required parameters in <code>config.js</code>.</li>
  <li>Install all dependencies with <code>npm install</code>.</li>
  <li>On discord, run the command <code>$slashregister</code> (this only needs to be done once) to create and make available the slash commands. </li>
  <li>To keep the bot active 24/7 on the server, run <code>pm2 start</code> to ensure the bot remains active.</li>
</ul>

<br><br><br>

I hope the bot is useful to you 💜
