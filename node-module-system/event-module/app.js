const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on("messageLogged", e => {
    console.log("Listener called", e);
});

logger.log('Some messages');