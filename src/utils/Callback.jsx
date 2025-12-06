import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {loginGoogleCode} from "../rest/requests";

const CallbackHandler = () => {
    const history = useNavigate();

    useEffect(() => {
        // Get the authorization code from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code)

        if (code) {
            loginGoogleCode(code)
                .then(response => {

                    localStorage.setItem('access_token', response.data.accessToken);
                    localStorage.setItem('refresh_token', response.data.refreshToken);
                    history('/home');

                })
                .catch(error => {
                    console.error('Error occurred during authentication:', error);
                });
        } else {
            console.error('Authorization code not found.');
        }
    }, [history]);

    return (
        <div>
            <p>Processing...</p>
        </div>
    );
};

export default CallbackHandler;
