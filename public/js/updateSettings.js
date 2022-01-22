import axios from 'axios';
import { showAlert } from './alert';

export const updateUserSettings = async (data, type) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `http://localhost:3000/api/v1/users/${
        type === 'password' ? 'updateMyPassword' : 'updateMe'
      }`,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Updated successfully');
      window.setTimeout(() => {
        location.reload(true);
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
