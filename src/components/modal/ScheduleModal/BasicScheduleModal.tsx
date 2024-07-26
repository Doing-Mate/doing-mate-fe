import { ScheduleModalLayout } from "./Layout";
import { ScheduleModalHeader } from "./Header";
import { ScheduleModalFooter } from "./Footer";
import { ScheduleModalMain } from "./Main";
import { ModalProps } from "../../../context/modalPageComponents";
import { ChangeModalComponent } from "../../ChangeModalComponent";
import { CRUDButtonList } from "../../Button/CRUDButtonList";
import { ScheduleAlertDialog } from "../../AlertDialog/ScheduleDeleteAlertDialog";
import { useInputScheduleData } from "../../../hooks/useInputScheduleData";
import { useEffect, useState } from "react";
import { useScheduleDataContext } from "../../../hooks/useScheduleDataContext";
import { useCategoryDataContext } from "../../../hooks/useCategoryDataContext";
import { ScheduleDataProps } from "../../../context/dataInterface";

interface ModalDataProps {
  mode: ModalProps;
}

export const BasicScheduleModal = ({ mode }: ModalDataProps) => {
  const {
    inputData,
    setInputData,
    handleInputChange,
    handleDataChange,
    handleStarChange,
    handleDropdownChange,
  } = useInputScheduleData();
  const { scheduleList } = useScheduleDataContext();
  const { categoryList } = useCategoryDataContext();
  const [modeData, setModeData] = useState<ScheduleDataProps | undefined>(
    mode.data as ScheduleDataProps
  );

  const categoryDataList = {};
  categoryList.map((item) => {
    Object.assign(categoryDataList, { [item.id]: item.title });
  });

  useEffect(() => {
    const data = mode.data as ScheduleDataProps;
    const newData = scheduleList.find(
      (scheduleItem) => scheduleItem.id === data?.id
    );
    newData !== undefined && setInputData(newData);
    setModeData(newData);
  }, [mode]);

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
        data={modeData}
        categoryData={categoryDataList}
        handleInputChange={handleInputChange}
        handleDataChange={handleDataChange}
        handleStarChange={handleStarChange}
        handleDropdownChange={handleDropdownChange}
      />
      {footerData[0] !== undefined && mode.alert && (
        <ScheduleAlertDialog
          Open={mode.alert}
          okClick={footerData[0].OKClick!}
          backClick={footerData[0].backClick!}
        />
      )}
    </ScheduleModalLayout>
  );
};
