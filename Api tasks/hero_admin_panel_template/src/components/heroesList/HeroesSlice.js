import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';
import {useHttp} from '../../hooks/http.hook';

const heroesAdepter = createEntityAdapter()

const initialState = heroesAdepter.getInitialState({
    heroesLoadingStatus: 'idle'
})

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/heroes")
    }
)

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroCreated: (state, action) => {heroesAdepter.addOne(state, action.payload)},
        heroDeleted: (state, action) => {heroesAdepter.removeOne(state, action.payload)},
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                heroesAdepter.setAll(state, action.payload);
            })
            .addCase(fetchHeroes.rejected, state => {state.heroesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = heroesSlice;

export default reducer;

const { selectAll } = heroesAdepter.getSelectors(state => state.heroes)

export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    selectAll,
    (filter, heroes) => {
        if(filter === 'all') {
            return heroes
        } else {
            return heroes.filter(item => item.element === filter)
        }
    }
)

export const {
    heroCreated,
    heroDeleted
} = actions;