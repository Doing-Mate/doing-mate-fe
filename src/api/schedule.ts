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

const PATH_NAME = "schedule";

export const getScheduleList = async () => {
  const scheduleQuery = query(collection(fireStore, PATH_NAME));
  const snapshot = await getDocs(scheduleQuery);
  const scheduleList = snapshot.docs.map(
    (doc) => Object.assign({ id: doc.id }, doc.data()) as ScheduleDataProps
  );

  return scheduleList;
};

export const getSchedule = async (id: string) => {
  const docRef = doc(fireStore, `${PATH_NAME}/${id}`);
  const res = await getDoc(docRef);
  return Object.assign({ id: res.id }, res.data()) as ScheduleDataProps;
};

export const postSchedule = async (data: ScheduleDataProps) => {
  const { id, ...scheduleData } = data;
  const docRef = doc(fireStore, PATH_NAME, id);
  await setDoc(docRef, scheduleData, { merge: true });
};

export const deleteSchedule = async (dataId: string) => {
  await deleteDoc(doc(fireStore, PATH_NAME, dataId));
};
