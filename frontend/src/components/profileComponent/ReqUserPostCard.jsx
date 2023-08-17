import React from 'react';
import Post from '../../assets/ndogou etudiant uvs_43.jpg';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import './ReqUserPostCard.css';

function ReqUserPostCard() {
  return (
    <div className="p-2">
      <div className="w-60 h-60 post">
        <img className="cursor-pointer" src={Post} alt="" srcset="" />
        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div className="flex items-center space-x-2">
              <AiFillHeart /> <span>10</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaComment /> <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReqUserPostCard;
