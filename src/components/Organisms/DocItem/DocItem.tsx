import { Doc } from "../../../utils/parsers/parser";
import './DocItem.css';

export type DocItemProps = {
  docInfo?: Doc;
  onClick?: () => void,
  onExit?: () => void,
};

const DocItem: React.FC<DocItemProps> = (props: DocItemProps) => {
  const { docInfo, onClick, onExit } = props;
  return <button className="doc" onClick={onClick} onBlur={onExit}>
    {docInfo?.body}
  </button>
};

export default DocItem;
