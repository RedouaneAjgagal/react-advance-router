import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';

function NewsletterSignup() {
    let errorStyle = null
    const fetcher = useFetcher();
    const { data, state } = fetcher;
    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(`${data.message} && ${data.email}`)
        }
    }, [data, state])
    const invalidEmail = data?.errorMsg
    if (invalidEmail) {
        errorStyle = { backgroundColor: '#ff8d8d' }
    }
    return (
        <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
                name='email'
                style={invalidEmail && errorStyle}
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;