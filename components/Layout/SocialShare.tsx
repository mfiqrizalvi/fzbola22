'use client';
import React from 'react';
import Styles from './Component.module.css';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  WhatsappShareButton, 
  TelegramShareButton, 
  VKShareButton, 
  RedditShareButton 
} from 'react-share';
import { 
  FacebookIcon, 
  XIcon, 
  LinkedinIcon, 
  WhatsappIcon, 
  TelegramIcon, 
  VKIcon, 
  RedditIcon
} from 'react-share';

const SocialShare = () => {
  const pathname = usePathname();
  const url = `https://fzbola22.online${pathname}`;
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(document.title);
  }, []);

  return (
    <div className={Styles.socialshare}>
      <span>Help Us with Share this Website, Please :) </span><br/><br/>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={30} round />
      </FacebookShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={30} round />
      </TelegramShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TwitterShareButton url={url} title={title}>
        <XIcon size={30} round />
      </TwitterShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={30} round />
      </LinkedinShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={30} round />
      </WhatsappShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <VKShareButton url={url} title={title}>
        <VKIcon size={30} round />
      </VKShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={30} round />
      </RedditShareButton>
    </div>
  );
};

export default SocialShare;