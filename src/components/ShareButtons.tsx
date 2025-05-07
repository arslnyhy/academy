'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"
// import { DiscordIcon } from "@/components/icons/discord" // Comment out DiscordIcon import
import { useState, useEffect } from 'react';

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  const [shareUrls, setShareUrls] = useState({
    linkedIn: '#',
    twitter: '#'
  });
  // const [copied, setCopied] = useState(false); // Comment out copied state
  // const [postUrl, setPostUrl] = useState(''); // Comment out postUrl state

  useEffect(() => {
    // Use the environment variable for the base URL, falling back to the production domain
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arsalanacademy.com';
    const url = `${baseUrl}/blogs/${slug}`;
    // setPostUrl(url); // Comment out setPostUrl
    
    // Generate share URLs for different platforms
    const urls = {
      linkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    };
    
    setShareUrls(urls);
  }, [slug, title]);

  // const copyToClipboard = async () => { // Comment out copyToClipboard function
  //   try {
  //     // await navigator.clipboard.writeText(`${title}\n${postUrl}`); // Comment out usage of postUrl
  //     // setCopied(true); // Comment out usage of copied state
  //     // setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  //   } catch (err) {
  //     // console.error('Failed to copy:', err);
  //   }
  // };

  return (
    <div className="flex items-center gap-2">
      {/* LinkedIn Share Button */}
      <Link href={shareUrls.linkedIn} target="_blank" rel="noopener noreferrer">
        <Button 
          variant="outline" 
          size="icon" 
          className="border-[#27c6d9] hover:bg-[#27c6d9]/10" 
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
      </Link>

      {/* Twitter Share Button */}
      <Link href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
        <Button 
          variant="outline" 
          size="icon" 
          className="border-[#27c6d9] hover:bg-[#27c6d9]/10" 
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </Button>
      </Link>

      {/* Discord Copy Button */}
      {/* <Button 
        variant="outline" 
        size="icon" 
        className="border-[#27c6d9] hover:bg-[#27c6d9]/10" 
        // onClick={copyToClipboard} // Comment out onClick handler
        aria-label="Copy link for Discord"
        title="Copy link to share on Discord"
      >
        {/* {copied ? ( // Comment out conditional rendering
          <Check className="h-4 w-4 text-green-500" /> // Check import was removed
        ) : (
          <DiscordIcon className="h-4 w-4" />
        )} *//*}
      </Button> */}
    </div>
  );
}