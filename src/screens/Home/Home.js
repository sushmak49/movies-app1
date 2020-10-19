import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Details from '../../screens/details/Details.js'
import Header from '../../common/header/Header';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/moviesData.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import { CardContent, FormControl, InputLabel, ListItemText, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import '../../common/genres.js';
import genres from '../../common/genres.js';
import MenuItem from '@material-ui/core/MenuItem';
import artists from '../../common/artists.js'
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%',
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            movieName: "",
            genres: [],
            artists: [],
        }
    }

    movieNameChangedHandler = event => {
        this.setState({ movieName: event.target.value })
    }

    genreSelectedHandler = event => {
        this.setState({ genres: event.target.value });
    }
    artistSelectedHandler = event => {
        this.setState({ artists: event.target.value });
    }
    movieClickHandler = (movieId) => {
        ReactDOM.render(
            <Details movieId={movieId} />,
            document.getElementById('root')
          );
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {
                        moviesData.map(movie => (
                            <GridListTile key={movie.id}>
                                <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                                <GridListTileBar title={movie.title} />
                            </GridListTile>
                        ))
                    }
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {
                                moviesData.map(movie => (
                                    <GridListTile onClick={() => this.movieClickHandler(movie.id)} key={"grid" + movie.id} style={{ margin: '10px' }} className="released-movie-grid-item">
                                        <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                                        <GridListTileBar title={movie.title}
                                            subtitle={<span>{new Date(movie.release_date).toDateString()}</span>}
                                        />
                                    </GridListTile>
                                ))
                            }
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input type="text" id="movieName" onChange={this.movieNameChangedHandler}></Input>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-genre-checkbox">Genre</InputLabel>
                                    <Select label="Genre"
                                        multiple
                                        input={<Input id="select-multiple-genre-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectedHandler}>
                                        <MenuItem value="0">None
                                            </MenuItem>
                                        {
                                            genres.map(genre => (
                                                <MenuItem key={genre.id} value={genre.name}>
                                                    <Checkbox checked={this.state.genres.indexOf(genre.name) > -1}></Checkbox>
                                                    <ListItemText primary={genre.name} />
                                                </MenuItem>
                                            )
                                            )
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-artist-checkbox">Artist</InputLabel>
                                    <Select label="Artist"
                                        multiple
                                        input={<Input id="select-multiple-artist-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectedHandler}>
                                        <MenuItem value="0">None
                                            </MenuItem>
                                        {
                                            artists.map(artist => (
                                                <MenuItem key={artist.id} value={artist.first_name + ' ' + artist.last_name}>
                                                    <Checkbox checked={this.state.artists.indexOf(artist.first_name + ' ' + artist.last_name) > -1}></Checkbox>
                                                    <ListItemText primary={artist.first_name + ' ' + artist.last_name} />
                                                </MenuItem>
                                            )
                                            )
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        label="Release Date From"
                                        id="releaseDateStart"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        label="Release Date To"
                                        id="releaseDateEnd"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <br />
                                <FormControl className={classes.formControl}>
                                    <Button variant="contained" color="primary" style={{ width: '100%' }}>APPLY</Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);