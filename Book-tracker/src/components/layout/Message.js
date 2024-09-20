import styles from "./Message.module.css";

import { useState, useEffect } from "react";

function Message({ messageText, type }) {
  const [visible, setVisible] = useState();

  useEffect(() => {
    if (!messageText) {
      setVisible(false);
    }

    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout();
  }, []);

  return <>{visible && <div className={styles.message}>{messageText}</div>}</>;
}

export default Message;
