import { combineReducers } from 'redux';

import user from './user';
import register from './register';
import events from './events';

export default combineReducers({
  user,
  register,
  events,
});
