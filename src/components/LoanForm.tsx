import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Briefcase, CreditCard, IndianRupee, Clock, BadgeCheck } from 'lucide-react';
import type { LoanFormData } from '../types';

const LoanForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoanFormData>({
    income: 0,
    loan_amount: 0,
    credit_score: 0,
    self_employed: 0,
    property_area: 0,
    loan_term: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://loan-eligibility-1-ibry.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      navigate('/result', { state: { ...formData, eligible: result.eligible } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-indigo-50">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
            <div className="px-6 py-12 sm:p-12 relative">
              <div className="text-center mb-12">
                <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-6">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Loan Eligibility Predictor
                </h1>
                <p className="text-gray-600 text-lg">Fill in your details to check your loan eligibility</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <IndianRupee className="w-4 h-4 mr-2 text-indigo-600" />
                      Annual Income
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        required
                        className="block w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50 hover:bg-white"
                        value={formData.income}
                        onChange={(e) => setFormData({ ...formData, income: Number(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <IndianRupee className="w-4 h-4 mr-2 text-indigo-600" />
                      Loan Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        required
                        className="block w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50 hover:bg-white"
                        value={formData.loan_amount}
                        onChange={(e) => setFormData({ ...formData, loan_amount: Number(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <BadgeCheck className="w-4 h-4 mr-2 text-indigo-600" />
                      Credit Score
                    </label>
                    <input
                      type="number"
                      required
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50 hover:bg-white"
                      value={formData.credit_score}
                      onChange={(e) => setFormData({ ...formData, credit_score: Number(e.target.value) })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Briefcase className="w-4 h-4 mr-2 text-indigo-600" />
                      Self Employed
                    </label>
                    <select
                      required
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50 hover:bg-white"
                      value={formData.self_employed}
                      onChange={(e) => setFormData({ ...formData, self_employed: Number(e.target.value) })}
                    >
                      <option value="">Select</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Building2 className="w-4 h-4 mr-2 text-indigo-600" />
                      Property Area
                    </label>
                    <select
                      required
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50 hover:bg-white"
                      value={formData.property_area}
                      onChange={(e) => setFormData({ ...formData, property_area: Number(e.target.value) })}
                    >
                      <option value="">Select</option>
                      <option value="2">Urban</option>
                      <option value="1">Semiurban</option>
                      <option value="0">Rural</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Clock className="w-4 h-4 mr-2 text-indigo-600" />
                      Loan Term (days)
                    </label>
                    <input
                      type="number"
                      required
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50 hover:bg-white"
                      value={formData.loan_term}
                      onChange={(e) => setFormData({ ...formData, loan_term: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
                  >
                    Predict
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;