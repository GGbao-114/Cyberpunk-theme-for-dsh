# dsh-theme-cyberpunk-red

赛博朋克 2077「夜之城」红×青×绿霓虹主题 —— DeepSeek Harness Web UI 的皮肤插件（**dsh-plugin**）。

这是 [Tommy00748/dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077) 的**重制分支**。

## 🙏 原始作者

- 原作者：[Tommy00748](https://github.com/Tommy00748)
- 原仓库：[dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077)
- 原协议：MIT（本分支同样保持 MIT，并保留原作者署名）

> 本仓库仅对原主题做了视觉与功能上的二次开发，核心代码版权归原作者 Tommy00748 所有。

## ✨ 与原版的区别

| 项 | 原版 | 本分支 |
|---|---|---|
| 配色 | NC 黄 × 霓虹青 | **霓虹红 × 青 × 一点亮黄/绿**，黑底保留 |
| 字体 | MiSans | 内嵌 **Ryzes（赛博涂鸦）+ Cyberpunk + Orbitron**（base64，无需联网） |
| Logo | 原生 DeepSeek 图标 | 左上角 **DeepSeek 艺术字** |
| 开屏 | NIGHT CITY 转场 | **CYBERPUNK 2077** 大字 + **INFECTING** 载入进度条 |
| 交互 | — | **Tab 病毒槽**：左侧 120° 弧 + 8 个最近会话（滚轮选择）+ 中右黑客终端 |
| 背景 | 纯黑 | 藏青 + 绿色代码雨粒子 |

## 📦 安装

```sh
dsh plugin --profile web add <你的仓库地址>
```

安装后重启 `dsh web` 生效。

## 🔧 字体来源（已内嵌）

- **Ryzes**（Cyber Graffiti）：个人非商用免费，作者 faptype.com
- **Cyberpunk**：fontsrepo 免费字体
- **Orbitron**：Google Fonts（OFL）

字体文件已 base64 内嵌进 `lib/client.js`，页面渲染不依赖任何外部字体 CDN。原始字体文件备份在 `fonts/` 目录。

## 📄 许可

MIT。字体版权归各自作者所有。
