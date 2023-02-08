import {useRouter} from 'next/router'

export default function userDetail() {
    const router = useRouter();
    const userId = router.query.userId;
    const optionId = router.query.optionId;

    return (
        <div>
            <h1>Mon utilisateur numéro {userId} avec l'option {optionId}</h1>
        </div>
    )
}