import { useMemo, useState } from 'react';
import Button from 'liquid-spirit-styleguide/web/Button';
import Typography from 'liquid-spirit-styleguide/web/Typography';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

type ApprovalStatus = 'Pending' | 'Approved' | 'Declined';

type ApprovalItem = {
  id: string;
  type: string;
  title: string;
  submittedBy: string;
  date: string;
  status: ApprovalStatus;
};

const INITIAL_APPROVALS: ApprovalItem[] = [
  { id: 'a1', type: 'Venue Request', title: 'Feast Hall Booking', submittedBy: 'Aaliyah Rahimi', date: '2026-03-02', status: 'Pending' },
  { id: 'a2', type: 'Member Update', title: 'Address change approval', submittedBy: 'Noah Patel', date: '2026-03-01', status: 'Pending' },
  { id: 'a3', type: 'Treasury Entry', title: 'Fund correction request', submittedBy: 'Samira Lopez', date: '2026-02-28', status: 'Pending' },
];

export default function ApprovalsPage() {
  const [approvals, setApprovals] = useState<ApprovalItem[]>(INITIAL_APPROVALS);

  const pendingApprovals = useMemo(
    () => approvals.filter((approval) => approval.status === 'Pending'),
    [approvals],
  );

  const updateApprovalStatus = (id: string, status: ApprovalStatus) => {
    setApprovals((prev) =>
      prev.map((approval) => (approval.id === id ? { ...approval, status } : approval)),
    );
  };

  return (
    <div>
      <SectionHeader
        title="Approvals"
        subtitle="Pending queue with decision actions and status history."
      />

      <Card title={`Pending (${pendingApprovals.length})`}>
        {pendingApprovals.length ? (
          <div className="approval-stack">
            {pendingApprovals.map((approval) => (
              <article key={approval.id} className="approval-item">
                <div className="approval-main">
                  <Typography as="strong" size="small">{approval.title}</Typography>
                  <Typography as="p" size="small">{approval.type} · {approval.submittedBy}</Typography>
                  <Typography as="small" size="small">{new Date(approval.date).toLocaleDateString()}</Typography>
                </div>
                <div className="approval-actions">
                  <Button label="Approve" onPress={() => updateApprovalStatus(approval.id, 'Approved')} secondary />
                  <Button label="Decline" onPress={() => updateApprovalStatus(approval.id, 'Declined')} error />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <Typography as="p" size="small" className="empty-text">No pending approvals.</Typography>
        )}
      </Card>

      <Card title="Recent decisions">
        <div className="list-stack">
          {approvals
            .filter((approval) => approval.status !== 'Pending')
            .slice(0, 8)
            .map((approval) => (
              <div key={approval.id} className="decision-row">
                <Typography as="span" size="small">{approval.title}</Typography>
                <span className={`status-pill ${approval.status.toLowerCase()}`}>
                  {approval.status}
                </span>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}
