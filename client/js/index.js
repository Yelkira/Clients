import {createClientsHeader} from "./createHeader.js";
import {createClientsSection} from "./createClientsSection.js";
import {getClients} from "./clientsApi.js";
import {createClientItem} from "./createClientItem.js";
import {sortTable} from "./sortClientsTable.js";

const createApp = async () => {
    const header = createClientsHeader();
    const clientSection = createClientsSection();
    document.body.append(header, clientSection.main);
    const preloader = document.querySelector('.preloader');
    try {
        const clients = await getClients()
        for (const client of clients) {
            document.querySelector('.clients__tbody').append(createClientItem(client))
        }
    } catch (e) {
        console.log(e)
    } finally {
        setTimeout(() => {
            preloader.remove();
        }, 1500)
    }
}

createApp();
document.addEventListener('DOMContentLoaded', sortTable)
