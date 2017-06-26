module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/2017/japan': { page: '/2017/japan' },
    '/100': { page: '/100' },
    // NOTE: we manually move this exported file to 404.html in the build process.
    // Once Next allows exporting a plain .html file, let's change this.
    '/_error': { page: '_error' },
  }),
}
