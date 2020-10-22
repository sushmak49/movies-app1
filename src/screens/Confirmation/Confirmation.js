import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
import Typography from '@material-ui/core/Typography';
import '../Confirmation/Confirmation.css';
import { Button, Card, CardContent, FormControl, Input, InputLabel } from '@material-ui/core';
import BookShow from '../bookshow/BookShow.js';
import ReactDOM from 'react-dom';
import SnackBar from '@material-ui/core/Snackbar';

class Confirmation extends Component {

    constructor(props) {
        super();
        this.state = props;

    }

    confirmBookingHandler = () => {
        
    }

    backToBookShowHandler = () => {
        ReactDOM.render(<BookShow/>,document.getElementById('root'));
    }
    render() {
        return (
            <div>
                <Header />
                <div className="backtobookshow">
                    <Typography>
                        <span onClick={this.backToBookShowHandler}>&#60;Back To Book Show</span>
                    </Typography>
                    <br/>
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                <span>SUMMARY</span>
                            </Typography>
                            <Typography>
                                Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.ticketDetails.location}
                            </Typography>
                            <Typography>
                                Language:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.ticketDetails.language}
                            </Typography>
                            <Typography>
                                Show Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.ticketDetails.showDate}
                            </Typography>
                            <Typography>
                                Show Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.ticketDetails.showTime}
                            </Typography>
                            <Typography>
                                Tickets:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.ticketDetails.tickets}
                            </Typography>
                            <Typography>
                                UnitPrice:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.ticketDetails.unitPrice}
                            </Typography>
                            <FormControl>
                                <InputLabel htmlFor="coupon-code">Coupon Code</InputLabel>
                                <Input id="coupon-code">
                                </Input>
                            </FormControl>
                            <span>
                                <Button color="primary" variant="contained">APPLY</Button>
                            </span>
                            <Typography>
                                Total Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.ticketDetails.tickets*this.props.ticketDetails.unitPrice}
                            </Typography>
                            <br /><br />
                            <Button id="confirm-booking" variant="contained" color="primary" onClick={this.confirmBookingHandler}>CONFIRM BOOKING</Button>
                            
                        </CardContent>
                    </Card>
                    {<SnackBar
                        anchorOrigin={'top','center'}
                        message="Booking Confirmed">
                    </SnackBar>}
                </div>
            </div>
        )
    }
}

export default Confirmation;