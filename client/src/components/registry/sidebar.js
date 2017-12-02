import React from 'react';

const styles = {
  sidebarHeader: {
    paddingLeft: '8px',
    background: '#0F1E30',
    color: '#ffffff',
    marginTop: '-20px',
    height: '52px'
  },
  selected: {
    color: '#ffffff',
    borderLeft: '6px solid #44DDA3'
  }
};

const Sidebar = ({color, companyName}) => {
  return (
    <div className="sidenav">
      <a style={styles.sidebarHeader} href="#">
        <div className="square" style={{background: color}}/>
        {companyName}
      </a>
      <a href="#">Overview</a>
      <a style={styles.selected} href="#">Register</a>
      <a href="#">Activity</a>
      <a href="#">Transactions</a>
      <a href="#">Raise Capital</a>
    </div>
  );
};

export default Sidebar;