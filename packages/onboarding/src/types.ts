export const DEWI_ONBOARDING_API_BASE_URL = 'https://onboarding.dewi.org/api'
export const DEWI_ONBOARDING_API_BASE_URL_V2 = `${DEWI_ONBOARDING_API_BASE_URL}/v2`
export const DEWI_ONBOARDING_API_BASE_URL_V3 = `${DEWI_ONBOARDING_API_BASE_URL}/v3`

export type OnboardingRecord = {
  id: number
  onboardingKey: string
  macWlan0: string
  rpiSerial: string
  batch: string
  publicAddress: string
  heliumSerial: string
  macEth0: string
  createdAt: string
  updatedAt: string
  makerId: number
  maker: Maker
  code: number
  errorMessage: string
}

export type Maker = {
  id: number
  name: string
  address: string
  locationNonceLimit: number
  createdAt: string
  updatedAt: string
}

export type Metadata = {
  location: string
  elevation: number
  gain: number
}
export type HotspotType = 'IOT' | 'MOBILE'
