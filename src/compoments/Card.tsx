import {useNavigate } from "react-router-dom";

function Card ({name, place, image}: {name: string, place: string, image?: string}) {
    const navigate = useNavigate();
    return (
        <div className='card' onClick={() => {navigate(`/detail/${name}`)}}>
            <div className='card-name'><p>{name}</p></div>
            <div className='card-content'>
                {image != null ? <img src={image} />: <></>}
                <p>@{place}</p>
            </div>
        </div>
    );
}

export default Card;