
async function fetchData<T>(url:string, options?:any) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Error on network response'); 
        const data = await response.json();
        return data as T;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default fetchData;