---
title: 文件导航
sidebar_position: 3
---

一个VL项目基本指的是一个.vl的文档。这个文档可能会包含一个或者多个的图档。除此之外，一个文档也可以以来别的文档，或者是Nugets的文档。这些文档的结点是可以访问的。

在窗口的菜单栏你总能看到你现在编写的文档的名字，可以说是“被激活的文档”。

![](https://thegraybook.vvvv.org/images/hde/gamma-active_document.png)
菜单栏显示着当前所工作的文档为“callmename.vl”

## 当前文档菜单

点击当前的文档你可以打开一个菜单。在这个菜单的底部，你将会看到这个文档最后被保存的时候所保存的VL的版本。如果你看到一个红色或者是绿色标志出现在文档名字之前，那说明这个文档被保存的时候是另外一个版本的VL，跟你现在所使用的版本是不同的。

![](https://thegraybook.vvvv.org/images/hde/gamma-active_document_menu.png)
这个例子显示出当前所运行的gamma版本是2020.1.3.147

绿色标记

![](https://thegraybook.vvvv.org/images/hde/gamma-active_document_menu_savedOlder_line.png)

一个在文件名字前出现的绿色小标记意味着这个文档被升级到了现在在运行的版本。这在大部分情况下是没有问题的。当然你被给与这个标记是想提醒你如果这个文档现在保存了，那么用之前的更老的运行环境打开这个文档可能会有问题。

红色标记

![](https://thegraybook.vvvv.org/images/hde/gamma-active_document_menu_savedNewer_line.png)

一个红色的标记是在警告这个文件最近被保存为一个更新的版本，而这也可能导致该文档运行起来或者看起来并不是预期的样子。所以在这种情况下，你可以考虑使用较新版本的VL来打开这个文档。

## Dependencies 依赖

一个文档可以引用三种不同的依赖：
- VL Nugets
- .NET Nugets
- 文件

![](https://thegraybook.vvvv.org/images/hde/gamma-active_document_menu_dependencies.png)
文档的依赖

### VL Nugets

选择 “VL Nugets” 就会看到一个列表。这个列表包含着所有面向VL的nugets。每一个nuget都是一个文档（.vl, .dll ...）的集合，这些文档提供可使用的结点。

在nuget旁边带着括号的版本，意味着当前所加载的nuget的版本与原本应该加载的版本不一致。

&gt; 意味着原本引用的版本比当前版本小

&lt; 意味着原本所用的版本比当前版本大

![](https://thegraybook.vvvv.org/images/hde/gamma-active_document_menu_dependencies_vlnugets.png)

右键某个nuget就可以选中它。你将可以使用选中的nuget所提供的结点，当然是通过在文档中的结点浏览器。

### .NET Nugets

在.NET Nugets中你可以找到所有的还没有兼容VL的nugets。这意味着你仍然可以使用它们，但是为了库文件的兼容性，这类依赖使用起来可能会要求更多的知识。

### 文件

除了依赖nugets，你同样可以引用独立的文件：
- .vl
- .dll
![](https://thegraybook.vvvv.org/images/hde/gamma-active_document_menu_dependencies_addfiles.png)
选择“Add Existing...”来选择一个文件。文件中的所有暴露开放出来的结点你都可以通过结点浏览器来使用。

### Forward Dependencies

In this section you see a listing of all nugets and files combined. Here you can specify if the nodes of a specific dependency will be forwarded or not.

By default if you add a dependency to a document you get only the nodes the dependency exposes directly. Dependencies can depend on other dependencies which you don't see by default.

Only if you check a dependency as "Forward" it will also be seen by documents that only include their parent document.