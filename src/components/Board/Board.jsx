import MainMessageBox from "../MainMessageBox/MainMessageBox";

export default function Board({ MessageBoxContent, fontStyle }) {
  return (
    <div>
      <div>⬅️</div>
      <MainMessageBox
        MessageBoxContent={MessageBoxContent}
        fontStyle={fontStyle}
      />
      <div>➡️</div>
    </div>
  );
}
