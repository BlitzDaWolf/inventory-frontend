import { useState } from "react";
import { useParams } from "react-router-dom";

interface UserDetail{
    username: string
}

interface CheckoutDetail{
    user: UserDetail,
    reason: string,
    time: string,
    returnTime?: string
}

interface CardDetail{
    name: string,
    place: string,
    created: string,
    LastUsed: UserDetail,
    checkouts: CheckoutDetail[]
}

const DetailPage = () => {
    let { id } = useParams();
    const [data, setData] = useState<CardDetail|null>(null);

    /*
    Retrive detailed version of the item

    Expects
    ```json
    {
        name: "item8",
        place: "wharehouse-section2",
        created: "2/10/2023 00:00:00",
        LastUsed: {
            username: "jhon"
        },
        checkouts: [
            {
                user: {
                    username: "jhon"
                },
                reason: "Needed for work",
                time: "2/10/2023 12:00:00",
                returnTime: null
            },
            {
                user: {
                    username: "max"
                },
                reason: "Inspection",
                time: "1/10/2023 15:00:00",
                returnTime: "1/10/2023 20:30:00"
            }
        ]
    }
    ```
    */

    if (data == null) return <div>Loading...</div>
    return (<div>{id}</div>)
}

export default DetailPage;