import { createServerComponentClient } from './supabase'
import { Post } from '@/types/supabase'

export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = await createServerComponentClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching published posts:', error)
    return []
  }

  return data || []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = await createServerComponentClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true) // Ensure we only fetch published posts by slug
    .single()

  if (error) {
    // Log error only if it's not the "No rows found" error, which is expected for invalid slugs
    if (error.code !== 'PGRST116') {
      console.error(`Error fetching post by slug (${slug}):`, error)
    }
    return null
  }

  return data
} 