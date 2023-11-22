import remarkValidateLinks from "remark-validate-links";
import remarkFrontmatter from "remark-frontmatter";
import remarkLintFrontmatterSchema from "remark-lint-frontmatter-schema";
import remarkLintNoDeadUrls from "remark-lint-no-dead-urls";

const remarkConfig = {
	plugins: [
		remarkValidateLinks,
		remarkFrontmatter,
		[
			remarkLintFrontmatterSchema,
			{
				schemas: {
					/* One schema for many files */
					"./.github/linters/metadata.schema.yml": [
						/* Support glob patterns ———v */
						"./src/pages/**/*.md",
					],
				},
			},
		],
		[
			remarkLintNoDeadUrls,
			{
				skipUrlPatterns: [
					"https://magento.biterg.io",
					"https://marketplacesupport.magento.com",
					"https://github.com/magento/partners-magento2ee",
					"https://github.com/magento/partners-magento2b2b",
					"https://www.php.net",
				]
			}
		],
	],
};
export default remarkConfig;
