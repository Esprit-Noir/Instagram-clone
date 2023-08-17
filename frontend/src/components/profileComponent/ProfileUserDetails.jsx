import React from 'react';
import { TbCircleDashed } from 'react-icons/tb';
import Profile from '../../assets/blank-profile-picture-973460_1280.webp';

function ProfileUserDetails() {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            src={Profile}
            alt=""
            srcset=""
            className="w-32 h-32 rounded-full border"
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>Natacha</p>
            <button>Edit Profile</button>
            <TbCircleDashed className="text-2xl" />
          </div>
          <div className="flex space-x-10 items-center">
            <dive>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </dive>
            <dive>
              <span className="font-semibold mr-2">154</span>
              <span>followers</span>
            </dive>
            <dive>
              <span className="font-semibold mr-2">12</span>
              <span>following</span>
            </dive>
          </div>
          <div className="">
            <p className="font-semibold">Aminata Sow</p>
            <p className="font-thin text-sm">
              🏀 Basketball player | 🌆 City explorer | 🎮 Gamer at heart | 📷
              Photography enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserDetails;
