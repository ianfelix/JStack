import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    const request = await fetch(
      `http://localhost:3333/contacts?orderBy=${orderBy}`,
    );

    await delay(3000);

    return request.json();
  }
}

export default new ContactsService();
