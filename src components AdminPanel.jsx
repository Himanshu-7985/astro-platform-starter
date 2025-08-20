import { signOut } from '../lib/firebase';

export default function AdminPanel() {
  return (
    <div style={{ maxWidth: 800, margin: '24px auto' }}>
      <h1>⚡ Admin Panel</h1>
      <p>Ye panel sirf aapke email ke liye hai.</p>

      <div style={{ marginTop: 16 }}>
        <h3>Quick Actions</h3>
        <ul>
          <li>App settings manage karein</li>
          <li>Future: content add/edit</li>
          <li>Future: logs, analytics</li>
        </ul>
      </div>

      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
