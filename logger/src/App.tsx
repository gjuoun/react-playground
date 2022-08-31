import React, { useEffect } from "react";
import pino from 'pino'

const logger =pino({
  browser: {
    asObject: true,
    transmit: {
      level: 'warn',
      send: function (level, logEvent) {
        console.log(level, logEvent)
        if (level === 'error') {
          // send to sendtry / database
        }

      }
    }
  }
})

export const App = () => {
  useEffect(()=> {
    // instead of console.log
    logger.error({
      page: 'ad/offer/'
    },'error')
  },[ ])
  return <div>hello</div>;
};
