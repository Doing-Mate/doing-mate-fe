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

const PATH_NAME = "dataList/category";

export const getCategoryList = async (uid: string) => {
  const categoryQuery = query(collection(fireStore, `${uid}/${PATH_NAME}`));
  const snapshot = await getDocs(categoryQuery);
  const categoryList =
    snapshot.docs.length !== 0
      ? snapshot.docs.map(
          (doc) =>
            Object.assign({ id: doc.id }, doc.data()) as CategoryDataProps
        )
      : await setBasicCategory(uid);
  return categoryList;
};

const setBasicCategory = async (uid: string) => {
  const basicCategory = [
    { id: "cg_00", title: "기본", color: "#e2e2e2" },
    { id: "cg_01", title: "생일", color: "#EA0071" },
    { id: "cg_02", title: "약속", color: "#1976d2" },
  ];
  basicCategory.map((item) => postCategory(uid, item));
  // postCategory(uid, basicCategory);
  return basicCategory;
};

export const getCategory = async (uid: string, categoryId: string) => {
  const docRef = doc(fireStore, `${uid}/${PATH_NAME}/${categoryId}`);
  const res = await getDoc(docRef);
  return Object.assign({ id: res.id }, res.data()) as CategoryDataProps;
};

export const postCategory = async (uid: string, data: CategoryDataProps) => {
  const { id, ...categoryData } = data;
  const docRef = doc(fireStore, `${uid}/${PATH_NAME}`, id);
  await setDoc(docRef, categoryData, { merge: true });
};

export const deleteCategory = async (uid: string, dataId: string) => {
  await deleteDoc(doc(fireStore, `${uid}/${PATH_NAME}`, dataId));
};
