import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/moviesData.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import { CardContent, FormControl, InputLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';


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
            movieName : "",
        }
    }

    movieNameChangedHandler = event => {
        this.setState({movieName: event.target.value})
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
                                    <GridListTile key={"grid" + movie.id} style={{ margin: '10px' }} className="released-movie-grid-item">
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
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);