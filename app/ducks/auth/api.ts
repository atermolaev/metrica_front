import axios from 'axios';
import { IAuthPayload } from '$models';

export const sendAuthData = async (payload: IAuthPayload) => {
    return await axios.post('/api/auth', payload); 
}