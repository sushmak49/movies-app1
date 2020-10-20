import React, { Component } from 'react';
import Header from '../../common/header/Header.js'
import moviesData from '../../common/moviesData.js';
import Typography from '@material-ui/core/Typography';
import '../details/Details.css';
import Home from '../Home/Home.js';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import artists from '../../common/artists.js';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [
                {
                    id: 1,
                    stateId: "star1",
                    color: "black"
                },
                {
                    id: 2,
                    stateId: "star2",
                    color: "black"
                },
                {
                    id: 3,
                    stateId: "star3",
                    color: "black"
                },
                {
                    id: 4,
                    stateId: "star4",
                    color: "black"
                },
                {
                    id: 5,
                    stateId: "star5",
                    color: "black"
                }
            ]
        }
    }

    backToHomeHandler = () => {
        ReactDOM.render(<Home></Home>, document.getElementById('root'));
    }

    artistClickHandler = (url) => {
        window.location = url;
    }

    starClickHandler = (starId) => {
        let starList =[];
        for(let star of this.state.starIcons){
            if (star.id <= starId) {
                star.color = "yellow";
            } else {
                star.color = "black";
            }
            starList.push(star);
        }
        this.setState({starIcons:starList});
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
        const opts = {
            height: 500,
            width: 700,
            playerVars: {
                autoplay: 0
            }
        }
        let movie = this.state.movie;
        let artistsList = [];
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
                        <br />
                        <div>
                            <Typography><span className="bold">Genre: </span>{movie.genres.join(', ')}</Typography>
                            <Typography><span className="bold">Duration: </span>{movie.duration}</Typography>
                            <Typography><span className="bold">Release Date: </span>{new Date(movie.release_date).toDateString()}</Typography>
                            <Typography><span className="bold">Rating: </span>{movie.critics_rating}</Typography>
                        </div>
                        <br />
                        <div>
                            <Typography>
                                <span className="bold">Plot: </span>
                                <a href={movie.wiki_url}>(Wiki Link)</a>
                                {' ' + movie.storyline}
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
                    <div className="rightDetails">
                        <div>
                            <Typography>
                                <span className="bold">Rate this movie:</span>
                            </Typography>
                            {
                                this.state.starIcons.map((star) => (
                                    <StarBorderIcon className={star.color} key={"star" + star.id} onClick={() => this.starClickHandler(star.id)} />
                                ))
                            }
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Artists:</span>
                            </Typography>
                        </div>
                        <br />
                        <GridList cellHeight={160} cols={2} className="movie-artists-grid">
                            {
                                movie.artists.map((artist) => (
                                    <GridListTile
                                        key={artist.id}
                                        className="gridTile"
                                        onClick={() => this.artistClickHandler(artist.wiki_url)}
                                    >
                                        <img src={artist.profile_url} alt={artist.first_name + ' ' + artist.last_name}></img>
                                        <GridListTileBar title={artist.first_name + ' ' + artist.last_name}></GridListTileBar>
                                    </GridListTile>
                                ))
                            }
                        </GridList>
                    </div>
                </div>
            </div>

        )
    }
}

export default Details;