import Title from "../Title/Title";
import Board from "../Board/Board";

export default function OutputArea({ MessageBoxContent, fontStyle }) {
  return (
    <div>
      <Title />
      <Board MessageBoxContent={MessageBoxContent} fontStyle={fontStyle} />
    </div>
  );
}
