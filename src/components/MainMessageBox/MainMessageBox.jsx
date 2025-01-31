import "./MainMessageBox.css";

export default function MainMessageBox({
  MessageBoxContent,
  fontStyle,
  color,
}) {
  return (
    <p className={`${fontStyle}`} style={{ color }}>
      {MessageBoxContent}
    </p>
  );
}
