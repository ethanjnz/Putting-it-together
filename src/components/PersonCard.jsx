import { useState } from "react";

const PersonCard = (props) => {
    const { firstname, lastname, hair, count } = props;

    const [addage, setAddAge] = useState({
        ageCount: count
    });

    const buttonHandler = () => {
        setAddAge({
            ageCount: addage.ageCount + 1
        })
    }

    return (
        <>
            <h2>{lastname}, {firstname} </h2>
            <p>Age: {addage.ageCount}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={buttonHandler}>Birthday button for {firstname} {lastname}</button>
        </>
    )
}

export default PersonCard;