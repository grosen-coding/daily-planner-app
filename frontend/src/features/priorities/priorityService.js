import axios from "axios";

const API_URL = "/api/priorities/";

// Create new priority
const createPriority = async (priorityData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, priorityData, config);

  return response.data;
};

// Get user priorities
const getPriorities = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user priority
const deletePriority = async (priorityId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + priorityId, config);

  return response.data;
};

const priorityService = {
  createPriority,
  getPriorities,
  deletePriority,
};

export default priorityService;
