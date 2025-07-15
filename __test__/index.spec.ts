import test from 'ava'
import { readFileSync } from 'fs'
import { recognize } from '../index'

const imagePath = __dirname + '/test_ocr.jpg'
console.log('imagePath:', imagePath)

test('recognize: file path', async (t) => {
  try {
    const result = await recognize(imagePath)
    console.log(result)
    t.is(typeof result.text, 'string', 'Result text should be a string')
    t.true(result.text.length > 0, 'Result text should not be empty')
  } catch (error) {
    console.error('Error recognizing image file:', error)
    t.fail('Failed to recognize image file')
  }
})

test('recognize: buffer', async (t) => {
  try {
    const imageBuffer = readFileSync(imagePath)
    const result = await recognize(imageBuffer)
    console.log(result)
    t.is(typeof result.text, 'string', 'Result text should be a string')
    t.true(result.text.length > 0, 'Result text should not be empty')
  } catch (error) {
    console.error('Error reading image file:', error)
    t.fail('Failed to read image file')
  }
})
