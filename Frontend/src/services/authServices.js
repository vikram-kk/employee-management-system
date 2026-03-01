
export const handleLogin = async (email, password) => {
    try {
        const res = await fetch("http://localhost:5001/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        const data = await res.json();

        if (!res.ok) {
            alert(data.message)
            return
        }

        localStorage.setItem("token", data.token)
        alert("Login successfull")
        return { res, data }
    } catch (error) {
        console.log(error.message);

    }
}

export const handleSignup = async (email, name, password, role) => {
    try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5001/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ email, name, password, role })
        })

        const data = await res.json();
        console.log(data);

        if (!res.ok) {
            return data.message
        }

        alert("Account created successfully")
        return data

    } catch (error) {
        return res.json({ message: error.message })
    }

}