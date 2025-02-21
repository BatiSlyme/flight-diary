
import axios from 'axios'
import { IDiary, NewDiary } from '../types';

export const getAllDiaries = async () => {
    return axios.get<IDiary[]>('http://localhost:3000/api/diaries').then(res => res.data);
}

export const createDiary = async (diary: NewDiary) => {
    try {
        const response = await axios.post<IDiary>('http://localhost:3000/api/diaries', diary);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}

