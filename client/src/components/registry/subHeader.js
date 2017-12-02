import React from 'react';

const styles = {
  subHeader: {
    marginTop: '4px',
    background: '#FFFFFF',
    height: '150px',
    marginLeft: '228px'
  },
  title: {
    marginTop: '64px',
    marginLeft: '25px'
  },
  options: {
    bottom: '0',
    marginTop: '75px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '16px'
  }
};

const SubHeader = () => {
  return (
    <div style={styles.subHeader}>
      <div style={styles.title}>
        <h2>Register</h2>
      </div>
      <div style={styles.options}>
        <span className="option1"><a href="#">REGISTER</a></span>
        <span className="option2"><a href="#">CHANGE LOG</a></span>
      </div>
    </div>
  );
};

export default SubHeader;