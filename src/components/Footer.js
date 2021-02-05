import React from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';

const Footer = () => {
  return (
    <footer className="">
      <div className="footer">
        <div className="row">
          <div className="col-lg-4">
            <p>Version: V1.3.10</p>
          </div>
          <div className="col-lg-4 text-center">
            <button className="footer__help" type="button">Helpdesk</button>
            <p>&copy; CopyRight 2014 - {(new Date().getFullYear())} DigiCollect - All rights reserved</p>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="footer__options d-flex align-items-center">
              <p><HomeRoundedIcon /></p>
              <p><SearchRoundedIcon style={{color: "#FFFFFF"}} /></p>
              <p><ChatBubbleRoundedIcon /></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;