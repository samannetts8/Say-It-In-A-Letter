export default function StyleButton({ fontname, onStyleButtonClick }) {
  return <button onClick={onStyleButtonClick}>{fontname}</button>;
}
