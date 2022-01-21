import axios from 'axios';
import { rootURL } from './App'

export const  Http = axios.create({
    baseURL: rootURL
})