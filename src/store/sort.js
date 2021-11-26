export const sortByDate = ({ array, desc = false }) => {
  const result = array.sort((a, b) => {
    if (!desc) {
      return new Date(a.createdAt) - new Date(b.createdAt)
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt)
    }
  })

  return result
}