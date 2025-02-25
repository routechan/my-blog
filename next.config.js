/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ビルド時にESLintチェックをスキップ
  },
}

module.exports = nextConfig 