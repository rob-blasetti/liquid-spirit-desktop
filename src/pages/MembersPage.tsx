import { useMemo, useState } from 'react';
import { type ChangeEvent } from 'react';
import Input from 'liquid-spirit-styleguide/web/Input';
import Select from 'liquid-spirit-styleguide/web/Select';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

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
        <Input
          label="Search"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
          placeholder="Search by name or role"
        />

        <Select
          label="Community"
          value={communityFilter}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => setCommunityFilter(event.target.value)}
          options={communities}
        />

        <Select
          label="Status"
          value={statusFilter}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => setStatusFilter(event.target.value)}
          options={['All', 'Active', 'Pending', 'Inactive']}
        />
      </div>

      <Card title="Member directory">
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
      </Card>
    </div>
  );
}
