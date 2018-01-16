import React from 'react';

const UserListItem = ({ player }) => {
  const color = player.role.includes('blue') ? 'blue' : 'red';
  const spyMaster = player.role.includes('spy_master');
  const icon = spyMaster ? 'spy' : 'user';

  return (
    <div className="ui item">
      <i className={`${color} ${icon} icon`} />
      <div className="content">{player.username}</div>
    </div>
  );
};

export default UserListItem;
