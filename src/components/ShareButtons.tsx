'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  const getLinkedInShareUrl = () => {
    const postUrl = `${window.location.origin}/blogs/${slug}`;
    return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`;
  };

  return (
    <div className="flex items-center gap-2">
      <Link href={getLinkedInShareUrl()} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="border-[#27c6d9] hover:bg-[#27c6d9]/10" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
} 