import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

export const ModalPortal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(children, document.getElementById("modal")!);
};
