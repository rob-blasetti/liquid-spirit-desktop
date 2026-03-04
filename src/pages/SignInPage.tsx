import { type ChangeEvent, type FormEvent, useState } from 'react';
import Button from 'liquid-spirit-styleguide/web/Button';
import Input from 'liquid-spirit-styleguide/web/Input';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { useAuth } from '../contexts/AuthContext';

export default function SignInPage() {
  const { signInWithPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signInWithPassword(email, password);
    } catch (err: any) {
      setError(err?.message || 'Unable to sign in.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '60px auto' }}>
      <SectionHeader title="Sign In" subtitle="Liquid Spirit Desktop" />
      <Card title="Account access">
        <form onSubmit={onSubmit} className="list-stack">
          <Input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} label="Email" placeholder="you@example.com" type="email" required />
          <Input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} label="Password" placeholder="••••••••" type="password" required />
          {error ? <p className="empty-text">{error}</p> : null}
          <Button type="submit" label={submitting ? 'Signing in…' : 'Sign In'} disabled={submitting} primary />
        </form>
      </Card>
    </div>
  );
}
