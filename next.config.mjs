import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {},
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Moved inside the config
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

// Apply both plugins to nextConfig
export default withNextIntl(withMDX(nextConfig));
