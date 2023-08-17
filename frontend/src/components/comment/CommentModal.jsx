import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import Post from '../../assets/ndogou etudiant uvs_43.jpg';
import Profile from '../../assets/blank-profile-picture-973460_1280.webp';
import { BsThreeDots } from 'react-icons/bs';

const CommentModal = ({ onClose, isOpen }) => {
  return (
    <div>
      <Modal size={'6xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src={Post}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="border w-[55%] p-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src={Profile}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>Natacha</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
