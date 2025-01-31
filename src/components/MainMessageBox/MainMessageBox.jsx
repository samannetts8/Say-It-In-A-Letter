import "./MainMessageBox.css";

export default function MainMessageBox({
  MessageBoxContent,
  fontStyle,
  color,
  fontSizeAdjust,
}) {
  const default_font_size = {
    one: 15,
    two: 14,
    three: 16,
    four: 16,
    five: 15,
    six: 14,
    seven: 15,
  };
  return (
    <p
      className={`${fontStyle}`}
      style={{
        color,
        fontSize: `${default_font_size[fontStyle] + fontSizeAdjust}px`,
      }}
    >
      {MessageBoxContent}
    </p>
  );
}
