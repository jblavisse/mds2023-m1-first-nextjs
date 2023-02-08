import {useRouter} from 'next/router'

export default function userDetail() {
    const router = useRouter();
    const userId = router.query.userId;


    return (
        <div>
            <h1>Mon utilisateur numéro {userId}</h1>
        </div>
    )
}