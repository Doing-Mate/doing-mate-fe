import ReactDOM from "react-dom";

interface PotalProps {
  children: React.ReactNode;
}

export const ModalPortal = ({ children }: PotalProps) => {
  return ReactDOM.createPortal(children, document.getElementById("modal")!);
};
