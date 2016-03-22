const buildIndex = name => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${name}</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="./dist/bundle.js"></script>
</html>`
}

export default buildIndex
