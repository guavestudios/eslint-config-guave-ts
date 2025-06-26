import { Blub } from './SampleTypescriptType'

function named (b: Blub) {
  if (b.name === 'Blub') {
    // Do something
  }
  return function () {
    return () => {
      return () => 1
    }
  }
}

named({ name: 'Blub', age: 1 })
