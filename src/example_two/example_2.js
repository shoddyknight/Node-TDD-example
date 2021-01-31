import {
  newLogger,
} from '@travel-cloud/simple-lambda-logger';

import equivalency from './equivalency';

const logger = newLogger();

const exampleTwo = (x, y) => {
  logger.info(`Example Two invoked with:
        X: ${x}, Y: ${y}`);

  try {
    const xAndYAreEquivalent = equivalency(x, y);

    logger.info(`X and Y are equivalent: ${xAndYAreEquivalent}`);

    return xAndYAreEquivalent;
  } catch (e) {
    logger.error(`Error determining equivalency: ${e.stack}`);

    return false;
  }
};

export default exampleTwo;
