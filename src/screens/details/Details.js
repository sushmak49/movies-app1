import React, { Component } from 'react';
import Header from '../../common/header/Header.js'
import moviesData from '../../common/moviesData.js';
import Typography from '@material-ui/core/Typography';
import '../details/Details.css';
import Home from '../Home/Home.js';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    backToHomeHandler = () => 
    {
        ReactDOM.render(<Home></Home>,document.getElementById('root'));
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
        const opts={
            height:500,
            width:700,
            playerVars:{
                autoplay:1
            }
        }
        let movie = this.state.movie;
        return (
            <div className="details">
                <Header />
                <div className="back">
                    <Typography onClick={this.backToHomeHandler}>&#60; Back to Home</Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}</Typography>
                        </div>
                        <br/>
                        <div>
                            <Typography><span className="bold">Genre: </span>{movie.genres.join(', ')}</Typography>
                            <Typography><span className="bold">Duration: </span>{movie.duration}</Typography>
                            <Typography><span className="bold">Release Date: </span>{new Date(movie.release_date).toDateString()}</Typography>
                            <Typography><span className="bold">Rating: </span>{movie.critics_rating}</Typography>
                        </div>
                        <br/>
                        <div>
                            <Typography>
                                <span className="bold">Plot: </span>
                                <a href={movie.wiki_url}>(Wiki Link)</a>
                                {' '+movie.storyline}
                            </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer:</span></Typography>
                            <YouTube videoId={movie.trailer_url.split('?v=')[1]}
                                     opts={opts}
                                     onReady={this._onReady}
                                     />
                        </div>
                    </div>
                    <div className="rightDetails">right</div>
                </div>
            </div>

        )
    }
}

export default Details;