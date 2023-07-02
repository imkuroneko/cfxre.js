// Load required resources =================================================================================================
const { Events, ActivityType } = require('discord.js');
// const path = require('path');
// const axios = require('axios');
const rp = require('request-promise');
const cheerio = require('cheerio');

// Module script ===========================================================================================================
module.exports = {
    name: Events.ClientReady,
    execute(client) {
        try {
            // exec when bot starts
            getCfxReStatus(client);

            // exec eaxh 5 min
            setInterval(() => {
                getCfxReStatus(client);
            }, 300000);

            function getCfxReStatus(client) {
                rp('https://status.cfx.re/').then((html) => {
                    const $ = cheerio.load(html);
                    const urlElems = $('div.child-components-container > div.component-inner-container');


                    var fivemStatus = '';
                    var totalServices = 0;
                    var totalUp = 0;
                    for(let i = 0; i < urlElems.length; i++) {
                        const title = $($(urlElems[i]).find('span.name')[0]).text().trim().replaceAll('"', "");
                        const desc  = $($(urlElems[i]).find('span.component-status')[0]).text().trim();
            
                        if([ 'Cfx.re Platform Server (FXServer)', 'CnL', 'Policy', 'Keymaster' ].includes(title)) {
                            totalServices = (totalServices + 1);
                            if(desc == 'Operational') { totalUp = (totalUp + 1); }
                        }
                        if(title == 'FiveM') { fivemStatus = desc; }
                    }

                    switch(fivemStatus) {
                        // 🔴 Fallos graves
                        case 'Major Outage':
                            var bot_status = `inconvenientes para acceder • ${totalUp}/${totalServices} servicios activos`;
                            var bot_conn   = 'dnd';
                        break;

                        // 🟡 Fallos leves y Mantenimiento Programado
                        case 'Degraded Performance':
                        case 'Under Maintenance':
                        case 'Partial Outage':
                            var bot_status = `posibles inconvenientes para acceder • ${totalUp}/${totalServices} servicios activos`;
                            var bot_conn   = 'idle';
                        break;
                        // 🟢 Servicios operativos
                        default:
                        case 'Operational':
                            var bot_status = `todos los servicios de cfx.re activos (${totalUp}/${totalServices})`;
                            var bot_conn   = 'online';
                        break;
                    }
                    return client.user.setPresence({ activities: [{ name: bot_status, type: ActivityType.Watching }], status: bot_conn });
                }).catch((error) => {
                    console.error(`[event:ready:rp] ${error.message}`);
                    return client.user.setPresence({ activities: [{ name: "🚦 Monitoreando servicios de cfx.re", type: ActivityType.Watching }], status: 'offline' });
                });

                // axios.get('https://status.cfx.re/api/v2/status.json').then((response) => {
                //     const cfx_status = response.data.status.indicator;
                // }).catch((error) => {
                //     console.error(`[event:ready:axios] ${error.message}`);
                //     return client.user.setPresence({ activities: [{ name: "🚦 Monitoreando servicios de cfx.re", type: ActivityType.Watching }], status: 'offline' });
                // });
            }
        } catch(error) {
            console.error(`[event:ready] ${error.message}`);
        }
    }
};