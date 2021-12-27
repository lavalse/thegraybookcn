---
title: Patches / 草图
sidebar_position: 2
---

[源文档地址](https://thegraybook.vvvv.org/reference/language/patches.html)

草图是我们放置节点的地方。我们有不同类型的草图：
- Document Patch / 文档草图
- Datatype Patch / 类型草图
- Group Patch

## Document Patch / 文档草图

每一个vl的文件都至少有一个文档草图。这个草图提供了在这个文档中内容的总览。
当前正在编辑的文件的文档草图可以通过快捷键`Alt``P`打开。

![](https://thegraybook.vvvv.org/images/language/vl-DocumentPatch.png)

在这个草图里我们基本上可以查看到各种数据类型的定义，还有各个运算器的定义。

这个文档草图同样可以设置基本目录。（在文件彼此引用的时候会很有帮助）

![](https://thegraybook.vvvv.org/images/language/vl-DocumentPatch-BaseCategory.png)

:::note
文档式草图在当前版本的UI里，应该主要是体现在Difinations里面
:::

## Datatype Patch / 类型草图

类型草图是我们最常接触到的。它基本上可以理解为在其他编程语言中的“class”。每一个类型草图都可以定义它相应的类型。

有两种方式可以新建一个类型草图：
- 按下`Ctrl``P`就可以在你光标所在位置新建一个process node（过程节点），并打开它
- 按下`Ctrl``Shift``P`就会在文档的定义中添加一个process difination（过程节点定义），并打开它

以上两种情况下，系统都会自动地把对应的定义放置在当前项目的文档草图中。

一个类型草图包含它的参数，同时也至少包含一个 *Create* 和一个*Update*运算器，当然你可以增加更多的运算器。

默认情况下会新建Process Node（过程节点）类型的草图。

![](https://thegraybook.vvvv.org/images/language/vl-DatatypePatch.png)

类型：Process, Record and Class

- Process (default): 定义一个过程节点
- Record: 定义一个Immutable（不可变）的数据类型
- Class: 定义一个Mutable（可变）的数据类型

Class和Record都可以手动切换成Process。


