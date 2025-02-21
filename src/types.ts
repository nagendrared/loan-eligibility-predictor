export interface LoanFormData {
  income: number;
  loan_amount: number;
  credit_score: number;
  self_employed: number;
  property_area: number;
  loan_term: number;
}

export interface PredictionResult extends LoanFormData {
  eligible: boolean;
}