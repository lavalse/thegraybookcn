---
title: Nodes 节点
sidebar_position: 4
---

在patch中，节点就是主要的创建模块。有不同的节点类型：
- Static Operation node / 静态操作节点
- process node / 过程节点
- record node
- class node

## Operation Nodes / 操作节点

Operation节点蕴含着简单的运算。

把 static operation nodes / 静态操作节点从其他操作节点中区分开来是很有帮助的。他们看起来很简单，他们也不会带有状态等等。他们不会在连续的调用中储存任何数据。

Record nodes / 记录节点 和  class nodes / 类节点 分别是他们所属的记录和类操作的一部分。数据类型的名字将会以比较小的单词显示在节点名字的下方。

## Process Nodes / 过程节点

一个 process node / 过程节点 代表一个 patch / 图档 的实例。之所以叫“Process”是因为它可以被理解为像一台持续运转的小机器，它被创建之后就可以在一帧到下一帧之间存储自己的状态。

同时请查看 Dataset Patch

任何带有小箭头标志的节点意味着在它的背后有一个完整的 patch / 图档。你可以双击节点打开那个图档，也可以右键 > Open 打开。

## Pin group

Spread 类型的针脚可以改为被叫做 Pin Group 的方式，对于这样的节点你可以通过按下`CTRL``+`和`CTRL``-`来增加和减少针脚（就像 Group 和 Cons一样）。如果想要实现这一点，你需要对于input输入修改它的设置。通过 `context-menu > Configure`来打开 Configure Menu ，然后点击将 pin Group 的选项打开。

![](https://thegraybook.vvvv.org/images/language/PinGroup.png)

## Apply pin

如果一个节点它的第一个输入和第一个输出设为相同的数据类型，你可以通过`context-menu > Configure`给这个节点设置一个 Apply 针脚。如果 apply 被设置为 false，那么这个Operation就会被略过，输入数值将会原封不动地被输出出来。