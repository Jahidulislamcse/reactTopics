import {useContext} from 'react';
import { UsersContext } from '../CONTEXT/UsersContext';

export const useUserContext = ()=> {
    return useContext(UsersContext)
}