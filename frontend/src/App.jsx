import React, { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    }
  };

  const schedule = {
    Monday: ['Math', 'English'],
    Tuesday: ['Biology', 'History'],
    Wednesday: ['Physics'],
    Thursday: ['Chemistry', 'Art'],
    Friday: ['PE'],
  };

  const renderSchedule = () => {
    return (
      <div style={{ display: 'flex', gap: '10px', marginTop: 20 }}>
        {Object.entries(schedule).map(([day, classes]) => (
          <div key={day} style={{ border: '1px solid #ccc', padding: 10, minWidth: 100 }}>
            <strong>{day}</strong>
            <ul>
              {classes.map((cls, idx) => (
                <li key={idx}>{cls}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {username}!</h2>
      <p>You are now logged in.</p>
      <h3>Your Weekly Schedule</h3>
      {renderSchedule()}
    </div>
  );
}

export default App;