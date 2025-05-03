'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import { useState, useEffect } from 'react'; // Import useState and useEffect

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  // State to hold the calculated URL
  const [linkedInShareUrl, setLinkedInShareUrl] = useState<string>('#'); // Use '#' as a safe default

  useEffect(() => {
    // This effect runs only *after* the component mounts on the client-side
    // where 'window' is available.
    const postUrl = `${window.location.origin}/blogs/${slug}`;
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`;
    
    // Update the state with the client-side generated URL
    setLinkedInShareUrl(shareUrl);

  }, [slug, title]); // Dependencies: re-run effect if slug or title props change

  return (
    <div className="flex items-center gap-2">
      {/* Use the state variable for the href */}
      <Link href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="border-[#27c6d9] hover:bg-[#27c6d9]/10" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}