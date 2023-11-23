export const getClients = async () => {
    const res = await fetch('http://localhost:3000/api/clients', {
        method: 'GET'
    })
    const data = await res.json()
    console.log(data)
    return data
}

export const createClient = async (client) => {
    const res = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify(client)
    })
    const data = await res.json()
    console.log(data)
    return data
}