import CTACard from 'liquid-spirit-styleguide/web/CTACard';

type Post = {
  id?: string;
  _id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  author?: { firstName?: string; lastName?: string };
  createdAt?: string;
};

export default function PostCard({ post }: { post: Post }) {
  const title = post.title || 'News update';
  const author = post.author ? `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() : 'Community Office';
  const date = post.createdAt ? new Date(post.createdAt).toLocaleDateString() : '';

  return (
    <CTACard
      title={title}
      description={post.description || 'No summary yet.'}
      ctaHint={`By ${author}${date ? ` · ${date}` : ''}`}
      ctaLabel="Read"
      variant="secondary"
    />
  );
}
