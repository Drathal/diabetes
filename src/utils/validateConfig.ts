export interface Config {
  sheet_id: string
  client_email: string
  private_key: string
}

export const getConfigErrors = (config: Config): string[] => {
  const errors = Object.entries(config).reduce((prev, tuple) => {
    if (!tuple[1]) {
      return [...prev, `${tuple[0]} is not defined`]
    }
    return prev
  }, [] as string[])

  return errors
}

export const validateConfig = (config: Config): boolean => {
  const errors = getConfigErrors(config)
  if ([...errors].length === 0) {
    return false
  }

  throw new Error(`${errors.toString()}`)
}
