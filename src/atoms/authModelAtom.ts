import { type } from "os";
import {atom} from "recoil";
type AuthmodelState={
    isOpen:boolean;
    type:'login' |'register'| 'forgotPassword';

};
const initalAuthModelState:AuthmodelState={
    isOpen:false,
    type:'login',
};
export const authModelState=atom<AuthmodelState>({
    key:'authModelState',
    default:initalAuthModelState,
});