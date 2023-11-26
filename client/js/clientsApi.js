export const getClients = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/clients', {
            method: 'GET'
        })
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}

export const sendCLientData = async (client, method, id = null) => {
    try {
        const res = await fetch(`http://localhost:3000/api/clients/${method === 'POST' ? '' : id}`, {
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
        const res = await fetch(`http://localhost:3000/api/clients/${id}`, {
            method: 'DELETE',
        })
    } catch (e) {
        console.log(e)
    }
}

export const findClient = async (value) => {
    try {
        const res = await fetch(`http://localhost:3000/api/clients?search=${value}`,{
            method: 'GET'
        })
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}