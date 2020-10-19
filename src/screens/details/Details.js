import React, {Component} from 'react';
import Header from '../../common/header/Header.js'
import moviesData from '../../common/moviesData.js';

class Details extends Component{

    constructor(){
        super();
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((movie) => {
            return movie.id === this.props.movieId
        })[0];
        this.setState({currentState});
        console.log(this.state);
    }
    render() {
        return(
            <div className="details">
            <Header />
            <div className="flex-containerDetails">
                <div className="leftDetails">left</div>
                <div className="middleDetails">middle</div>
                <div className="rightDetails">right</div>
            </div>
            </div>

        )
    }
}

export default Details;