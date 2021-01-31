import {
  newLogger,
} from '@travel-cloud/simple-lambda-logger';

import capitaliseName from './capitalise_name';

const logger = newLogger();

const exampleOneEntryPoint = ({
  event,
},
logToConsole = true) => {
  if (logToConsole) {
    logger.info(`Example One invoked with event:
      ${JSON.stringify(event)}`);
  }

  const updatedName = capitaliseName(event);

  return {
    ...event,
    name: updatedName,
  };
};

export default exampleOneEntryPoint;
