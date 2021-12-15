---
title: 扩展
sidebar_position: 7
---

编辑环境的扩展，就是一些可以帮助增强vvvv功能的小工具。

例子：
- 键盘鼠标显示小工具：会显示鼠标和键盘操作的浮动小窗口，显示在屏幕的左下角，在录制视频教程以及做直播工作坊的时候会有帮助。
- [Pipette](https://www.nuget.org/packages/VL.Pipette.HDE/)：一个桌面颜色拾取器。将光标移动到任何桌面的像素上同时按下ESC，则会拾取该像素的颜色值，并以hex-string保存在剪贴板（你可以直接粘贴到颜色的IOBox中）。
- [TUIO Simulator and Monitor](https://www.nuget.org/packages/VL.TUIO.HDE/)：你有经常想要测试TUIO触摸设备而正好手边又没有合适的设备的窘境么？那么这款小工具就是你理想的伙伴了。
- [Spout Monitor](https://www.nuget.org/packages/VL.SpoutMonitor.HDE/)：你有经常依赖从别的程序依靠[Spout](https://spout.zeal.co/)共享来的贴图么？使用这个小工具可以快速预览当前在你系统中分享的贴图。

## 搜寻和安装扩展

扩展也被描述成NuGets，就像你在环境中安装的VL和NuGet。当然也存在只作为扩展使用的NuGet。这些都可以在[nuget.org](https://www.nuget.org/packages?q=Tags%3A%22VL%22+hde)上轻松找到。

一旦找到，扩展就跟[其他Nuget一样的方式安装]。

## 编写扩展

扩展其实就是图档，因而你可以轻松地创建属于你自己的扩展。可以查看[创建编辑环境扩展]。