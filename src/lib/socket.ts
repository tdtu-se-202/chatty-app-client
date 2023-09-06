import { io } from 'socket.io-client';
import { SOCKET_BASE_URL } from '../utils/constants';
//import Cookies from 'js-cookie';

//const token = Cookies.get('access_token') || localStorage.getItem('access_token');

export default io(SOCKET_BASE_URL!, {
  autoConnect: true,
  transports: ["websocket", "polling"],
  // auth: {
  //   authorization: `Bearer ${token}`,
  //   //authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNkMjljOTczLTQ2NTMtNGE0MC04OWUzLTQ5MTFmYTJlMjI0NiIsInVzZXJuYW1lIjoidXNlcjIiLCJpbWFnZSI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R0enM0YzJ1di9pbWFnZS91cGxvYWQvdjE2NjYzMjY3NzQvbm9hdmF0YXJfcnhicmJrLnBuZyIsImlhdCI6MTY5MTkzOTcxNCwiZXhwIjoxNjkyMTk4OTE0fQ.L9mOe7JEUbVmleAEQPTpuHgM5MjWy0CGtO_9O0tHIV8"
  // }
});
