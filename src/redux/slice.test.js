import { getPollutionData } from './slice';

describe('getPollutionData tests', () => {
  it('Expect ID of second country not to be 2', () => {
    expect(getPollutionData(2).payload).not.toBe(!2);
  });
});
