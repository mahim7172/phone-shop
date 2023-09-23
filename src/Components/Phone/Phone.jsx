import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Addphone from "./Addphone";


const Phone = () => {
    const [phone, setPhone] = useState({})
    const { id } = useParams()
    const phones = useLoaderData()
    useEffect(() => {
        const findPhone = phones.find(pone => pone?.id === id)
        setPhone(findPhone)

    }, [id, phones])
    
    return (
        <div>
            <Addphone phone={phone}></Addphone>
        </div>
    );
};

export default Phone;