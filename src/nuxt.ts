interface NuxtParams {
  nuxtFnc: () => Promise<any>
}

export async function nuxt ({ nuxtFnc }: NuxtParams) {
  const cfg = nuxtFnc()
  const globals = (await cfg.toConfigs()).find(v => v.name === 'nuxt/import-globals')

  return [
    globals
  ]
}
