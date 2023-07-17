import CellButton from '../styled-components/CellButton';

type CellProps = {
  onCellClick: Function;
  value: string;
};

const Cell = ({ onCellClick, value }: CellProps) => {
  return (
    <CellButton
      className="btn btn-secondary"
      disabled={!!value}
      onClick={() => onCellClick()}
    >
      <h1>{value}</h1>
    </CellButton>
  );
};

export default Cell;
