import React, { Component } from 'react';
import Header from '../../common/header/Header.js'
import moviesData from '../../common/moviesData.js';
import Typography from '@material-ui/core/Typography';
import '../details/Details.css';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((movie) => {
            return movie.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log(this.state);
    }
    render() {
        let movie = this.state.movie;
        return (
            <div className="details">
                <Header />
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Genre: </span>{movie.genres.join(', ')}</Typography>
                        </div>
                    </div>
                    <div className="rightDetails">right</div>
                </div>
            </div>

        )
    }
}

export default Details;