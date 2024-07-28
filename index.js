import fetch from "node-fetch";

class HTTPMethods {
  async get(url) {
    try {
      const res = await fetch(url);
      const body = await res.json();
      return body;
    } catch (err) {
      return err;
    }
  }

  async post(url, headers, body) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      const resBody = await res.json();
      return resBody;
    } catch (err) {
      return err;
    }
  }
}
export default new HTTPMethods();