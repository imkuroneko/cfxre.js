module.exports = {
    apps : [{
        name            : "cfx.re monitor",
        version         : "1.0.0",
        script          : "./bot.js",
        exec_mode       : "fork",
        watch           : true,
        max_restarts    : 10,
        ignore_watch    : [ './logs/*' ],
        log_date_format : 'YYYY-MM-DD HH:mm',
        error_file      : './logs/errors.log',
        out_file        : './logs/out.log'
    }]
}