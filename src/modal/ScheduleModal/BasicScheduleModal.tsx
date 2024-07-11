import { ScheduleModalLayout } from "./Layout";
import { ScheduleModalHeader } from "./Header";
import { ScheduleModalFooter } from "./Footer";
import { ScheduleModalMain } from "./Main";
import { ModalProps } from "../../context/modalPageComponents";
import { ChangeModalComponent } from "../../components/ChangeModalComponent";
import { CRUDButton } from "../../components/Button/CRUDButton";
import { ScheduleAlertDialog } from "../../components/AlertDialog/ScheduleDeleteAlertDialog";
import theme from "../../styles/theme";

interface ModalDataProps {
  mode: ModalProps;
}

export const BasicScheduleModal = ({ mode }: ModalDataProps) => {
  const footerData = ChangeModalComponent({ propsType: mode.propsType });

  mode.footerButtons =
    footerData[0] === undefined
      ? []
      : footerData[1] === undefined
      ? [
          <CRUDButton
            key="footerBtn_01"
            text={footerData[0].text}
            colorType={theme.colors.secondary}
            hoverColorType={"#e498ac"}
            onClick={footerData[0].onClick}
          />,
        ]
      : [
          <CRUDButton
            key="footerBtn_01"
            text={footerData[0].text}
            colorType={theme.colors.secondary}
            hoverColorType={"#e498ac"}
            onClick={footerData[0].onClick}
          />,
          <CRUDButton
            key="footerBtn_02"
            text={footerData[1].text}
            colorType={theme.colors.primary}
            hoverColorType={"#92b5ec"}
            onClick={footerData[1].onClick}
          />,
        ];
  return (
    <ScheduleModalLayout
      header={<ScheduleModalHeader text={mode.headerText} />}
      footer={<ScheduleModalFooter children={mode.footerButtons} />}
    >
      <ScheduleModalMain disabled={mode.mainDisabled} data={mode.data} />
      {footerData[0] !== undefined && mode.alert && (
        <ScheduleAlertDialog
          Open={mode.alert}
          movePage={footerData[0].backClick!}
        />
      )}
    </ScheduleModalLayout>
  );
};
