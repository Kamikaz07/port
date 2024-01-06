import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const SocialMedia = () => (
 <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/rodrigo-fonseca-kamiweb" target="_blank" rel = "noreferrer">
      <FiLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Kamikaz07" target="_blank" rel = "noreferrer">
      <FiGithub />
      </a>
    </div>
 </div>
);

export default SocialMedia;