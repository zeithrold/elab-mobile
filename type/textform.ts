interface TextForm {
  id: string
  answer: string
}

interface UpdateTextFormRequest {
  text_form: TextForm[]
}

interface Question {
  id: string
  question: string
  text: string
}

interface GetQuestionResponse {
  questions: Question[]
}

interface GetTextFormResponse {
  text_form: TextForm[]
}

export type {
  Question,
  TextForm,
  UpdateTextFormRequest,
  GetQuestionResponse,
  GetTextFormResponse
}
