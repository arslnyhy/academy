export interface Post {
  id: string; // uuid
  created_at: string; // timestamp with time zone
  updated_at: string; // timestamp with time zone
  title: string;
  slug: string;
  content?: string | null;
  excerpt?: string | null;
  cover_image_url?: string | null;
  published: boolean;
  published_at?: string | null; // timestamp with time zone
  author_id?: string | null; // uuid
}

export interface Instructor {
  id: string; // uuid
  created_at: string; // timestamp with time zone
  updated_at: string; // timestamp with time zone
  name: string;
  email: string;
  avatar_url?: string | null;
  bio?: string | null;
} 