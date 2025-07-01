import { Blub } from './SampleTypescriptType'

function named (b: Blub) {
  if (b.name === 'Blub') {
    // Do something
  }

  try {
    throw new Error('Test error')
  } catch {
    // no empty blocks
  }

  return function () {
    return () => {
      return () => 1
    }
  }
}

named({ name: 'Blub', age: 1 })
