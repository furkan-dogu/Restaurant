import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [results, setResults] = useState([])
    const [errorMassage, setErrorMassage] = useState("")

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "İstanbul",
                }
            })
            setResults(response.data.businesses)
            setErrorMassage("")
        } catch (error) {
            console.log(error);
            setErrorMassage("Bağlantı Hatası")
        }
    }

    useEffect(() => {
        searchApi("Toast")
    },[])

    return [searchApi, results, errorMassage]
}