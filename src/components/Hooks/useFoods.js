import { useEffect, useState } from "react";

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return foods;
}

export default useFoods;