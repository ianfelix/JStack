import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl;
  }

  async get(path) {
    const request = await fetch(`${this.baseURL}${path}`);

    await delay(3000);

    return request.json();
  }
}

export default HttpClient;
