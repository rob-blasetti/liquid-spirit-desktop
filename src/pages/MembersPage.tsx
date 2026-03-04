import { useMemo, useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';

const MOCK_MEMBERS = [
  { id: 'm1', name: 'Aaliyah Rahimi', community: 'Northside', role: 'Secretary', status: 'Active' },
  { id: 'm2', name: 'Noah Patel', community: 'West End', role: 'Treasurer', status: 'Active' },
  { id: 'm3', name: 'Samira Lopez', community: 'Northside', role: 'Member', status: 'Pending' },
  { id: 'm4', name: 'Daniel Kim', community: 'Riverdale', role: 'Member', status: 'Active' },
  { id: 'm5', name: 'Lina Singh', community: 'West End', role: 'Children Class Coordinator', status: 'Inactive' },
];

export default function MembersPage() {
  const [query, setQuery] = useState('');
  const [communityFilter, setCommunityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const communities = useMemo(
    () => ['All', ...new Set(MOCK_MEMBERS.map((member) => member.community))],
    [],
  );

  const filteredMembers = useMemo(() => {
    return MOCK_MEMBERS.filter((member) => {
      const q = query.toLowerCase().trim();
      const queryMatch = !q || `${member.name} ${member.role}`.toLowerCase().includes(q);
      const communityMatch = communityFilter === 'All' || member.community === communityFilter;
      const statusMatch = statusFilter === 'All' || member.status === statusFilter;
      return queryMatch && communityMatch && statusMatch;
    });
  }, [query, communityFilter, statusFilter]);

  return (
    <div>
      <SectionHeader
        title="Members"
        subtitle="Directory with quick filtering for community, status, and search."
      />

      <div className="filters-bar">
        <input
          className="input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name or role"
        />

        <select className="input" value={communityFilter} onChange={(event) => setCommunityFilter(event.target.value)}>
          {communities.map((community) => (
            <option key={community}>{community}</option>
          ))}
        </select>

        <select className="input" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          {['All', 'Active', 'Pending', 'Inactive'].map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Community</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length ? (
              filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.community}</td>
                  <td>{member.role}</td>
                  <td>
                    <span className={`status-pill ${member.status.toLowerCase()}`}>{member.status}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="empty-cell">No members match these filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
