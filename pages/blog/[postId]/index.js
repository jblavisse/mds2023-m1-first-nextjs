import {useRouter} from 'next/router'

export default function PostDetail() {
    const router = useRouter();
    const postId = router.query.postId;

    return (
        <div>
            <h1>Mon article {postId}</h1>
        </div>
    )
}