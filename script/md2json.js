const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

/**
 * Generates a unique id from a file path.
 * @param filePath
 * @returns {string}
 */
const generateIdFromPath = (filePath) => {
  return crypto.createHash('sha256').update(filePath).digest('hex')
}

/**
 * Converts a markdown file to JSON object.
 *
 * @param {string} markdownFilePath - The path of the markdown file to be converted.
 * @returns {Object} - The JSON object converted from the markdown file.
 */
const markdownToJSON = (markdownFilePath) => {
  const content = fs.readFileSync(markdownFilePath, 'utf8')

  const parts = content.split('---')
  const front = parts[0].trim()
  const back = parts[1].trim()
  const description = parts[2].trim()

  const [category, subCategory, cardName] = markdownFilePath
    .split(path.sep)
    .slice(-3)
    .map((piece) => piece.replace(/\.md$/, ''))

  const id = generateIdFromPath(markdownFilePath)

  return {
    id,
    category,
    subCategory,
    cardName,
    front,
    back,
    description
  }
}

/**
 * Gets all markdown files in a directory.
 * @param dirPath
 * @param arrayOfFiles
 * @returns {*[]}
 */
const getMarkdownFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getMarkdownFiles(path.join(dirPath, file), arrayOfFiles)
    } else if (path.extname(file) === '.md') {
      arrayOfFiles.push(path.join(dirPath, file))
    }
  })

  return arrayOfFiles
}

const markdownFiles = getMarkdownFiles('./docs')
const cardsData = markdownFiles.map((filePath) => markdownToJSON(filePath))

fs.writeFileSync('./src/cards.json', JSON.stringify(cardsData, null, 2))
