export default function FontSize({
  onDecreaseFontSize,
  onIncreaseFontSize,
  fontSize,
}) {
  return (
    <div>
      <a>Font Size:</a>
      <button onClick={onDecreaseFontSize}>-</button>
      <a>{fontSize}</a>
      <button onClick={onIncreaseFontSize}>+</button>
    </div>
  );
}
