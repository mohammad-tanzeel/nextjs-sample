import React from 'react'
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

export default function SocialMedia() {
return (
	<div>
	<h1>Social Share - GeeksforGeeks</h1>
	<FacebookShareButton
		url={'http://localhost:3000'} >
		<FacebookIcon size={32} round />
	</FacebookShareButton>
	<PinterestShareButton
		url={'http://localhost:3000'} >
		<PinterestIcon size={32} round />
	</PinterestShareButton>
	<RedditShareButton
		url={'http://localhost:3000'} >
		<RedditIcon size={32} round />
	</RedditShareButton>
	<WhatsappShareButton
		url={'http://localhost:3000'} >
		<WhatsappIcon size={32} round />
	</WhatsappShareButton>
	<LinkedinShareButton
		url={'http://localhost:3000'} >
		<LinkedinIcon size={32} round />
	</LinkedinShareButton>
    <TwitterShareButton url={'http://localhost:3000'} >
		<TwitterIcon size={32} round />         
    </TwitterShareButton>
	</div>
)
}
