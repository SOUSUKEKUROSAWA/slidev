# How to use [Slidev](https://github.com/slidevjs/slidev)

## create
- `./pages` 内にスライド用マークダウンを作成
- [slides.md](./slides.md) に下記の方法でインポートする

```
---
src: ./pages/[インポートするファイル名].md
---
```

## preview
- `npm run dev`

## hosting
- `npm run build`
- `git add .`
- `git commit -m "~"`
- `git push origin main`

## other
Learn more about Slidev on [documentations](https://sli.dev/).
