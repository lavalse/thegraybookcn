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

Static operations只有他们自己，操作那些提供给他的数据。这里的 “member” 其实点出了这些operations的从属，然后操作数据类型的数据。