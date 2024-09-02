import axios from 'axios';
// import Login from './Login';

const API_URL ="http://localhost:5000";
export const register = async (username, email, password) => {
    try {
        await axios.post(`${API_URL}/Register`, { username, email, password });
    } catch (err) {
        console.log('error during registration:', err.response ? err.response.data : err.message);
        throw new Error("Registration failed");
    }
};
export const login = async ( username, password) =>{
    try {
        const response = await axios.post(`${API_URL}/LoginForm `, { username, password });
        const token = response.data.token;
        localStorage.setItem('token', token );
        return token;
    } catch (err) {
        console.error('error during login:', err.response ? err.response.data : err.message);
        throw new Error("Login failed");
    }
};
export const getToken = () =>{
    return localStorage.getItem('token');

};

// export const isLoggedIn = () => {
//     const token = getItem();
//     return token != null;
// };

// export const logout = () => {
//     localStorage.removeItem('token');
// };