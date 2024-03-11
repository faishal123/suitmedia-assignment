/** @type {import('next').NextConfig} */

const nextConfig = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src'],
      prependData: `@import "~@styles/variables.scss";`,
    }
  }
  return defaultConfig;
}

export default nextConfig;
