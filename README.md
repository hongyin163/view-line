# view-line

为自由画布加入对齐线、间距块、吸附等功能

## 安装
```
npm install view-line --save
```
## 使用

移动view元素：
```js
import { moveByDom, resizeByDom, initLine } from 'view-line';
import 'view-line/dist/view-line.css';
moveByDom(view, top, left, function (top, left) {
    console.log(top, left);
});
```

修改view元素大小：
```js
import { moveByDom, resizeByDom, initLine } from 'view-line';
import 'view-line/dist/view-line.css';
resizeByDom(view, top, left, height, width, function (top, left, height, width) {
    console.log(top, left, height, width);
});
```

## API说明

### moveByDom: 移动元素，显示对齐线
- dom: 拖拽的DOM元素
- top:元素相对容器top
- left:元素相对容器left
- onMoveEnd:拖拽结束的回调函数，返回最后的top和left

### resizeByDom: 改版元素大小，显示对齐线
- dom: 改变大小的DOM元素
- top:元素相对容器top
- left:元素相对容器left
- height:元素的高度
- width:元素的宽度
- onResizeEnd:拖拽结束的回调函数，返回最后的top和left


## 示例

运行 `npm run dev` 可以启动 `sample` 文件夹的示例

效果图如下：

对齐线：

![移动](https://pic2.zhimg.com/v2-f81a12164a75b98d501811613841065d_b.webp)

间距吸附：

![移动](https://pic4.zhimg.com/v2-e6eefcd486ab43d7002757d8a94a030b_b.webp)
