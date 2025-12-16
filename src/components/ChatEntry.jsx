import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  id, sender, body, timeStamp, liked, onToggleLike, isLocal }) => {

  const entryClass = `chat-entry ${isLocal ? 'local' : 'remote'}`;

  return (
    <div className={entryClass}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>

        <button
          className="like"
          onClick={() => onToggleLike(id)}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onToggleLike: PropTypes.func,
  isLocal: PropTypes.bool,
};

ChatEntry.defaultProps = {
  liked: false,
  onToggleLike: () => {},
  isLocal: true,
};

export default ChatEntry;