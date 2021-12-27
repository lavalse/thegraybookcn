---
title: Operations / 运算器
sidebar_position: 3
---

:::note
Operations可以翻译成运算器，操作器等等，但是总觉得不够完美。这里先采用运算器。
:::

运算器定义了一段简单的功能。他们获取input输入，然后实现某些功能，然后返回结果。运算器无法保持状态，这意味着他无法在连续的调用中储存数据。这也同样意味着你无法在他们内部使用任何 Process nodes （过程节点比如LFO，Damper等等），因为 Process nodes（过程节点）只能被运用在有状态的程式中，而运算器并不能提供状态。

在vl中有两种类型的运算器：
- Static operations / 静态运算器
- Member operations / 成员运算器

跟静态运算器只能作用于输入给它的数据一样，成员运算器像家族成员一样一起工作，且只作用于它属于的类型节点内部的数据类型。

## Definition vs. Application / 定义和应用

使用“operation（运算器）”这个单词，有些时候可能会暧昧不清，一方面我们可以指对于一个运算器的定义，同时也可能是指一个运算器的实例化，也往往也就是一个节点。

## Static operation definitions / 对静态运算器的定义

对静态运算器的定义可以通过节点浏览器在文档中直接创建，或者在一个group patch中创建。

![](https://thegraybook.vvvv.org/images/language/vl-Operations-Static-NodeBrowser.png)

在节点浏览器中选择并创建一个对静态运算器的定义。默认的情况下，该运算器的的Is Generic 的参数为true。关闭这个选项会让这个运算器的输入和输出显示错误，因为输入输出并没有被定义数据类型。

![](https://thegraybook.vvvv.org/images/language/vl-Utils-StaticOperation-GenericToggle.png)

“Is Generic” 开关在定义被创建的时候就是默认被打开的。这个时候，刚刚创建的运算器将会出现在你的节点浏览器中，现在可以被作为一个节点（应用）被创造出来。

![](https://thegraybook.vvvv.org/images/language/vl-Operations-Static-MyOperation-NodeBrowser.png)

新生成的运算器节点（应用） 可以在节点浏览器中找到了

## Member operation definitions / 对成员运算器的定义

任何在datatype patch（类型草图）中定义的运算器就是成员运算器。

成员运算器在定义的时候并没有被一个方形区域包围（像静态运算器那样）。因为成员运算器彼此之间通过Pads连接传送数据，而且如果它们也被方形包围的话，可能导致一个草图被层层叠叠的方形区域包围，实在不是什么好的结果。因而，在成员运算器是在各种的类型草图中用颜色来区分的。
