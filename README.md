# Palabra V3 · 真人音频版

## 新版重点
- 保留 V2 的单词卡、间隔复习、选择题、听写、词库导入、学习统计、备份恢复。
- 音频播放优先级：当前浏览器内个人录音（IndexedDB）→ 仓库 `audio/` 中登记的文件 → Wikimedia Commons 的少量公开示例录音。
- 无设备 TTS 依赖；没有录音的词显示提示，不冒充真人发音。
- 由于环境网络限制，ZIP 中**不含** Commons 真人录音实体文件。试听需要网络且可能受第三方访问限制。

## 发布到 GitHub Pages
1. 先从旧版网站下载 JSON 学习记录备份。
2. 把 `index.html`、`audio-manifest.json`、`AUDIO_CREDITS.md` 和 `audio/` 文件夹上传到仓库根目录。
3. 在 `Settings → Pages` 将来源设为 `Deploy from a branch`，分支 `main`，目录 `/(root)`。
4. 打开网站后选择“真人发音库”中的试听或使用本机录音导入。

## 新增网站共享录音
把已获许可的 `aprender.mp3` 放进 `audio/`，修改 `audio-manifest.json`：

```json
{
  "aprender": "audio/aprender.mp3"
}
```

保留原来的 JSON 结构，多个单词用逗号分隔。再按 AUDIO_CREDITS.md 记录音频来源。

## 重要限制
- 用网页上传的录音保存在当前手机浏览器中，**不会**随 GitHub 仓库同步；清理浏览器数据可能丢失。
- JSON 学习记录备份不包含 IndexedDB 音频文件。保留音频原件。
- 网页中默认仅有 3 个公开音频 URL 试播；其他词需自行添加授权音频。
- 西班牙本土口音需要对每条录音的录音者地区作个别核验。
