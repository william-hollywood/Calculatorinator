import firebase from "firebase/app";
import "firebase/database";

// Model functions
/**
 * set data in firebase
 * @param path path to set
 * @param val val to set path to
 * @returns Promise of output of set command on firebase
 */
export function fbaseSet(path: any, val:any): Promise<any>{
    return firebase.database().ref(path).set(val);
}

/**
 * get data from firebase
 * @param path path to get from
 * @returns promise of data from firebase
 */
export function fbaseGet(path:any): Promise<firebase.database.DataSnapshot>{
    return firebase.database().ref(path).get();
}