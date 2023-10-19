import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = async ({ endpoint }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'e100f61ab3msha0d6cbe39142c43p14d747jsn06a20b838926',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    try {
        setIsLoading(true);
        const response = await axios.request(options);
        setData(response.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
    }
}