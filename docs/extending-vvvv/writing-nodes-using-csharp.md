---
title: 使用C#来编写节点
sidebar_position: 3
---

使用C#为VL编写节点并不需要关于VL的特别的知识和准备。实际上，VL只是将你编写的C#代码转变成为节点。这篇文档就是一步一步教你如何实现。

## 从一个模板开始

在Visual Studio 2019选择以下的任何模板创建一个新项目
- ```Visual C#[Class Library (.NET Standard 2.0)```
- ```Visual C#[Class Library (.NET Framework 4.7.2)```
一个小贴士：尽量使用.NET Standard，需要的情况下再使用.NET Framework。关于这一点的更多资讯，请阅读[这里的讨论](https://stackoverflow.com/questions/42939454/what-is-the-difference-between-net-core-and-net-standard-class-library-project)。
![Visual Studio Template Chooser](https://thegraybook.vvvv.org/images/libraries/vl-libraries-writingNodes-vs2017.PNG)

这将会创建一个.sln，一个.csproj以及一个Class1.cs的文件，像这样

![Empty generated Class1.cs](https://thegraybook.vvvv.org/images/libraries/vl-libraries-writingNodes-vs2017-emptyClass.PNG)

Namespace (命名空间) 在VL中将会呈现为节点的类别目录。嵌套命名空间（使用点语法）将相应地转换为嵌套类别目录。

现在，任何公共静态操作以及公共类的每个成员操作都将变成一个VL节点。作为最简单例子，你可以像这样来写：

```c#
namespace MyCustomNodes
{
    public static class MyStaticNodes
    {
        public static float MyAddition(float input, float input2)
        {
            return input + input2;
        }
    }
}
```

基本上就是这样。现在build你的项目，你将获得一个.dll文件，里面就包含你的节点。从这里你可以继续像上一个章节介绍的方式来使用节点。

![Resulting Node in VL](https://thegraybook.vvvv.org/images/libraries/vl-libraries-writingNodes-MyAdditionNode.png)