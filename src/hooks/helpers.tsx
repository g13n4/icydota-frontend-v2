import axios from 'axios';
import type { TableDataResponseType } from './types';

const fetchMatchData = async (url: string): Promise<TableDataResponseType> => {
    const response = await axios.get(url);
    return response.data;
  };

export {fetchMatchData}