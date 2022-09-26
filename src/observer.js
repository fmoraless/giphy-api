import { principalFunction } from "../main.js";

const inViewPort = ([e]) => {
    const { isIntersecting, target } = e;
    console.log(isIntersecting);
    if (isIntersecting) {
        principalFunction();
        console.log('ultima imagen en pantalla');
        observer.unobserve(target);
    }
};

const observer = new IntersectionObserver(inViewPort);
export const getObserver = (node) => {
    observer.observe(node);
};
