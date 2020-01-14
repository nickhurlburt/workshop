import { functionToBeMocked } from './mockStudyModule';

export const myFunction = (x) => {
  return functionToBeMocked(x);
}