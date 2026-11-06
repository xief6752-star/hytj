import type { NextConfig } from "next";

// Bundle Analyzer 配置
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // 图片优化（静态导出模式需要 unoptimized: true）
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 启用 SWC minify（更快的代码压缩）
  swcMinify: true,

  // 压缩配置
  compress: true,

  // 生产环境优化
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // 实验性功能
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react-icons", "simple-icons"],
  },

  // 严格模式
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
