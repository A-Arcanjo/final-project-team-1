import { combineReducers } from 'redux';

import posts from './posts.js';
import auth from './auth.js';

export const reducers = combineReducers({ posts, auth }); //call combineReducers as a function and inside use all the reducers 