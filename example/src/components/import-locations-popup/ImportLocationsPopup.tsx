// react imports
import * as React from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// style import
import "./ImportLocationsPopup.scss";

// data import
import { LocationInfo, locationInfos } from "../../data";


const ImportLocationsPopup = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = React.useState<{
    text: string,
    state: 'SUCCESS' | 'PENDING' | 'ERROR'
  }[]>([
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
    // { text: 'Importing Location 1...', state: 'SUCCESS' },
    // { text: 'Importing Location 2...', state: 'PENDING' },
    // { text: 'Importing Location 3...', state: 'ERROR' },
  ]);

  // helper funcs
  const importLocation = async (locationInfo: LocationInfo) => {
    setMessages((messages) => [
      ...messages,
      { text: `Importing ${locationInfo.title}...`, state: 'PENDING' },
    ]);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setMessages(messages => {
          const newMessages = [...messages];
          const lastMessage = newMessages[newMessages.length - 1];
          newMessages[newMessages.length - 1] = {
            text: `${lastMessage.text} Done!`,
            state: 'SUCCESS',
          };
          return newMessages;
        });
        resolve();
      }, 2000);
    });
  };
  const importLocations = async () => {
    for (const locationInfo of locationInfos.slice(0, 10)) {
      await importLocation(locationInfo);
    }
  };

  React.useEffect(() => {
    importLocations();
  }, []);

  return (
    <div className="overlay">
      <div className="popup">
        <button
          className="close-button"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="popup-inner">
          {messages.map((message, index) => (
            <div
              className={`message ${message.state.toLowerCase()}`}
              key={index}
            >
              {message.text}

              {message.state === 'PENDING' && (
                <FontAwesomeIcon
                  style={{ position: 'relative', top: '4px', marginLeft: '5px' }}
                  icon={faSpinner}
                  spin
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportLocationsPopup;
