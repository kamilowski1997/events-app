import * as thunkActions from './actions';
import * as selectors from './selectors';
import { actions as rawActions } from './slice';

export { name, reducer } from './slice';
export const actions = { ...rawActions, ...thunkActions };
export { selectors };
