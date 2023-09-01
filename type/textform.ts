interface TextForm {
  id: string
  answer: string
}

interface UpdateTextFormRequest {
  textform: TextForm[]
}

interface Question {
  id: string
  question: string
  text: string
  submitted: boolean
}

interface GetQuestionListResponse {
  questions: Question[]
}

interface GetTextFormResponse {
  textform: TextForm[]
}

export type {
  Question,
  TextForm,
  UpdateTextFormRequest,
  GetQuestionListResponse,
  GetTextFormResponse
}
