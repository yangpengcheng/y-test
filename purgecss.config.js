module.exports = {
  content: [`./*.html`, `./src/**/*.vue`,`./src/*.vue`,`./src/**/*.scss`],
  defaultExtractor(content) {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      ''
    )
    return (
      contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    )
  },
  safelist: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /data-v-.*/
  ]
}
