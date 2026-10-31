Palabra · 可交互 3D 小猪（适用于 GitHub Pages）

包含：
1. index.html：完整 Palabra 页面（保留原有词书、复习与例句功能），3D 版本首页。
2. palabra-pig-barcelona.glb：真正的可旋转 3D 场景模型，包含穿传统西班牙舞蹈装的小猪与巴塞罗那建筑元素。
3. pig-interactive.js：触摸旋转、自动旋转、复位及点击说西语。
4. barcelona-pig.webp：3D 加载中的海报。

安装到 https://github.com/7lily7/palabra-spanish ：
- 先在 Palabra 的「打卡统计」中备份学习记录。
- 将 index.html 替换仓库根目录原文件。
- 将另外三个文件上传到仓库根目录（不要上传到 audio 文件夹）。
- 不要删除 audio/、audio-manifest.json、sentence-listening.js、sentence-manifest.json、sentence-audio/ 及原来的学习数据。
- GitHub Pages 为 main/(root) 分支部署时，用户提交后通常会触发部署。

操作：拖拽/单指旋转；双指捏合或鼠标滚轮缩放；点击 3D 场景或按“和小猪打招呼”播放真人西语；按钮控制自动旋转、复位。
音频来自仓库现有的 hola、gracias、buenos días、mucho gusto、adiós 真人录音。此版本不使用手机 TTS。
3D 查看器采用 Google 开源 model-viewer 4.4.0 ，通过 https://ajax.googleapis.com/ 加载（运行需要网络）。模型 GLB 与音频均在你的 GitHub 仓库本地托管。
如果你的网站仍受 Google Safe Browsing 警告阻止，不要绕过警告进入网站；先排查和完成安全复核。

限制：这是可旋转、可缩放的真正 3D 网格模型，不是精细骨骼动画模型。点击后播放配音和跳跃视觉反馈，但不是逐帧口型同步。巴塞罗那建筑为灵感化建模而非精确的圣家堂建筑复刻。
