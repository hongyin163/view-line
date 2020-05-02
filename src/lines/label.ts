/**
 * size标签
 */



/**
 * 隐藏label
 * @param {*} id 
 */
export const hideLabel = () => {
    let id = 'view__resize-label';
    let dom = document.getElementById(id);
    if (!dom) {
        return;
    }
    if (dom.parentNode) {
        dom.parentNode.removeChild(dom);
    }
}

export function showLabel(view: HTMLElement, content) {
    let id = 'view__resize-label';
    let rect = view.getBoundingClientRect();
    let dom = document.getElementById(id);
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        div.className = id;
        document.body.appendChild(div);
        dom = div;
    }
    dom.style.display = 'block';
    dom.style.top = `${rect.bottom + 5}px`;
    dom.style.left = `${rect.left + rect.width / 2}px`;
    dom.innerHTML = content;
}
