import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowLeft, IndianRupee } from 'lucide-react';
import type { PredictionResult } from '../types';

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state as PredictionResult;

  const getPropertyArea = (value: number) => {
    switch (value) {
      case 2: return 'Urban';
      case 1: return 'Semiurban';
      case 0: return 'Rural';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-indigo-50">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
            <div className="px-6 py-12 sm:p-12 relative">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-indigo-600 hover:text-indigo-800 mb-8 bg-indigo-50 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Form
              </button>

              <div className="text-center mb-12">
                <div className="inline-block mb-6 transform transition-transform duration-300 hover:scale-110">
                  {result.eligible ? (
                    <div className="p-4 rounded-full bg-green-100">
                      <CheckCircle2 className="w-20 h-20 text-green-500" />
                    </div>
                  ) : (
                    <div className="p-4 rounded-full bg-red-100">
                      <XCircle className="w-20 h-20 text-red-500" />
                    </div>
                  )}
                </div>
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Loan {result.eligible ? 'Approved!' : 'Not Approved'}
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {result.eligible
                    ? 'Congratulations! Based on your information, you are eligible for the loan. Our team will contact you shortly with the next steps.'
                    : 'Unfortunately, based on your information, you are not eligible for the loan at this time. Please review our lending criteria or contact our support team for assistance.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Application Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="text-sm font-medium text-indigo-600 mb-1">Annual Income</p>
                    <p className="text-2xl font-semibold text-gray-900 flex items-center">
                      <IndianRupee className="w-5 h-5 mr-1" />
                      {result.income.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="text-sm font-medium text-indigo-600 mb-1">Loan Amount</p>
                    <p className="text-2xl font-semibold text-gray-900 flex items-center">
                      <IndianRupee className="w-5 h-5 mr-1" />
                      {result.loan_amount.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="text-sm font-medium text-indigo-600 mb-1">Credit Score</p>
                    <p className="text-2xl font-semibold text-gray-900">{result.credit_score}</p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="text-sm font-medium text-indigo-600 mb-1">Self Employed</p>
                    <p className="text-2xl font-semibold text-gray-900">{result.self_employed ? 'Yes' : 'No'}</p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="text-sm font-medium text-indigo-600 mb-1">Property Area</p>
                    <p className="text-2xl font-semibold text-gray-900">{getPropertyArea(result.property_area)}</p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <p className="text-sm font-medium text-indigo-600 mb-1">Loan Term</p>
                    <p className="text-2xl font-semibold text-gray-900">{result.loan_term} days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;