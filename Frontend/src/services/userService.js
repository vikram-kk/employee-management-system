export const setProfilePic = async (formdata) => {
    console.log('req started')
    console.log(formdata)
    try {
        const token = localStorage.getItem('token')
        if (!token) {
            console.log("user not logged in or invalid token")
            return
        }
        const res = await fetch("http://localhost:5001/staff/profile/upload", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formdata
        });

        const data = await res.json()
        if (res.ok) {
            alert(" done")
            return data
        } else return

    } catch (error) {

    }
}