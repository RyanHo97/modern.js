---
sidebar_label: port
---

# server.port



* 类型： `Number`
* 默认值： `8080`

Modern.js 在 `dev` 和  `start` 时会以 `8080` 为默认端口启动，通过该配置可以修改 Server 启动的端口号:

```typescript title="modern.config.ts"
export default defineConfig({
  server: {
    port: 3000,
  }
});
```