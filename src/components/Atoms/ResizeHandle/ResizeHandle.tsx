import { PanelResizeHandle } from "react-resizable-panels";
import ResizeIcon from './resize.png';
import './ResizeHandle.css';

export type ResizeHandleProps = {
  onResize: (isDragging: boolean) => void;
}

const ResizeHandle: React.FC<ResizeHandleProps> = (props: ResizeHandleProps) => {
  return <PanelResizeHandle onDragging={props.onResize} className="resizeHandle">
    <img className="resizeIcon" src={ResizeIcon} alt="Resize"/>
  </PanelResizeHandle>
};

export default ResizeHandle;