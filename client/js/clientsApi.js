export const getClients = async () => {
    try {
        const res = await fetch('https://clients-server.vercel.app/api/clients', {
            method: 'GET'
        })
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}

export const sendCLientData = async (client, method, id = null) => {
    try {
        const res = await fetch(`https://clients-server.vercel.app/api/clients${method === 'POST' ? '' : '/' + id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method,
            body: JSON.stringify(client)
        })
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}

export const deleteClientItem = async (id) => {
    try {
        await fetch(`https://clients-server.vercel.app/api/clients/${id}`, {
            method: 'DELETE',
        })
    } catch (e) {
        console.log(e)
    }
}

export const findClient = async (value) => {
    try {
        const res = await fetch(`https://clients-server.vercel.app/api/clients?search=${value}`, {
            method: 'GET'
        })
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}