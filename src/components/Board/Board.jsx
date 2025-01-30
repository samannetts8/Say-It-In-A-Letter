import MainMessageBox from "../MainMessageBox/MainMessageBox";

export default function Board({MessageBoxContent}) {
  return (
    <div>
      <div>⬅️</div>
      <MainMessageBox MessageBoxContent={MessageBoxContent}/>
      <div>➡️</div>
    </div>
  );
}
