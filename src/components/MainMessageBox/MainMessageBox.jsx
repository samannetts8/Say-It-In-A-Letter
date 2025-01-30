import "./MainMessageBox.css";

export default function MainMessageBox({ MessageBoxContent, fontStyle }) {
  return <p className={fontStyle}>{MessageBoxContent}</p>;
}
