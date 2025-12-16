import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const LOCAL_USER = 'Vladimir';

const ChatLog = ({ entries, onToggleLike }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => {
        const isLocal = entry.sender === LOCAL_USER;

        return (
          <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onToggleLike={onToggleLike}
            isLocal={isLocal}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array,
  onToggleLike: PropTypes.func,
};

ChatLog.defaultProps = {
  entries: [],
  onToggleLike: () => {},
};

export default ChatLog;