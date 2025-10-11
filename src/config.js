// Simple frontend config for API endpoints.
// Edit these if your backend runs on a different host/port.
const API_BASE = 'http://localhost:4000';

module.exports = {
  REGISTER_URL: API_BASE + '/api/register',
  VERIFY_URL: API_BASE + '/api/verify',
};
