import { doc, getDoc, getDocs, query, collection, setDoc } from "firebase/firestore";

import { fireStore } from "./firebasedb";

const PATH_NAME = "category";

export const getCategoryList = async () => {
  const categoryQuery = query(collection(fireStore, PATH_NAME));
  const snapshot = await getDocs(categoryQuery);
  const categoryList = snapshot.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()));
  return categoryList;
};

export const getCategory = async (id: string) => {
  const docRef = doc(fireStore, `${PATH_NAME}/${id}`);
  const res = await getDoc(docRef);
  return Object.assign({ id: res.id }, res.data());
};

interface CategoryData {
  id: string;
  title: string;
  color: string;
}

export const postCategory = async (data: CategoryData) => {
  const { id, ...categoryData } = data;
  const docRef = doc(fireStore, PATH_NAME, id);
  setDoc(docRef, categoryData, { merge: true });
};
