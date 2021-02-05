import React from 'react';
import { Link } from 'react-router-dom';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import GamesRoundedIcon from '@material-ui/icons/GamesRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import userimg from "../assets/images/avatar1.png";
import Clock from 'react-live-clock';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';

const Header = () => {
  return(
    <header>
      <nav>
        <div className="header">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-3">
              <div className="header__logo">
                <Link to="/">DigiCollect</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="header__logo__crm text-center">
                <h1>
                  DigiCRM
                </h1>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="header__rightlist d-flex align-items-center">
                <div className="header__icons d-flex align-items-center">
                  <div className="header__icons__background d-flex align-items-center justify-content-center">
                    <SearchRoundedIcon style={{color: "#FFFFFF"}} />
                  </div>
                  <div className="header__icons__background d-flex align-items-center justify-content-center">
                    <NotificationsNoneRoundedIcon style={{color: "#FFFFFF"}} />
                  </div>
                  <div className="header__icons__background d-flex align-items-center justify-content-center">
                    <GamesRoundedIcon style={{color: "#FFFFFF"}} />
                  </div>
                </div>
                <p className="header__timer"><Clock format="HH:mm:ss" interval={1000} ticking={true} timezone={'Asia/Kolkata'} /> IST</p>
                <div className="header__user__dropdown">
                  <h2><img src={userimg} alt="userimg" />Johan Deo<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="header__menus">
            <ul className="header__menus__list">
              <li><HomeRoundedIcon />Dashboard</li>
              <li><PersonRoundedIcon />Profile<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></li>
              <li><PermContactCalendarRoundedIcon />Contacts<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></li>
              <li><BusinessRoundedIcon />Companies<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></li>
              <li><AttachMoneyRoundedIcon />Sales<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></li>
              <li><AppsRoundedIcon />Products<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></li>
              <li><VpnKeyRoundedIcon />Access Mgmt<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></li>
              <li><TuneRoundedIcon />Tools<ExpandMoreRoundedIcon style={{color: "#FFFFFF"}} /></li>
              <li><SettingsRoundedIcon />Settings</li>
              <li><p><DoubleArrowRoundedIcon /></p></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;