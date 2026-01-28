#  BST, AVL Tree & Red-Black Tree – Explained

This repository contains **clear, exam-ready explanations** of Binary Search Trees, AVL Trees, and Red-Black Trees. The content is structured **exactly according to common Data Structures theory questions** and written in a **README-friendly format** for GitHub.

---

## Question 1: Time Complexity of Major BST Operations & Need for Balanced BST

### BST Operations

A Binary Search Tree stores data such that:

* Left subtree < Root < Right subtree

| Operation | Time Complexity | Explanation                |
| --------- | --------------- | -------------------------- |
| Search    | O(h)            | Traverse from root to leaf |
| Insert    | O(h)            | Find correct position      |
| Delete    | O(h)            | Search + rearrangement     |

Where **h = height of the tree**.

### Problem with Unbalanced BST

If data is inserted in sorted order, BST becomes skewed:

10
  \
   20
     \
      30
        \
         40


Height = n → All operations become **O(n)** (inefficient).

### Need for Balanced BST

* Maintains height ≈ log₂n
* Prevents skewed structure
* Guarantees O(log n) performance

Examples: **AVL Tree, Red-Black Tree**

---

## Question 2: How AVL Tree Detects Imbalance

AVL Tree is a **self-balancing BST** that maintains balance using the **Balance Factor (BF)**.


BF = Height(left subtree) − Height(right subtree)


* BF = −1, 0, +1 → Balanced
* BF < −1 or BF > +1 → Imbalanced

### Example
-
    30
   /
  20
 /
10

BF = +2 → Imbalance detected → rotation required

---

##  Question 3: Four Imbalance Cases in AVL Tree & Fixes

AVL imbalance occurs when |BF| > 1.

### 1. LL (Left-Left) Case

Insertion in left subtree of left child.

-

    30         20
   /    →     /  \
  20         10  30
 /
10


Fix: **Right Rotation**



### 2. RR (Right-Right) Case

Insertion in right subtree of right child.


10              20
  \    →       /  \
   20          10  30
     \
      30


Fix: **Left Rotation**

### 3. LR (Left-Right) Case

Insertion in right subtree of left child.

-
    30           20
   /    →       /  \
 10            10  30
   \
    20
`

Fix: **Left Rotation + Right Rotation**

---

### 4. RL (Right-Left) Case

Insertion in left subtree of right child.


10               20
  \     →       /  \
   30            10  30
  /
20


Fix: **Right Rotation + Left Rotation**

---

## Question 4: AVL Tree vs Red-Black Tree

| Feature       | AVL Tree | Red-Black Tree  |
| ------------- | -------- | --------------- |
| Balance       | Strict   | Relaxed         |
| Height        | Smaller  | Slightly larger |
| Search        | Faster   | Slightly slower |
| Insert/Delete | Slower   | Faster          |

### When to Use

* **AVL Tree** → Search-heavy applications
* **Red-Black Tree** → Frequent insert/delete operations

---

##  Question 5: Why Java Uses Red-Black Tree in TreeMap

Java implements `TreeMap` and `TreeSet` using **Red-Black Trees** because:

* Faster insertion and deletion
* Fewer rotations than AVL trees
* Better performance for dynamic data
* Guaranteed O(log n) complexity

AVL trees require strict rebalancing after every update, which increases overhead.
