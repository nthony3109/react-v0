function NoticationItems ( { title, body, type, timestamp } ) {
    const TYPE_STYLES = {
        SUCCESS: { border: "#4CAF50", icon: "✅" },
        WARNING: { border: "#FF9800", icon: "⚠️" },
        INFO:    { border: "#2196F3", icon: "ℹ️" },
        };
    const style = TYPE_STYLES[type] || TYPE_STYLES.INFO;

    return (
        <div>
            <strong> {style.icon} {title} </strong>
            <small> {new Date(timestamp).toLocaleTimeString() } </small>
        </div>
    )
}
export default NoticationItems