interface Predicate<T> { 
  (value: T): boolean
}

function filter<T>(collection: T[], predicate: Predicate<T>): T[] {
  const result: T[] = []
  for (const item of collection) {
    if (predicate(item)) result.push(item)
  }
  return result 
}

export function keep<T>(collection: T[], predicate: Predicate<T>): T[] {
  return filter(collection, predicate)
}
  
export function discard<T>(collection: T[], predicate: Predicate<T>): T[] {
  return filter(collection, (e) => !predicate(e))
}