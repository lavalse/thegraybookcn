---
title: Patches 图档
sidebar_position: 2
---

Patches（图档）是我们放置节点的地方。图档有不同的类型：
- Document Patch （文件图档）
- Datatype Patch （数据类型图档）
- Group Patch （组图档）

## Document Patch （文件图档）

:::note
这部分文档属于之前的版本，新版本的使用已经跟这里写的不一样了。因此我们可以等待官方更新之后再做翻译。如果没见更新的话我们自己稍微补充一下就可以了。
:::

Every .vl document has at least one patch, the document patch which gives an overview of the content in the document. The document patch of the active document can always be reached via the shortcut `Alt``P`.

![](https://thegraybook.vvvv.org/images/language/vl-DocumentPatch.png)

Section of the document patch of VL.CoreLib.vl
Here we typically see a range of type-definitions and groups though a document patch can also directly hold operation-definitions.

The document patch can set or omit a base category.

![](https://thegraybook.vvvv.org/images/language/vl-DocumentPatch-BaseCategory.png)

Document base category set to "Foo"

## Datatype Patch

The most common type of patch is a datatype patch. It roughly corresponds to what other programming languages call a "class". Every datatype patch has a corresponding type-definition in the document patch.

There are two ways to create a new datatype patch:

Press CtrlP to create a process node at the cursor and open the new patch
Press CtrlShiftP to create a process definition in Definitions and open the new patch
In both cases the corresponding type-definition is automatically placed in the document patch of the active document.

A datatype patch can have properties and contains at least a Create and an Update operation but can contain any number of additional operations.

By default a datatype patch defines a Process Node.

![](https://thegraybook.vvvv.org/images/language/vl-DatatypePatch.png)

Datatypes: Process, Record and Class
- Process (default): to define a Process Node
- Record: to define an immutable datatype
- Class: to define a mutable datatype
Both Class and Record can also optionally define a Process.





