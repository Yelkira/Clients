export const getClients = async () => {
    const res = await fetch('http://localhost:3000/api/clients', {
        method: 'GET'
    })
    return await res.json()
}

export const createClient = async (client) => {
    const res = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(client)
    })
    return await res.json()
}

export const deleteClientItem = async (id) => {
    const res = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
    })
}