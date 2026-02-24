
export const getTask = () => {
    try {
        const fetchTask = async () => {
            const token = await localStorage.getItem('token');
            const res = await fetch('http://localhost:5001/tasks', {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await data.json()
            if (!res.ok) {
                alert(data.message);
                return [];
            }

            return data;

        }

        fetchTask()
    } catch (error) {
        console.log(error.message);

        return []
    }

}