import React, { useState } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const Chat = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      userName="Hassan"
      userSecret="123123"
      projectID="db2bca65-baa7-4e63-ae77-9a361e4bca9a"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default Chat;
