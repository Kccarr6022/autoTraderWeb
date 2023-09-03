import requests


class HttpClient:
    def __init__(self):
        self.session = requests.Session()

    def get(self, url: str, params: dict) -> requests.Response:
        return self.session.get(url, params=params)

    def post(self, url: str, data: dict) -> requests.Response:
        return self.session.post(url, data=data)

    def put(self, url: str, data: dict) -> requests.Response:
        return self.session.put(url, data=data)

    def delete(self, url: str, data: dict) -> requests.Response:
        return self.session.delete(url, data=data)

    def close(self):
        self.session.close()
