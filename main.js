
import { getObserver } from './src/observer.js';

const url = 'https://api.giphy.com/v1/gifs';
const key = '5GyGlHY1Ieme2pHAVglaH1EsNe00U8Pb';
let limit = 12;

const root = document.getElementById('card');
console.log(root);

let offset = 0;

const makeImg = (element) => {
    const img = document.createElement('img');
    img.src = element.images.original.url;
    img.alt = element.title;
    img.className = "mb-3";

    return img;
}

const fetchData = async () => {
    const res = await fetch(`${url}/trending?api_key=${key}&limit=${limit}&offset=${offset}`);
    const { data } = await res.json();
    offset += limit;
    return data;
}

export const principalFunction = async() => {
    const data = await fetchData();

    //obtener ultima imagen
    const lastImg = data.pop();

    const lastImgTemplate = makeImg(lastImg);
    console.log(lastImgTemplate, data.length);
    getObserver(lastImgTemplate);
    //console.log(data)
    const templates = data.map((img) => makeImg(img));
        root.append(...templates)
        root.append(lastImgTemplate);
    /* console.log(templates); */
};

window.addEventListener('load', principalFunction);
