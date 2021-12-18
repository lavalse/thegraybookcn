---
title: Operations
sidebar_position: 3
---

:::note
Operations可以翻译成运算器，操作器等等，但是总觉得不够完美。不如我们就先保留Operation。
:::

Operations定义了一段简单的功能。他们获取input输入，然后实现某些功能，然后返回结果。Operations无法保持状态，这意味着他无法在连续的调用中储存数据。这也同样意味着你无法在他们内部使用任何 Process nodes / 过程节点（比如LFO，Damper等等），因为 Process nodes / 过程节点 只能被运用在有状态的程式中，而operation并不能提供状态。

在vl中有两种类型的Operations：
- Static operations / 静态操作容器
- Member operations / 成员操作容器

While static operations are on their own, operating only on data they are being fed with, the term member refers to the fact that those operations belong to and operate on the data of a datatype.

## Definition vs. Application / 定义和应用

使用“operation”这个单词，有些时候可能会暧昧不清，一方面我们可以指一个“operation definition”，同时也可能是指“application of the operation definition”，也往往也就是一个节点。

## Static operation definitions / 静态操作定义

静态的operation definitions可以通过节点浏览器在文档中直接创建，或者在一个group patch中创建。

![](https://thegraybook.vvvv.org/images/language/vl-Operations-Static-NodeBrowser.png)

在节点浏览器中选择并创建一个operation definition。默认的情况下，static operations 的Is Generic 的参数为true。关闭这个选项会让这个operation definition的输入和输出显示错误，因为输入输出并没有被定义数据类型。

![](https://thegraybook.vvvv.org/images/language/vl-Utils-StaticOperation-GenericToggle.png)

“Is Generic” 开关在operation 被创建的时候就是默认被打开的。这个时候，刚刚创建的operation definition将会出现在你的节点浏览器中，现在可以被作为一个节点（应用）被创造出来。

![](https://thegraybook.vvvv.org/images/language/vl-Operations-Static-MyOperation-NodeBrowser.png)

新生成的operation 节点（应用） 可以在节点浏览器中找到了

## Member operation definitions / 成员操作容器的定义

（未完待续...）