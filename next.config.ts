import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/**
	 * 为App Router启用静态导出。
	 *
	 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
	 */
	output: 'export',

	/**
	 * 设置基本路径。这是你GitHub仓库的slug。
	 *
	 * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
	 */
	// basePath: '/nextjs-github-pages',

	/**
	 * 禁用基于服务器的图像优化。Next.js不支持
	 * 静态导出的动态功能。
	 *
	 * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
	 */
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
