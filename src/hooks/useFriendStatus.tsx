import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { checkFriend, setFriend } from '../services/userService';

const useFriendStatus = (id: string) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [isFriend, setIsFriend] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);

    useEffect(() => {
        const fetchIsFriend = async () => {
            setIsPending(true);
            const result = await checkFriend(user?.id!, id);
            setIsFriend(result);
            setIsPending(false);
        }

        fetchIsFriend();
    }, [user?.id, id]);

    const addFriend = async () => {
        setIsPending(true);
        const success = await setFriend(user?.id!, id, true);
        if (success) {
            setIsFriend(true);
        }
        setIsPending(false);
    }

    const removeFriend = async () => {
        setIsPending(true);
        const success = await setFriend(user?.id!, id, false);
        if (success) {
            setIsFriend(false);
        }
        setIsPending(false);
    }

    return { isPending, isFriend, addFriend, removeFriend };
}

export default useFriendStatus;
