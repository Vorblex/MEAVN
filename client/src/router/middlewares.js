export function checkAccess (to, from, next) {
  const userId = localStorage.getItem('userId')

  if (to.name !== 'Enter') {
    if (!userId) return next({name: 'Enter'})
  }
  next()
}
