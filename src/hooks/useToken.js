import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://fierce-sea-06191.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data in raing', data);
                    const accesstoken = data.token;
                    localStorage.setItem('accesstoken', accesstoken);
                    setToken(accesstoken);
                })

        }

    }

        , [user])
    return [token];
}
export default useToken;
