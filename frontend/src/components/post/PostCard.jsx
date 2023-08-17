import React, { useState } from 'react';
import './PostCard.css';
import Profile from '../../assets/blank-profile-picture-973460_1280.webp';
import Post from '../../assets/ndogou etudiant uvs_43.jpg';
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';

function PostCard() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSaved = () => {
    setIsSaved(!isSaved);
  };

  const handlePostLicked = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <div className="w-full rounded-md border">
        <div className="flex items-center justify-between w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src={Profile}
              alt=""
              srcset=""
            />
            <div className="pl-2">
              <p className="font-semi-bold text-sm">Natacha</p>
              <p className="font-thin text-sm">Ndayane</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropdown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={Post} alt="" srcset="" />
        </div>
        <div className="flex w-full justify-between px-4 py-5">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostLicked}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLicked}
              />
            )}
            <FaRegComment
              onClick={onOpen}
              className="text-2xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="flex items-center cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSaved}
                className="text-2xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSaved}
                className="text-2xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 py-2 cursor-pointer text-sm">
            View all 12 comments
          </p>
        </div>
        <div className="w-full border border-t">
          <div className="flex w-full items-center px-4 py-2">
            <BsEmojiSmile className="text-2xl" />
            <input
              className="commentInput"
              type="text"
              placeholder="Add a comment..."
            />
            <input type="submit" value={'Post'} className="text-blue-500" />
          </div>
        </div>
      </div>

      <CommentModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
}

export default PostCard;
