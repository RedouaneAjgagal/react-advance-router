import { redirect } from "react-router-dom";

export const checkExpiration = () => {
    const storedExperationTime = localStorage.getItem('expiration');
    const experationTime = new Date(storedExperationTime);
    const currentTime = new Date();
    const duration = experationTime.getTime() - currentTime.getTime();
    return duration;
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const experationTime = checkExpiration();
    console.log(experationTime);
    if (experationTime < 0) return 'EXPIRED';
    return token;
}

export const tokenLoader = () => {
    return getToken();
}

export const checkAuthLoader = () => {
    const token = getToken();
    if (!token) {
        return redirect('/auth');
    }
    return null;
}

