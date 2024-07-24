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
import { CategoryDataProps } from "../context/dataInterface";

const PATH_NAME = "category";

export const getCategoryList = async () => {
  const categoryQuery = query(collection(fireStore, PATH_NAME));
  const snapshot = await getDocs(categoryQuery);
  const categoryList = snapshot.docs.map(
    (doc) => Object.assign({ id: doc.id }, doc.data()) as CategoryDataProps
  );
  return categoryList;
};

export const getCategory = async (id: string) => {
  const docRef = doc(fireStore, `${PATH_NAME}/${id}`);
  const res = await getDoc(docRef);
  return Object.assign({ id: res.id }, res.data()) as CategoryDataProps;
};

export const postCategory = async (data: CategoryDataProps) => {
  const { id, ...categoryData } = data;
  const docRef = doc(fireStore, PATH_NAME, id);
  await setDoc(docRef, categoryData, { merge: true });
};

export const deleteCategory = async (dataId: string) => {
  await deleteDoc(doc(fireStore, PATH_NAME, dataId));
};
