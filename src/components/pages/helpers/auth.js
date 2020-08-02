import { auth, db } from "../../../services/firebase";

export function signup(email, password, dob, address) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
  return auth().signOut();
}

export function addUser(data) {
  return db.collection("users").add(data);
}

export function findUser(userID) {
  return db.collection("users").where("user_id", "==", userID).get();
}
