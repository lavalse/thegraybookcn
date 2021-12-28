---
title: Nodes / 节点
sidebar_position: 4
---

在patch中，节点就是主要的创建模块。有不同的节点类型：
- Static Operation node / 静态运算器节点
- process node / 过程节点
- record node
- class node

## Operation Nodes / 运算器节点

运算器节点蕴含着简单的运算。

把静态运算器节点从其他运算节点中区分开来是很有帮助的。他们看起来很简单，他们也不会带有状态等等。他们不会在连续的调用中储存任何数据。

Record nodes 和  class nodes 分别是他们所属的记录和类运算的一部分。数据类型的名字将会以比较小的单词显示在节点名字的下方。

## Process Nodes / 过程节点

一个 process node （过程节点） 代表一个 patch （草图） 的实例。之所以叫“Process”是因为它可以被理解为像一台持续运转的小机器，它被创建之后就可以在一帧到下一帧之间存储自己的状态。

同时请查看 Datatype Patch

任何带有小箭头标志的节点意味着在它的背后有一个完整的 patch （草图）。你可以双击节点打开那个图档，也可以右键 > Open 打开。

## Pin group

Spread 类型的针脚可以改为被叫做 Pin Group 的方式，对于这样的节点你可以通过按下`CTRL``+`和`CTRL``-`来增加和减少针脚（就像 Group 和 Cons一样）。如果想要实现这一点，你需要对于input输入修改它的设置。通过 `context-menu > Configure`来打开 Configure Menu ，然后点击将 pin Group 的选项打开。

![](https://thegraybook.vvvv.org/images/language/PinGroup.png)

## Apply pin

如果一个节点它的第一个输入和第一个输出设为相同的数据类型，你可以通过`context-menu > Configure`给这个节点设置一个 Apply 针脚。如果 apply 被设置为 false，那么这个Operation就会被略过，输入数值将会原封不动地被输出出来。

---

## 个人笔记

### Record vs Class

Record 和 Class 是更加复杂的运算器节点，它们比静态运算节点更进一步，让你可以参与定义这个节点的生命周期，定义更加复杂的多个操作等等。这也就是为什么当我们完成对一个Record的定义之后，在实例化这个Record的时候，并不是使用一个节点，而是找到了一个目录，里面有一堆节点。通过使用这些节点就可以完成更精细化地操作，对于生命周期等等的操作。

当然Record和Class之间也是有差别的，即两者分别是immutable（不可更改方式）和mutable（可更改方式）的。

- Record
    当使用Record对数据流进行操作的时候，因为它是使用immutable的方式，它都会对数据做一次拷贝再操作。

- Class
    当使用Class对数据流进行操作的时候，因为它是使用mutable的方式的，它会对源数据直接进行操作。

就有点像**黑胶唱片**与**磁带**的区别。当我们想要修改黑胶唱片的数据的数据的时候（比如调整两首歌的顺序），我们没有什么好办法，因为它们是物理的，我们只能重新拷贝一份。但是对于磁带就可以直接抹去重新录制一遍。可以看出每次对数据做修改的时候，以黑胶唱片作为媒介的话，我们得每次都重新拿一张新的空白黑胶来拷贝，而拿磁带作为媒介的话，从头到尾都可以是同一盘磁带。

在日常使用中，因为Class操作的方式会更改数据源，因而对于数据流方式编程的话，就有更多犯错误的可能性（比如不知道在何处更改了数据之类的），所以大多数情况就使用Record就行。当Record无法满足的情况下再考虑Class会比较好。
