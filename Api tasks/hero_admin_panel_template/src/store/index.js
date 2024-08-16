import { configureStore } from '@reduxjs/toolkit';
import heroes from '../components/heroesList/HeroesSlice';
import filters from '../components/heroesFilters/FiltersSlise';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {filters, heroes},
    middleware: getDefualtMiddleware => getDefualtMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

// const store = createStore(
//     combineReducers({heroes, filters}),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;