import React from 'react';
import './Home.css';
import StoryCircle from '../../components/story/StoryCircle';
import HomeRight from '../../components/HomeRight/HomeRight';
import PostCard from '../../components/post/PostCard';

function Home() {
  return (
    <div>
      <div className="mt-10 flex w-[100%] justify-center">
        <div className="w-[44%] px-10">
          <div className="storyDiv flex space-x-4 border p-4 rounded-md justify-start w-full">
            {[1, 1, 1, 1, 1].map((i) => (
              <StoryCircle key={i} />
            ))}
          </div>
          <div className="space-y-10 w-full mt-10">
            {[1, 1, 1].map((i) => (
              <PostCard key={i} />
            ))}
          </div>
        </div>
        <div className="w-[35%]">
          <HomeRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
