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