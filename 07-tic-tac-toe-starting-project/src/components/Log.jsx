export default function Log({ logs }) {
  return (
    <div id="log">
      <h2>Game Log</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log.message}</li>
        ))}
      </ul>
    </div>
  );
}
