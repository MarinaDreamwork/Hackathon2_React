import React from 'react';
import Title from 'react-vanilla-tilt';
import PropTypes from 'prop-types';
const UserCard = ({ children }) => {
    return (
        <Title >
        <div className='userCard' >
            {children}
        </div>
        </Title>
    );
};
UserCard.propTypes = {
    children: PropTypes.array
  };
  
export default UserCard;