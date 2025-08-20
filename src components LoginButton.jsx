import { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, signOut, onAuthStateChanged } from '../lib/firebase';

export default function LoginButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => setUser(u));
    return () => unsub();
  }, []);

  const doLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      alert('Login error: ' + (e?.message || e));
    }
  };

  const doLogout = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <div style={{ display:'flex', gap:'12px', alignItems:'center' }}>
        <span>Welcome: <b>{user.email}</b></span>
        <button onClick={doLogout}>Logout</button>
      </div>
    );
  }

  return <button onClick={doLogin}>Login with Google</button>;
}
