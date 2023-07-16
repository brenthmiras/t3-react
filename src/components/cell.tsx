import CellButton from '../styled-components/CellButton';

type CellProps = {
  onCellClick: Function;
  value: string;
};

const Cell = ({ onCellClick, value }: CellProps) => {
  return (
    <CellButton disabled={!!value} onClick={() => onCellClick()}>
      {value}
    </CellButton>
  );
};

export default Cell;
