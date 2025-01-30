import Title from "../Title/Title";
import Board from "../Board/Board";

export default function OutputArea({ MessageBoxContent }) {
  return (
    <div>
      <Title />
      <Board MessageBoxContent={MessageBoxContent} />
    </div>
  );
}
