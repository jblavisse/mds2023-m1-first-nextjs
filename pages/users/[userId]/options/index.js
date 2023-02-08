import {useRouter} from 'next/router'

export default function userDetail() {
    const router = useRouter();
    const userId = router.query.userId;


    return (
        <div>
            <h1>Toutes les options pour mon utilisateur {userId}</h1>
        </div>
    )
}