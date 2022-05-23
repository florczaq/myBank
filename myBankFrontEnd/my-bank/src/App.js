import React, { Component } from "react";
import withParam from "./components/others/withParam"
import withNavigation from './components/others/withNavigation'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/welcome_page/Menu";
import Balance from "./components/balance/Balance"
import LoginPage from "./components/login/LoginPage";
import SideNav from "./components/navitgation/SideNav";
// import AuthRoute from "./components/others/AuthRoute"
import EditInfo from "./components/user_informations/EditInfo"
import UserInfo from "./components/user_informations/UserInfo"
import NewCustomer from "./components/customer_creating/NewCustomer";
import TransferPage from "./components/transfer_money/TransferPage";

import "./styles/App.css"

export default class App extends Component {

    render() {
        const MenuN = withNavigation(Menu);
        const LoginPageN = withNavigation(LoginPage);
        const NewCustomerN = withNavigation(NewCustomer);
        const BalanceN = withParam(withNavigation(Balance));
        const UserInfoN = withParam(withNavigation(UserInfo));
        const TransferPageN = withParam(withNavigation(TransferPage));
        const EditInfoN = withParam(withNavigation(EditInfo));
        return (
            <div className="App" >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MenuN />} />
                        <Route path="/registration/new-customer/" element={<NewCustomerN />} />
                        <Route path="/login" element={<LoginPageN />} />
                        <Route path="/customer/:username/info/balance" element={
                            <>
                                <SideNav />
                                <BalanceN />
                            </>
                        } />
                        <Route path="/customer/:username/info" element={
                            <>
                                <SideNav />
                                <UserInfoN />
                            </>
                        } />
                        <Route path="/customer/:username/transfer" element={
                            <>
                                <SideNav />
                                <TransferPageN />
                            </>
                        } />
                        <Route path="/customer/:username/info/edit/:param" element={
                            <>
                                <SideNav />
                                <EditInfoN />
                            </>
                        } />
                    </Routes>
                </BrowserRouter >
            </div >
        );
    }
}