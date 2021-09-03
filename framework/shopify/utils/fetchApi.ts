type FetchParams = {
    query : string
}

const fetchApi= async ({query}: FetchParams) => {
    const url = 'http://localhost:4000/graphql';
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           query 
        })
    });
    const data = await response.json();
    return { data };

}
export default fetchApi;
