export const getTask = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5001/tasks', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return [];
        }

        return data;

    } catch (error) {
        console.log(error.message);
        return [];
    }
};