
const ApiCache = async (name, endpoint) => {
    const duration = 1000 * 60 * 60 * 2;

    const get_storage = (name, endpoint) => {
        const storage = localStorage.getItem(name);

        if(storage === null){
            return query_endpoint(name, endpoint);
        }
        const storageObj = JSON.parse(storage);

        if(storageObj.nextCleanup < new Date().getTime()){
            return query_endpoint(name, endpoint);
        }else{
            return storageObj.data;
        }

    }

    const set_storage = async (name, data) => {
        let newStorage = {
            name: name,
            nextCleanup:new Date().getTime()+duration,
            data: data
        }
        return localStorage.setItem(name, JSON.stringify(newStorage));
    }

    const query_endpoint = async (name, endpoint) => {
        const data = await fetch(endpoint);
        const json_data = await data.json();
        await set_storage(name,json_data);
        return json_data;
    }

    return get_storage(name,endpoint);

}

export default ApiCache;