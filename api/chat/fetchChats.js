import axios from 'axios';
import {CHAT_API} from '@env'
import header from '../header';

const fetchChats = async () => {
  const url = `${CHAT_API}/chats`;
  const headers = await header();

  try {
    const response = await axios.get(url, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching chats:', error.message);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    }
    throw error;
  }
};

export default fetchChats;