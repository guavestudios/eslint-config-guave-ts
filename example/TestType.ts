interface Blub {
  name: string
  age: number
}

function named (b: Blub) {
  return function () {
    return () => {
      return () => 1
    }
  }
}

named({ name: 'Blub', age: 1 })
