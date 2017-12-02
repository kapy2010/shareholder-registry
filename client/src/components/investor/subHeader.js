import React from 'react';
import profileImage from '../../profile.jpeg';

const styles = {
  subHeader: {
    background: '#FFFFFF',
    height: '164px',
  },
  profilePicture: {
    marginTop: '76px',
    marginLeft: '50px',
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: `url(${profileImage}) no-repeat center center`,
    backgroundSize: 'cover'
  },
  title: {
    marginTop: '-125px',
    marginLeft: '250px',
  }
};

const SubHeader = () => {
  return (
    <div style={styles.subHeader}>
      <div style={styles.profilePicture}></div>
      <div style={styles.title}><h2>Pia Person</h2><h4>Person Invest AS</h4></div>
    </div>
  );
};

export default SubHeader;