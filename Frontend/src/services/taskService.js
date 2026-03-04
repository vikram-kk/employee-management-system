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

export const createTask = async (formdata) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return { success: false }
    }
    const res = await fetch("http://localhost:5001/tasks/create", {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    const data = await res.json();
    if (!res.ok) {
        return data.message
    }
    console.log(data)

    return { data, res }
}

export const updateStatus = async (value) => {
    try {
        const id = value;
        const bodydata = { status: "completed" }
        const token = localStorage.getItem('token')
        const res = await fetch(`http://localhost:5001/tasks/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(bodydata)
        })
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        alert(error.message)
    }
}