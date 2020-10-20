import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
import Home from '../Home/Home.js';
import ReactDOM from 'react-dom';
import '../bookshow/BookShow.css';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import { FormControl, InputLabel, MenuItem, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';


class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location :"",
        }
    }

    backToDetailsPageHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = event => {
        this.setState({location : event.target.value});
    }

    render() {
        return (
            <div>
                <Header />
                <br />
                <div className="bookShow">
                    <div className="backtomovies-link" style={{ textAlign: "center", cursor: "pointer" }}>
                        <Typography>
                            <span onClick={this.backToDetailsPageHandler}>&#60;Back To Movie Details</span>
                        </Typography>
                    </div>
                    <div>
                        <Card className="cardStyle">
                            <CardContent>
                                <Typography variant="headline" component="h3">
                                    BOOK SHOW
                            </Typography>
                                <FormControl required className="formControl">
                                    <InputLabel htmlFor="location">Choose location:</InputLabel>
                                    <Select
                                        value={this.state.location}
                                        onChange={this.locationChangeHandler}>
                                        {
                                            location.map(loc => (
                                                <MenuItem key={"loc"+loc.id} value={loc.location}>
                                                    {loc.location}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShow;