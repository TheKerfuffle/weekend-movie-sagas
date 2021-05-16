import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_ALL_GENRES', fetchAllGenres);
    yield takeEvery('ADD_NEW_MOVIE', addNewMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('get all movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all movies error');
    }
}

function* fetchGenres( action ) {
    // get all genres from the DB
    // console.log('fetchGenres, action.payload:', action.payload);

    // try {
    //     const genres = yield axios.get(`/api/genre/${action.payload}`);
    //     console.log('get all:', genres.data);

    //     yield put({type: 'ADD_MOVIE_DETAILS', payload: { property: 'genres', value: genres.data }});
    // } catch {
    //     console.log('get genres error');
    // }

    try {
        const genres = yield axios.post(`/api/genre/`, action.payload);
        // console.log(`get movie's genres: movie id, data`,action.payload , genres.data);

        yield put({type: 'ADD_MOVIE_DETAILS', payload: { property: 'genres', value: genres.data }});
    } catch {
        console.log('get genres error');
    }
}

function* fetchAllGenres() {
    try {
        const allGenres = yield axios.get(`/api/genre/`);
        console.log('get all genres:', allGenres.data);
        yield put({type: 'SET_GENRES', payload: allGenres.data});
    } catch {
        console.log('get genres error');
    }
}

function* addNewMovie( action ) {
    try{
        const newMovie = yield axios.post(`/api/movie`, action.payload);
        // console.log('get all:', newMovie.data);
        yield put({type: 'FETCH_MOVIES'})
    } catch {
        console.log('addNewMovie error', action.payload);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const currentDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        case 'ADD_MOVIE_DETAILS':
            return {...state, [action.payload.property]: action.payload.value};;
        case 'RESET_DETAILS':
            return [];
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        currentDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
