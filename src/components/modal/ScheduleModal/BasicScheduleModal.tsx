import { ScheduleModalLayout } from "./Layout";
import { ScheduleModalHeader } from "./Header";
import { ScheduleModalFooter } from "./Footer";
import { ScheduleModalMain } from "./Main";
import { ModalProps } from "../../../context/modalPageComponents";
import { ChangeModalComponent } from "../../ChangeModalComponent";
import { CRUDButtonList } from "../../Button/CRUDButtonList";
import { ScheduleAlertDialog } from "../../AlertDialog/ScheduleDeleteAlertDialog";
import { useInputData } from "../../../hooks/useInputData";

interface ModalDataProps {
  mode: ModalProps;
}

export const BasicScheduleModal = ({ mode }: ModalDataProps) => {
  const {
    inputData,
    handleInputChange,
    handleDataChange,
    handleStarChange,
    handleDropdownChange,
  } = useInputData();
  const footerData = ChangeModalComponent({
    propsType: mode.propsType,
    inputData: inputData,
  });

  mode.footerButtons = CRUDButtonList({
    footerData: footerData,
  });

  return (
    <ScheduleModalLayout
      header={<ScheduleModalHeader text={mode.headerText} />}
      footer={<ScheduleModalFooter children={mode.footerButtons} />}
    >
      <ScheduleModalMain
        disabled={mode.mainDisabled}
        data={mode.data}
        handleInputChange={handleInputChange}
        handleDataChange={handleDataChange}
        handleStarChange={handleStarChange}
        handleDropdownChange={handleDropdownChange}
      />
      {footerData[0] !== undefined && mode.alert && (
        <ScheduleAlertDialog
          Open={mode.alert}
          movePage={footerData[0].backClick!}
        />
      )}
    </ScheduleModalLayout>
  );
};
