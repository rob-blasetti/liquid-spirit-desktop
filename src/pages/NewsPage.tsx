import { useEffect, useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { fetchCommunityNews } from '../services/desktopDataService';

type Post = { id?: string; _id?: string; title?: string; description?: string; author?: { firstName?: string; lastName?: string }; createdAt?: string };

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCommunityNews()
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || 'Unable to load news'));
  }, []);
  return (
    <div>
      <SectionHeader
        title="News"
        subtitle="Community updates, service stories, and announcements."
      />

      {error ? <p className="empty-text">{error}</p> : null}
      <div className="list-stack">
        {posts.map((post) => (
          <Card key={post.id || post._id} title={post.title || 'News update'}>
            <p>{post.description || 'No summary yet.'}</p>
            <small className="empty-text">
              By {post.author ? `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() : 'Community Office'}
              {post.createdAt ? ` · ${new Date(post.createdAt).toLocaleDateString()}` : ''}
            </small>
          </Card>
        ))}
        {!error && !posts.length ? <p className="empty-text">No news posts found.</p> : null}
      </div>
    </div>
  );
}
