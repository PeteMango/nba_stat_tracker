from urllib.request import urlopen
import json

def profile(name):
    name = name.lower()
    name = name.replace(' ', '_')
    link = f"https://www.balldontlie.io/api/v1/players?search={name}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData['data']

print(profile("stephen_curry"))