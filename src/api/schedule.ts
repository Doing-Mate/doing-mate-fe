import {
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { fireStore } from "./firebasedb";
import { ScheduleDataProps } from "./../context/dataInterface";

const PATH_NAME = "dataList/schedule";

export const getScheduleList = async (uid: string) => {
  const scheduleQuery = query(collection(fireStore, `${uid}/${PATH_NAME}`));
  const snapshot = await getDocs(scheduleQuery);
  const scheduleList = snapshot.docs.map(
    (doc) => Object.assign({ id: doc.id }, doc.data()) as ScheduleDataProps
  );

  return scheduleList;
};

// export const setScheduleList = async (uid: string) => {
//   const docRef = doc(collection(fireStore, uid, "dataList", "schedule"));
// await setDoc(docRef, []);
// }

export const getSchedule = async (uid: string, scheduleId: string) => {
  const docRef = doc(fireStore, `${uid}/${PATH_NAME}/${scheduleId}`);
  const res = await getDoc(docRef);
  return Object.assign({ id: res.id }, res.data()) as ScheduleDataProps;
};

export const postSchedule = async (uid: string, data: ScheduleDataProps) => {
  const { id, ...scheduleData } = data;
  const docRef = doc(fireStore, `${uid}/${PATH_NAME}`, id);
  await setDoc(docRef, scheduleData, { merge: true });
};

export const deleteSchedule = async (uid: string, dataId: string) => {
  await deleteDoc(doc(fireStore, `${uid}/${PATH_NAME}`, dataId));
};
