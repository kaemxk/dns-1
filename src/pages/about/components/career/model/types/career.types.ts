export interface IVacancies {
  message: string
  data: IVacancy[]
}

export interface IVacancy {
  guid: string
  name: string
  cityName: string
  salary: string
}
