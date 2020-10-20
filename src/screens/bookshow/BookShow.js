import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
import Home from '../Home/Home.js';
import ReactDOM from 'react-dom';
import '../bookshow/BookShow.css';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import { Button, FormControl, InputLabel, MenuItem, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';


class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            language: "",
            showDate: "",
            showTime: "",
            tickets: 0,
            availableTickets: 10,
            unitPrice: 500,
        }
    }

    backToDetailsPageHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }

    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    showTimeChangeHandler = event => {
        this.setState({ showTime: event.target.value });
    }

    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }

    ticketsChangeHandler = event => {
        this.setState({tickets:event.target.value});
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
                                                <MenuItem key={"loc" + loc.id} value={loc.location}>
                                                    {loc.location}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl required className="formControl">
                                    <InputLabel htmlFor="language">Choose language:</InputLabel>
                                    <Select
                                        value={this.state.language}
                                        onChange={this.languageChangeHandler}>
                                        {
                                            language.map(lang => (
                                                <MenuItem key={"lang" + lang.id} value={lang.language}>
                                                    {lang.language}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl required className="formControl">
                                    <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                    <Select
                                        value={this.state.showDate}
                                        onChange={this.showDateChangeHandler}>
                                        {
                                            showDate.map(date => (
                                                <MenuItem key={"date" + date.id} value={date.showDate}>
                                                    {date.showDate}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl required className="formControl">
                                    <InputLabel htmlFor="showTime">Choose Show Date:</InputLabel>
                                    <Select
                                        value={this.state.showTime}
                                        onChange={this.showTimeChangeHandler}>
                                        {
                                            showTime.map(time => (
                                                <MenuItem key={"time" + time.id} value={time.showTime}>
                                                    {time.showTime}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl className="formControl">
                                    <InputLabel htmlFor="tickets">Tickets:({this.state.availableTickets} available)</InputLabel>
                                    <Input id="tickets" value={this.state.tickets!==0?this.state.tickets:""} onChange={this.ticketsChangeHandler}/>
                                </FormControl>
                                <br/><br/>
                                <Typography>
                                    Unit Price: Rs {this.state.unitPrice}
                                </Typography>
                                <br/>
                                <Typography>
                                    Total Price: Rs {this.state.unitPrice * this.state.tickets}
                                </Typography>
                                <br/>
                                <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">BOOK SHOW</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShow;