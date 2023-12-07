import axios from 'axios';
import headers from '../header';
import {CHAT_API} from '@env'

const accessChats = async (username) => {
  const url = `${CHAT_API}/chats`; 
  const header = await header()
  try {
    const response = await axios.post(
      url,
      {
        username: username,
      },
      {
        headers: headers,
      }
    );

    console.log('Access Chats Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error accessing chats:', error.message);
    throw error;
  }
};

export default accessChats;
