import { PanelResizeHandle } from "react-resizable-panels";
import ResizeIcon from './resize.png';
import './ResizeHandle.css';

const ResizeHandle: React.FC = () => {
  return <PanelResizeHandle className="resizeHandle">
    <img className="resizeIcon" src={ResizeIcon} alt="Resize"/>
  </PanelResizeHandle>
};

export default ResizeHandle;