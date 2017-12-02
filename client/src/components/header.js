import React from 'react';
import {Link} from 'react-router-dom';
import Notification from './icons/notification.svg';
import Menu from './icons/menu.svg';
import profileImage from '../profile.jpeg';

const styles = {
  header: {
    height: '50px',
    background: '#EEEEEE',
    boxShadow: '2px 2px 4px #ababab',
    position: 'fixed',
    width: '100%',
    top: '0'
  },
  notification: {
    marginTop: '3px',
    marginRight: '20px',
    paddingLeft: '20px',
    position: 'absolute',
    right: '0',
    display: 'inline-block'
  },
  smallProfilePicture: {
    marginLeft: '15px',
    marginTop: '5px',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    background: `url(${profileImage}) no-repeat center center`,
    backgroundSize: 'cover',
    position: 'absolute',
    display: 'inlineBlock'
  }
};

const Header = ({displayProfilePhoto}) => {
  const photo = <Link to='/'>
    <div style={styles.smallProfilePicture}></div>
  </Link>;

  return (
    <div style={styles.header}>
      {displayProfilePhoto && photo}
      <div className="header_text">
        Owners Room
      </div>
      <div style={styles.notification}>
        <img src={Notification} height="50" width="50" style={{paddingRight: "20px"}} alt="notification"/>
        <img src={Menu} height="30" width="30" alt="menu"/>
      </div>
    </div>
  );
};

export default Header;