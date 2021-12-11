---
title: 结点浏览器
sidebar_position: 4
---

在图档的任何一个地方双击鼠标左键，你都可可以打开结点浏览器。你将会看到：

- vl语言的功能结点（Node，Input，IOBox...）
- 一系列的基础级别的结点目录（2D，3D，Animation...）
- 一系列的可以使用的nugets（VL）

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Nodebrowser.png)

你也可以这样打开结点浏览器：

- 当你从一个结点引出一个连线同时双击左键，你可以打开结点浏览器创造你所要的结点
- 在一个已经存在的连线上双击可以直接选择创建一个结点，并直接插入这个连线中
- 在一个已经存在的结点上双击也可以引出结点浏览器，选择结点来替换这个结点

## 过滤结点

在左侧的圆形图标可以帮助你快速的包涵或者剔除某一组的结点。用鼠标悬停在上面你可以查看到每个圆圈所代表的结点组别，然后可以来开关它们：
- Include high level nodes 包含高层结点 (the standard set)
- Include potential future nodes 包含未来可能引入的测试的结点(Experimental)
- Include low level nodes 包含底层结点 (Advanced)
- Include obsolete, old nodes (Obsolete) 包含过时的老版本的结点

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Filter1.png)

在底部的两个圆圈也是两个结点过滤选项：
- Include internal nodes (those that are only visible inside this document) 包含内部结点（仅在这个文档中可见的结点）
- Include external nodes (from referenced .dlls and NuGets) 包含引入的结点（从依赖的.dlls的文件以及NuGets里来的结点）

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Filter2.png)

## 找到结点

有不同的方式来定位结点：
- 通过目录
- 通过标签

在两种情况下你都还可以通过查看结点图标来获得更多信息：

In both cases it helps to be familiar with the icons:

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Icon-Category.png) Category

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Icon-Type.png) Type Category

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Icon-Process.png) Process Node

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Icon-Operation.png) Operation Node

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Icon-Nuget.png) Nuget

鼠标悬停在任何一个结点上，你都可以在结点浏览器看到关于这个结点的输入和输出。在浮出的小窗口上你也可以看到关于这个结点的介绍（如果有的话）。

当你做出一个选择点击来某个列表中的结点，两种情况会发生：
- 如果你的选择是非常明确的结点的话，该结点就会被创建出来
- 如果你的选择只是选择某些类别，结点浏览器会打开次级列表，提供更多细节和选择来确定是要创建哪个结点

### 依靠目录来搜寻

在VL中的结点是按照目录结构整理的。点击任何一个目录便进去其中。

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Tags.png)

注意当你进入某个目录的时候，在结点浏览器的底部右侧会出现一个标签。此时结点列表就被这个标签所过滤。你可以点击'x'来关闭当前的目录来进入其他目录或者移除某个标签。按下ESC键总是会移除最新的那个标签。

### 依靠标签来搜寻

在搜索框中输入任何单词来搜索。

## VL语言的功能结点

VL语言的预设的功能结点将会被显示成斜体。
- IOBox
- Pad
- Pins (Input, Output)
- Patch Definition
- Canvas
- Record Definition
- Class Definition
- Operation Definition
- Delegate
- Regions (Repeat, Foreach, If)

在这些VL语言的功能结点中，很多结点你可以在新建它们之后直接输入名字来命名它们。对于针脚以及数据板还可以有另外种用法：首先在结点浏览器中输入名字，然后选择阵脚或者数据板，他们将会带着你输入的名字建立在文档中。

## 激活（引入）Nugets

有些Nugets在VL中可用，但是还没有被当前的文档所激活，你可以轻松的点击一下这些Nugets，它们便会被引入。在被引入之后，所有的结点也就都会显示在结点浏览器中。

![](https://thegraybook.vvvv.org/images/hde/vl-Nodebrowser-Nugets.png)

如果你想取消某些nuget，你得回到你的项目依赖列表中去取消它们。
