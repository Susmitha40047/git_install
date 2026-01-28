class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
    this.x = 0;
    this.y = 0;
  }
}

let root = null;
const container = document.getElementById("tree-container");

function height(node) {
  return node ? node.height : 0;
}

function getBalance(node) {
  return node ? height(node.left) - height(node.right) : 0;
}

function rightRotate(y) {
  const x = y.left;
  const T2 = x.right;

  x.right = y;
  y.left = T2;

  y.height = Math.max(height(y.left), height(y.right)) + 1;
  x.height = Math.max(height(x.left), height(x.right)) + 1;

  return x;
}

function leftRotate(x) {
  const y = x.right;
  const T2 = y.left;

  y.left = x;
  x.right = T2;

  x.height = Math.max(height(x.left), height(x.right)) + 1;
  y.height = Math.max(height(y.left), height(y.right)) + 1;

  return y;
}

function insert(node, value) {
  if (!node) return new Node(value);

  if (value < node.value)
    node.left = insert(node.left, value);
  else if (value > node.value)
    node.right = insert(node.right, value);
  else
    return node;

  node.height = 1 + Math.max(height(node.left), height(node.right));
  const balance = getBalance(node);

  // LL
  if (balance > 1 && value < node.left.value)
    return rightRotate(node);

  // RR
  if (balance < -1 && value > node.right.value)
    return leftRotate(node);

  // LR
  if (balance > 1 && value > node.left.value) {
    node.left = leftRotate(node.left);
    return rightRotate(node);
  }

  // RL
  if (balance < -1 && value < node.right.value) {
    node.right = rightRotate(node.right);
    return leftRotate(node);
  }

  return node;
}

function insertValue() {
  const value = parseInt(document.getElementById("valueInput").value);
  if (!isNaN(value)) {
    root = insert(root, value);
    container.innerHTML = "";
    drawTree(root, container.offsetWidth / 2, 40, 150);
  }
}

function drawTree(node, x, y, gap) {
  if (!node) return;

  node.x = x;
  node.y = y;

  const div = document.createElement("div");
  div.className = "node";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.innerText = node.value;

  const bf = document.createElement("div");
  bf.className = "bf";
  bf.innerText = "BF: " + getBalance(node);
  div.appendChild(bf);

  container.appendChild(div);

  if (node.left) {
    drawLine(x + 20, y + 40, x - gap + 20, y + 100);
    drawTree(node.left, x - gap, y + 100, gap / 1.5);
  }

  if (node.right) {
    drawLine(x + 20, y + 40, x + gap + 20, y + 100);
    drawTree(node.right, x + gap, y + 100, gap / 1.5);
  }
}

function drawLine(x1, y1, x2, y2) {
  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

  const line = document.createElement("div");
  line.className = "line";
  line.style.width = length + "px";
  line.style.height = "2px";
  line.style.left = x1 + "px";
  line.style.top = y1 + "px";
  line.style.transform = `rotate(${angle}deg)`;

  container.appendChild(line);
}
