import {
  newLogger,
} from '@travel-cloud/simple-lambda-logger';

const logger = newLogger();

const removeOddNumbers = (val) => (
  val
    && typeof val === 'number'
    && !Number.isNaN(val)
    && val !== 0
    && val % 2 === 0
);

const example3 = (arr) => logger.info(`Example Three invoked with: 
    ${JSON.stringify(arr)}`)
    || arr
      .filter(removeOddNumbers)
      .sort()
      .reduce((acc, curr, index) => {
        if (curr === acc[index - 1]) {
          return acc;
        }

        return acc.concat(curr);
      }, [])
      .join(', ');

export default example3;
