import CellButton from '../styled-components/CellButton';

type CellProps = {
  onCellClick: Function;
};

const Cell = ({ onCellClick }: CellProps) => {
  return <CellButton onClick={(e) => onCellClick(e)}></CellButton>;
};

export default Cell;
