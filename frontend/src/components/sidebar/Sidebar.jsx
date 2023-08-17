import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import Instagram from '../../assets/zqpwkLQ.png';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const handleTabCLick = (title) => {
    setActiveTab(title);

    if (title === 'Profile') {
      navigate('/username');
    } else if (title === 'Home') {
      navigate('/');
    } else {
    }
  };

  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-10">
        <div>
          <div className="pt-10">
            <img className="w-40" src={Instagram} alt="Instagram" />
          </div>
          <div className="mt-10">
            {menu.map((item, i) => (
              <div
                onClick={() => handleTabCLick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
                key={i}
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p className={`${activeTab === item.title ? 'font-bold' : ''}`}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          <p className="ml-5">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
