# 部署说明

目标地址形态：

```text
https://lirichar.github.io/<repo-name>/
```

项目已经使用相对路径引用资源，可以部署在 GitHub Pages 的项目页子路径下。

## 本地运行

ES modules 不建议直接用 `file://` 打开，使用本地静态服务器：

```bash
npm start
```

然后访问：

```text
http://127.0.0.1:4173/
```

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库，例如：

```text
lirichar/good-for-you
```

2. 添加远端并推送：

```bash
git remote add origin https://github.com/lirichar/good-for-you.git
git branch -M main
npm run deploy:push
```

3. 进入仓库 Settings -> Pages。

4. Source 选择 GitHub Actions。

5. 等待 `Deploy GitHub Pages` workflow 完成。

部署完成后访问：

```text
https://lirichar.github.io/good-for-you/
```

如果希望使用其他仓库名，把 `good-for-you` 替换为目标仓库名。项目使用相对路径，部署在 `https://lirichar.github.io/<repo-name>/` 这种子路径下无需改代码。

## 当前环境检查

当前本机缺少可直接部署的 GitHub 身份：

- 未安装 GitHub CLI：`gh`
- 未设置 `GITHUB_TOKEN` 或 `GH_TOKEN`
- 当前 SSH key 未绑定 GitHub
- 当前 git remote 为空

因此必须先在 GitHub 网页创建仓库，或在本机配置 GitHub 身份后再运行部署命令。

## DLC 结构

当前内容拆分为：

```text
data/core/                 # 本体内容包
data/dlc/2026-internet/    # DLC 示例包
data/packs.js              # 内容包合并器
src/engine.js              # 游戏逻辑
src/parser.js              # 输入解析
src/app.js                 # 页面交互
```

新增 DLC 时，复制 `data/dlc/2026-internet/` 的结构，并在 `data/packs.js` 注册即可。
