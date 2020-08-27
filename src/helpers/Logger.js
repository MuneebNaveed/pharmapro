import { BRAND_NAME } from '../constants/config';
import Logger from 'js-logger';

Logger.useDefaults({
    defaultLevel: Logger.DEBUG,
    formatter: function (messages, context) {
        messages.unshift(
            `[${new Date().toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
            })}] ${BRAND_NAME.toLowerCase()}-${context.name || 'Root'}:`
        );
    },
});

export default Logger;
