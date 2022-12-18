import axios from "axios";

const API_URL = "/api/reminders/";

// Create new reminder
const createReminder = async (reminderData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, reminderData, config);

  return response.data;
};

// Get user reminders
const getReminders = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user reminder
const deleteReminder = async (reminderId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + reminderId, config);

  return response.data;
};

const reminderService = {
  createReminder,
  getReminders,
  deleteReminder,
};

export default reminderService;
