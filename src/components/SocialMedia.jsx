import React from 'react';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const SocialMedia = () => (
 <div className="app__social">
    <div>
    <a href="https://linkedin.com/in/example" target="_blank" rel = "noreferrer">
      <FiLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/example" target="_blank" rel = "noreferrer">
      <FiGithub />
      </a>
    </div>
    <div>
      <a href="https://twitter.com" target="_blank" rel = "noreferrer">
      <FiTwitter />
      </a>
    </div>
 </div>
);

export default SocialMedia;