---
title: Mizuki 简易指南
published: 2026-05-03
description: "如何使用此博客模板。"
image: "./cover.webp"
tags: [""]
category: 指南
draft: true
---



此博客模板基于 [Astro](https://astro.build/) 构建。对于本指南中未提及的内容，您可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章的前置元数据（Front-matter）

```yaml
---
title: 我的第一篇博客文章
published: 2026-05-03
description: 这是我新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: []
category: 前端
draft: false
---
```




| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章标题。                                                                                                                                                                                      |
| `published`   | 文章发布日期。                                                                                                                                                                            |
| `pinned`      | 此文章是否置顶到文章列表顶部。                                                                                                                                                   |
| `priority`    | 置顶文章的优先级。数值越小优先级越高（0, 1, 2...）。                                                                                                                          |
| `description` | 文章的简短描述。显示在索引页面上。                                                                                                                                                   |
| `image`       | 文章的封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：`public` 目录中的图片<br/>3. 无前缀：相对于 Markdown 文件的路径 |
| `tags`        | 文章标签。                                                                                                                                                                                       |
| `category`    | 文章分类。                                                                                                                                                                                   |
| `licenseName` | 文章内容的许可协议名称。                                                                                                                                                                      |
| `author`      | 文章作者。                                                                                                                                                                                     |
| `sourceLink`  | 文章内容的来源链接或参考。                                                                                                                                                          |
| `draft`       | 如果此文章仍是草稿，则不会显示。                                                                                                                                                    |

## Where to Place the Post Files



您的文章文件应放置在 `src/content/posts/` 目录中。您还可以创建子目录以更好地组织文章和资产。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.webp
    └── index.md
```