import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged } from '../lib/firebase';

const ADMIN_EMAIL = import.meta.env.PUBLIC_ADMIN_EMAIL;

export default function AdminGate({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => setUser(u || null));
    return () => unsub();
  }, []);

  if (user === undefined) return <p>Loading…</p>;
  if (!user) return <p>❌ Access denied. Please login first.</p>;
  if (user.email !== ADMIN_EMAIL) return <p>🚫 Only admin can view this page.</p>;

  return <>{children}</>;
}
