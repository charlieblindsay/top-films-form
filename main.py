import requests
from bs4 import BeautifulSoup

URL = "https://www.imdb.com/list/ls053826112/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

results = soup.find(id="wrapper")

film_elements = results.find_all("a")

lst = []

for film_element in film_elements:
    if film_element.parent.name == "h3":
        lst.append(film_element.text)

with open('films.txt', 'w') as file:
    for film in lst:
        file.write(film + '\n')