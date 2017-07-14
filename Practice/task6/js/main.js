window.onload = function () {
  // 创建一个div，将body一级下面的全部包住，提供遮罩的效果；
  let shadow = document.createElement('div');
  shadow.setAttribute('class', 'shadow');
  shadowSize();
  // 窗口一旦被调整，重新为shadow赋值
  window.onresize = shadowSize;

  let layer = createLayer(500, 300, '这是一个浮出层', '这是一个浮出层');
  shadow.appendChild(layer);
  
  document.body.appendChild(shadow);

  // 默认不显示浮出层
  shadow.style.display = 'none';

  // 为按钮绑定事件，按下后显示浮出层
  let button = document.getElementById('button');
  button.onclick = function () {
    shadow.style.display = 'block';
  }

  // 创建浮出层的那个div
  function createLayer (width, height, content, header) {
    let layer = document.createElement('div');
    layer.className = 'layer';
    layer.style.width = width+'px';
    layer.style.height = height+'px';

    let headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    headerDiv.innerHTML = header+'';

    let contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.textContent = content+'';

    let controlDiv = document.createElement('div');
    controlDiv.className = 'control';


    let confirm = document.createElement('button');
    confirm.id = 'confirm';
    confirm.innerHTML = '确定';
    let cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.innerHTML = '取消';

    controlDiv.appendChild(confirm);
    controlDiv.appendChild(cancel);

    contentDiv.appendChild(controlDiv);

    layer.appendChild(headerDiv);
    layer.appendChild(contentDiv);

    return layer;
  }

  // 行为函数，根据窗口大小，调整shadow的大小
  function shadowSize () {
    // 取窗口的宽和高
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    // 将shadow的宽高设置好
    shadow.style.width = width+'px';
    shadow.style.height = height+'px';
  }

}