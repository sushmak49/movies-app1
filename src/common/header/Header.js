import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText'

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            iniPasswordRequired: "dispNone",
            iniPassword: "",
            contactRequired: "dispNone",
            contact: "",
        }
        console.log(this.state);
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true, value: 0 });
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            iniPasswordRequired: "dispNone",
            iniPassword: "",
            contactRequired: "dispNone",
            contact: "",
              });
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }
    loginClickHandler = () => {

        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }
    inputFirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value });
    }
    inputLastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value });
    }
    inputInipasswordChangeHandler = (e) => {
        this.setState({ iniPassword: e.target.value });
    }
    inputContactChangeHandler = (e) => {
        this.setState({ contact: e.target.value });
    }
    inputEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }

    registerClickHandler = () => {

        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        this.state.iniPassword === "" ? this.setState({ iniPasswordRequired: "dispBlock" }) : this.setState({ iniPasswordRequired: "dispNone" });
        this.state.contact === "" ? this.setState({ contactRequired: "dispBlock" }) : this.setState({ contactRequired: "dispNone" });
    }
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <div className="modal-container">
                    <Modal className="modal-container" isOpen={this.state.modalIsOpen} ariaHideApp={false} contentLabel="login" onRequestClose={this.closeModalHandler}>
                        <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                            <Tab label="Login">login tab</Tab>
                            <Tab label="Register" />
                        </Tabs>
                        {this.state.value === 0 && <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username:</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password:</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}></Input>
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer>
                        }
                        {this.state.value === 1 &&
                            <TabContainer>
                                <FormControl required>
                                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                                    <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}></Input>
                                    <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                                </FormControl>
                                <br />
                                <FormControl required>
                                    <InputLabel>Last Name</InputLabel>
                                    <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}></Input>
                                    <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                                </FormControl>
                                <br />
                                <FormControl required>
                                    <InputLabel>Email</InputLabel>
                                    <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                                    <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                                </FormControl>
                                <br />
                                <FormControl required>
                                    <InputLabel>Password</InputLabel>
                                    <Input id="iniPassword" type="password" password={this.state.password} onChange={this.inputInipasswordChangeHandler}></Input>
                                    <FormHelperText className={this.state.iniPasswordRequired}><span className="red">required</span></FormHelperText>
                                </FormControl>
                                <br />
                                <FormControl required>
                                    <InputLabel>Contact No.</InputLabel>
                                    <Input id="contact"  type="text" contact={this.state.contact} onChange={this.inputContactChangeHandler}></Input>
                                    <FormHelperText className={this.state.contactRequired}><span className="red">required</span></FormHelperText>
                                </FormControl>
                                <br/><br/>
                                <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                            </TabContainer>
                        }
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Header;