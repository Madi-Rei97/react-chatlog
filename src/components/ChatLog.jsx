import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;