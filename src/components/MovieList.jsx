import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Axios from 'axios';
import queryString from 'query-string';


class MovieList extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if(this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=aa9e49f&s=${q.searchText}`)
            .then(resp=>resp.data)
            .then(data=>data.Search)
            .then(movies=>this.setState({movies}))

    }
    render() {
        const movieList = this.state.movies.map((m, index) => <MovieCard movie={m} key={index} />)
        return (
            <div className="row">
                {movieList}
            </div>
        );
    }
}

export default MovieList;