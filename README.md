# view-line

Use this library to add alignment lines, spacing blocks, adsorption to the free canvas

## 安装
```
npm install view-line --save
```
## 使用

Move view dom element：

```js
import { moveByDom, resizeByDom, initLine } from 'view-line';
import 'view-line/dist/view-line.css';
moveByDom(view, top, left, function (top, left) {
    console.log(top, left);
});
```

Resize view dom element：

```js
import { moveByDom, resizeByDom, initLine } from 'view-line';
import 'view-line/dist/view-line.css';
resizeByDom(view, top, left, height, width, function (top, left, height, width) {
    console.log(top, left, height, width);
});
```

## API说明

### moveByDom(dom,top,left,onMoveEnd):  Move elements to show alignment lines

- dom: The dom element draged
- top: The top value of the element relative to the container
- left: The left value of the element relative to the container
- onMoveEnd: Callback function for the end of the drag and drop, returning the last top and left

### resizeByDom(dom,top,left,height,width,onResizeEnd): Resize elements to show alignment lines

- dom: The dom element resized
- top: The top value of the element relative to the container
- left: The left value of the element relative to the container
- height: The height of element
- width: The width of element
- onResizeEnd: Callback function for the end of the drag and drop, returning the last top and left


## Example

Run `npm run dev` under `sample` folder

The rendering is as follows:

Alignment line:

![resize](https://github.com/hongyin163/view-line/assets/3040906/08ce4fbb-6e3f-4221-ba1f-3d4c193fb74f)

Spacing adsorption:

![move](https://github.com/hongyin163/view-line/assets/3040906/b50b2b03-c36f-4e35-aed2-2341f72d46c8)
