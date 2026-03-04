import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const POSTS = [
  { id: 'n1', title: 'Feast reflections from Northside', excerpt: 'A beautiful evening of prayer and consultation...', author: 'Community Office' },
  { id: 'n2', title: 'Youth service weekend update', excerpt: 'Teams completed 3 neighborhood visits and follow-up calls.', author: 'Youth Coordinators' },
  { id: 'n3', title: 'Treasury stewardship note', excerpt: 'Monthly contribution summary and gratitude to supporters.', author: 'Treasury Team' },
];

export default function NewsPage() {
  return (
    <div>
      <SectionHeader
        title="News"
        subtitle="Community updates, service stories, and announcements."
      />

      <div className="list-stack">
        {POSTS.map((post) => (
          <Card key={post.id} title={post.title}>
            <p>{post.excerpt}</p>
            <small className="empty-text">By {post.author}</small>
          </Card>
        ))}
      </div>
    </div>
  );
}
