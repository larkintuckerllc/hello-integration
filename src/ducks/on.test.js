import on, { getOn, TOGGLE, toggleOn } from './on';

describe('on duck', () => {
  it('toggleOn should create TOGGLE action', () => {
    const result = {
      type: TOGGLE,
    };
    expect(toggleOn()).toEqual(result);
  });

  it('reducer initialized false', () => {
    const initialState = undefined;
    const nextState = false;
    const action = {
      type: 'UNKNOWN',
    };
    expect(on(initialState, action)).toBe(nextState);
  });

  it('reducer should ignore unknown actions', () => {
    const initialState = false;
    const action = {
      type: 'UNKNOWN',
    };
    expect(on(initialState, action)).toBe(initialState);
  });

  it('reducer should handle toggle actions', () => {
    const initialState = false;
    const nextState = true;
    const action = toggleOn();
    expect(on(initialState, action)).toBe(nextState);
  });

  it('getOn should return', () => {
    const result = false;
    const state = {
      on: false,
    };
    expect(getOn(state)).toEqual(result);
  });
});
