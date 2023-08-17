import React from 'react';
import ProfileUserDetails from '../../components/profileComponent/ProfileUserDetails';
import ReqUserPostPart from '../../components/profileComponent/ReqUserPostPart';

function Profile() {
  return (
    <div className="px-20">
      <div>
        <ProfileUserDetails />
      </div>
      <div>
        <ReqUserPostPart />
      </div>
    </div>
  );
}

export default Profile;
