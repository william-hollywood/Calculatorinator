import firebase from "firebase/app";
import "firebase/database";

export function fbaseSet(path: any, val:any): Promise<any>{
    return firebase.database().ref(path).set(val);
}

export function fbaseGet(path:any): Promise<firebase.database.DataSnapshot>{
    return firebase.database().ref(path).get();
}