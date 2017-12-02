import React from 'react';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import MdLibraryBooks from 'react-icons/lib/md/library-books';
import MdNotificationsNone from 'react-icons/lib/md/notifications-none';
import MdWork from 'react-icons/lib/md/work';
import MdAttachMoney from 'react-icons/lib/md/attach-money';

const styles = {
  sidebarHeader: {
    paddingLeft: '20px',
    background: '#0F1E30',
    color: '#ffffff',
    marginTop: '-20px',
    height: '52px'
  },
  selected: {
    color: '#ffffff',
    borderLeft: '6px solid #44DDA3',
    paddingLeft: '20px'
  }
};

const Sidebar = ({color, companyName}) => {
  return (
    <div className="sidenav">
      <a style={styles.sidebarHeader} href="#">
        <div className="square" style={{background: color}}/>
        {companyName}
      </a>
      <a href="#"><MdRemoveRedEye size={25} style={{marginRight: '14px'}}/>Overview</a>
      <a style={styles.selected} href="#"><MdLibraryBooks size={25} style={{marginRight: '14px'}}/>Register</a>
      <a href="#"><MdNotificationsNone size={25} style={{marginRight: '14px'}}/>Activity</a>
      <a href="#"><MdWork size={25} style={{marginRight: '14px'}}/>Transactions</a>
      <a href="#"><MdAttachMoney size={25} style={{marginRight: '14px'}}/>Raise Capital</a>
    </div>
  );
};

export default Sidebar;