import {useRouter} from 'next/router'

export default function CommentDetail() {
    const router = useRouter();
    const commentId = router.query.commentId;
    const postId = router.query.postId;

    return (
        <div>
            <h1>Le commentaire numéro {commentId} du post {postId}</h1>
        </div>
    )
}