import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true, // Optional: enables strict mode for React
  webpack(config, { isServer }) {
    // Add raw-loader for GLSL files
    config.module.rules.push({
      test: /\.(glsl|vs|fs|frag|vert)$/,
      use: 'raw-loader',
      exclude: /(node_modules)/
    })

    // Optionally, add support for three-stdlib
    config.resolve.alias = {
      ...config.resolve.alias,
      'three-stdlib': require.resolve('three-stdlib') // Resolving the three-stdlib module
    }

    return config
  }
  // Optional: You can configure the base path here if needed
  // basePath: '/your-base-path',
}

export default nextConfig
