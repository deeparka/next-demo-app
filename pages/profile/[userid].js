import { useRouter } from "next/router";

const UserId = () => {
    const router = useRouter();
    const { userid } = router.query;
    return <div>Hey {userid}</div>;
};

export default UserId;
