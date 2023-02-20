import React from 'react'
import Link from 'next/link'

import {
FacebookShareButton,
FacebookIcon,
PinterestShareButton,
PinterestIcon,
RedditShareButton,
RedditIcon,
WhatsappShareButton,
WhatsappIcon,
LinkedinShareButton,
LinkedinIcon,
TwitterShareButton,
TwitterIcon
} from 'next-share';


const SocialIconsComp = () => {

    const handleOnClick = () => {
        if (navigator.share) {
        navigator
            .share({
            title: "Test",
            text: "test dads adsa",
            url: "https://www.google.com/" })
            .then(() => {
            console.log('Successfully shared');
            })
            .catch(error => {
            console.error('Something went wrong sharing the blog', error);
            });
        }
  }


  return (
    <div className="socialCont">
      
    <ul className="social">
        <li className=""><a href="#" onClick={handleOnClick}><svg><use href="#Share"></use></svg></a></li>
         {/*<li className="d-mobile"><a href="#"><svg><use href="#text-size"></use></svg></a></li>
          <li className="xs-hidden"><a href="#"><svg><use href="#link"></use></svg></a></li> */}
         <li className="xs-hidden"><TwitterShareButton url={'http://localhost:3000'} >
		<TwitterIcon size={32} round />         
    </TwitterShareButton></li>
         <li className="xs-hidden"><FacebookShareButton
		url={'http://localhost:3000'} >
		<FacebookIcon size={32} round />
	</FacebookShareButton></li>
         
         <li className="share-btn"><a href="#"><svg><use href="#share"></use></svg></a></li>
         <li><Link href="#"><a className="bookmark" onClick={(e) => {e.preventDefault();pluslistingBookmark(bookmarkobj)}}><svg><use href="#bookmark"></use></svg></a></Link></li>
         <li><a href="/" className="feedback"><span className="count">10</span><svg><use href="#comment"></use></svg></a></li>
     </ul>
     </div>
  )
}

export default SocialIconsComp