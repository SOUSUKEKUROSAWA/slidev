# How to use [Slidev](https://github.com/slidevjs/slidev)

- `npm run dev`
- `./pages` 内にスライド用マークダウンを作成
- [slides.md](./slides.md) に下記の方法でインポートする

```
---
src: ./pages/[インポートするファイル名].md
---
```

- `npm run build -- --out docs`
- `git add .`
- `git commit -m "~"`
- `git push origin main`
- https://sousukekurosawa.github.io/slidev

Learn more about Slidev on [documentations](https://sli.dev/).
