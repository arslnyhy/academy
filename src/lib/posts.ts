import { createServerComponentClient } from './supabase'
import { Post, Instructor } from '@/types/supabase'

export interface PostWithAuthor extends Post {
  instructors: Pick<Instructor, 'id' | 'name' | 'avatar_url'>;
}

export async function getPublishedPosts(): Promise<PostWithAuthor[]> {
  const supabase = await createServerComponentClient()
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      instructors!author_id (
        id,
        name,
        avatar_url
      )
    `)
    .eq('published', true)
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching published posts:', error)
    return []
  }

  return (data as PostWithAuthor[]) || []
}

export async function getPostBySlug(slug: string): Promise<PostWithAuthor | null> {
  const supabase = await createServerComponentClient()
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      instructors!author_id (
        id,
        name,
        avatar_url
      )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    // Log error only if it's not the "No rows found" error, which is expected for invalid slugs
    if (error.code !== 'PGRST116') {
      console.error(`Error fetching post by slug (${slug}):`, error)
    }
    return null
  }

  return data as PostWithAuthor
}

export async function getRandomPosts(currentSlug: string, limit: number = 3): Promise<PostWithAuthor[]> {
  const supabase = await createServerComponentClient();
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      instructors!author_id (
        id,
        name,
        avatar_url
      )
    `)
    .eq('published', true)
    .neq('slug', currentSlug) // Exclude the current post

  if (error) {
    console.error('Error fetching candidate posts for random selection. Full error object:', JSON.stringify(error, null, 2));
    console.error('Error message:', error?.message);
    console.error('Error details:', error?.details);
    console.error('Error hint:', error?.hint);
    console.error('Error code:', error?.code);
    return [];
  }

  if (!data || data.length === 0) {
    return [];
  }

  // Shuffle the array and pick the first 'limit' posts
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit) as PostWithAuthor[];
} 