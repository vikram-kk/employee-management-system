
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
        return res
    } catch (error) {
        console.log(error.message);

    }
}

export const handleSignup = async (email, name, password, role) => {
    try {
        const res = await fetch("http://localhost:5001/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, name, password, role })
        })

        const data = res.json();
        console.log(data);

        if (!res.ok) {
            return data.message
        }

        localStorage.setItem(data.token)

        alert("Account created successfully")

    } catch (error) {

    }

}