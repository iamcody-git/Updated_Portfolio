import React from 'react';

const Skill = () => {
  return (
    <section id="skills" className="px-8 text-center">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      <div className="flex justify-center flex-wrap">
        <div className="skill mx-4 my-2">
          <h3 className="text-lg font-semibold mb-2">HTML/CSS</h3>
          <div className="skill-level bg-gray-900 h-4 rounded-full">
            <div className="skill-progress bg-yellow-500 h-full" style={{ width: '99%' }}></div>
          </div>
        </div>
        
        <div className="skill mx-4 my-2">
          <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
          <div className="skill-level bg-gray-900 h-4 rounded-full">
            <div className="skill-progress bg-yellow-500 h-full" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="skill mx-4 my-2">
          <h3 className="text-lg font-semibold mb-2">PHP</h3>
          <div className="skill-level bg-gray-900 h-4 rounded-full">
            <div className="skill-progress bg-yellow-500 h-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        
        <div className="skill mx-4 my-2">
          <h3 className="text-lg font-semibold mb-2">React.js</h3>
          <div className="skill-level bg-gray-900 h-4 rounded-full">
            <div className="skill-progress bg-yellow-500 h-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
