// these calls get hoisted to the top before the imports, so just put them there anyway
jest.mock('./mockStudyModule', () => {
  return {
    functionToBeMocked: jest.fn((x) => 2 * x)
  };
});
import { functionToBeMocked } from './mockStudyModule';
import { myFunction } from './mockStudy';

test('test that I can mock a module', () => {
  functionToBeMocked.mockImplementation(jest.fn((x) => x));  // per-test implementation, see https://github.com/facebook/jest/issues/2582#issuecomment-414587398
  expect(myFunction(2)).toBe(2);
  expect(functionToBeMocked).toHaveBeenCalled();
});
