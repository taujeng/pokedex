import styleHelper from "./styleHelper"


test('Uppercase the word', () => {
  expect(styleHelper.upperCase("charmander")).toBe("Charmander")
})


test('Format date correctly', () => {
  expect(styleHelper.setDate("2022-06-30")).toBe("June 30, 2022")
})