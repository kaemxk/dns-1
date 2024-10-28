export interface ICompanyFeature {
  id: number
  header: string
  featureText: string[]
  icon: string
}

export interface ICompanyHistory {
  id: number
  year: number
  description: string
  icon: string
}

export interface ICompanyData {
  companyFeatures: ICompanyFeature[]
  companyHistory: ICompanyHistory[]
  shopsCount: number
  employeesCount: number
  citiesCount: number
}

export interface ICompanyInfo {
  message: string
  data: ICompanyData
}
