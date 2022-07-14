// import App from './App'
const getPosts = require('./App.js')

test('Fetch data from API', async () => {
  const data = await getPosts()
  expect(data).toEqual(expect.arrayContaining({name}))
})