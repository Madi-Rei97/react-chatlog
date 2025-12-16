import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const likeCount = entries.filter((entry) => entry.liked).length;

  const toggleLike = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id
          ? { ...entry, liked: !entry.liked }
          :entry
      )
    );
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <span className="widget" id="heartWidget">
          {likeCount} ❤️s
        </span>
      </header>

      <main>
        <ChatLog
          entries={entries}
          onToggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
