import { useEffect, useRef, useState } from "react"

function SocketConnection (url,topic) {
    const [notification,setNotification] = useState ([]);
    const [connected, setConnected] = useState(false)
    const stompClientRef = useRef (null)

    useEffect ( () => {
        const socket = new SockJS(url);
        const stompClient = Stomp.over(socket);
        stompClient.debug = null;
        stompClient.connect({}, () => {
            setConnected(true);

            stompClient.subscribe(topic, (message) => {
                const notification = JSON.parse (message.body);
                setNotification( (prev) => [notification, ...prev])
            });
        }, (error) => {
            console.error("websocket error ", error);
            setConnected(false);
        });
        stompClientRef.current = stompClient;

        return () => {
            if (stompClientRef.current?.connected) {
                stompClientRef.current.disconnect();
            }
        };
    }, [url, topic]);
    const clearNotifications = () => setNotification([]);
    return {notification,connected, clearNotifications}
  
};
export default SocketConnection