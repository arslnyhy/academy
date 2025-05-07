'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord"
import { useState, useEffect } from 'react'; // Import useState and useEffect

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  // State to hold the calculated URLs
  const [shareUrls, setShareUrls] = useState({
    linkedIn: '#',
    twitter: '#',
    discord: '#'
  });

  useEffect(() => {
    // This effect runs only *after* the component mounts on the client-side
    // where 'window' is available.
    const postUrl = `${window.location.origin}/blogs/${slug}`;
    
    // Generate share URLs for different platforms
    const urls = {
      linkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`,
      discord: `https://discord.com/channels/@me?message=${encodeURIComponent(`Check out this article: ${title} ${postUrl}`)}`
    };
    
    // Update the state with the client-side generated URLs
    setShareUrls(urls);

  }, [slug, title]); // Dependencies: re-run effect if slug or title props change

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

      {/* Discord Share Button */}
      <Link href={shareUrls.discord} target="_blank" rel="noopener noreferrer">
        <Button 
          variant="outline" 
          size="icon" 
          className="border-[#27c6d9] hover:bg-[#27c6d9]/10" 
          aria-label="Share on Discord"
        >
          <DiscordIcon className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}