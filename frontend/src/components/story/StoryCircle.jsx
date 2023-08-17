import React from 'react';
import Story from '../../assets/ndogou etudiant uvs_43.jpg';

function StoryCircle() {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <img className="w-16 h-16 rounded-full" src={Story} alt="" srcset="" />
      <p>Natacha</p>
    </div>
  );
}

export default StoryCircle;
