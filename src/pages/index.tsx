import React, { useEffect } from 'react';
import { BILL_LOCAL_NAME } from '@/constants';
import { history } from 'alita';

const Page = () => {
    useEffect(() => {
        const token = localStorage.getItem(BILL_LOCAL_NAME);
        if (!token) {
            history.push('/login')
        }

    }, [])
    return <div>Hello Bill</div>
}
export default Page;