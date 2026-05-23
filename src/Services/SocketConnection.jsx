import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs.min.js";

const useWebSocket = (url, topic) => {
  const [notifications, setNotifications] = useState([]);
  const [connected, setConnected] = useState(false);
  const clientRef = useRef(null);

  useEffect(() => {
    const client = new Client ({
      webSocketFactory: () => new SockJS(url),
      onConnect: () => {
        setConnected(true);
        client.subscribe(topic, (message) => {
          console.log("1. raw message.body:", message.body);
  console.log("2. typeof message.body:", typeof message.body);
  
  const raw1 = JSON.parse(message.body);
  console.log("3. after first parse:", raw);
  console.log("4. typeof after first parse:", typeof raw);
          console.log("backend message :" + message.body)
         const raw = JSON.parse(message.body);
         const notification = typeof raw === "string" ? JSON.parse(raw) : raw;
          setNotifications((prev) => [notification, ...prev]);
          console.log("useState value: " + notification)
        });
      },
      onDisconnect: () => setConnected(false),
    });

    client.activate();
    clientRef.current = client;

    return () => client.deactivate(); // cleanup on unmount
  }, [url, topic]);

  const clearNotifications = () => setNotifications([]);

  return { notifications, connected, clearNotifications };
};

export default useWebSocket;