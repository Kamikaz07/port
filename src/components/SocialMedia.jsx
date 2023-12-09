import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
 <div className="app__social">
    <div>
      <BsTwitter />
      <a href="https://twitter.com"/>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
 </div>
);

export default SocialMedia;