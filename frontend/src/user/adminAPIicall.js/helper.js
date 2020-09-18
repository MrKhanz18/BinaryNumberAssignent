import {API} from '../../backend'

// getting all users

export const getAllUsers = () => {
    return fetch(`${API}/admin/dashboard/`,{
        method:"GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));
}

export const getInfo = userId => {
    return fetch(`${API}/${userId}/user/dashboard`,{
        method:"GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err))
}

