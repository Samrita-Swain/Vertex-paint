// MultiStepForm.tsx
import React, { useState } from 'react';

// Define the form data structure
interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  
  // Step 2: Address Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Step 3: Additional Information
  occupation: string;
  interests: string[];
  comments: string;
}

// Initialize the form data
const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  occupation: '',
  interests: [],
  comments: '',
};

const CalculatorForm: React.FC = () => {
  // State to track current page and form data
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle checkbox changes for interests
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData(prevData => ({
        ...prevData,
        interests: [...prevData.interests, value]
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        interests: prevData.interests.filter(interest => interest !== value)
      }));
    }
  };
  
  // Next page handler
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };
  
  // Previous page handler
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };
  
  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  // Step 1: Personal Information Form
  const renderStep1 = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Step 1: Select which room(s) to makeover</h2>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex justify-end mt-6">
        <button 
          type="button" 
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
  
  // Step 2: Address Information Form
  const renderStep2 = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Step 2: Pick the package that suits you the best</h2>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex justify-between mt-6">
        <button 
          type="button" 
          onClick={prevStep}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Previous
        </button>
        <button 
          type="button" 
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
  
  // Step 3: Additional Information Form
  const renderStep3 = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Step 3: Your free quote is just a few details away!</h2>
      <div className="mb-4">
        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="interests"
              value="sports"
              checked={formData.interests.includes('sports')}
              onChange={handleInterestChange}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <span>Sports</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="interests"
              value="reading"
              checked={formData.interests.includes('reading')}
              onChange={handleInterestChange}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <span>Reading</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="interests"
              value="travel"
              checked={formData.interests.includes('travel')}
              onChange={handleInterestChange}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <span>Travel</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="interests"
              value="music"
              checked={formData.interests.includes('music')}
              onChange={handleInterestChange}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <span>Music</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-between mt-6">
        <button 
          type="button" 
          onClick={prevStep}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Previous
        </button>
        <button 
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
  
  // Summary of submitted data
  const renderSummary = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6 text-green-600 text-center">Form Submitted Successfully!</h2>
      
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Select which room(s) to makeover</h3>
        <p className="text-gray-700"><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
        <p className="text-gray-700"><span className="font-medium">Email:</span> {formData.email}</p>
      </div>
      
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Pick the package that suits you the best</h3>
        <p className="text-gray-700"><span className="font-medium">Address:</span> {formData.address}</p>
        <p className="text-gray-700"><span className="font-medium">City:</span> {formData.city}</p>
        <p className="text-gray-700"><span className="font-medium">State:</span> {formData.state}</p>
        <p className="text-gray-700"><span className="font-medium">Zip Code:</span> {formData.zipCode}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Your free quote is just a few details away!</h3>
        <p className="text-gray-700"><span className="font-medium">Occupation:</span> {formData.occupation || 'Not provided'}</p>
        <p className="text-gray-700"><span className="font-medium">Interests:</span> {formData.interests.join(', ') || 'None selected'}</p>
        <p className="text-gray-700"><span className="font-medium">Comments:</span> {formData.comments || 'None'}</p>
      </div>
      
      <div className="flex justify-center mt-6">
        <button 
          type="button" 
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData(initialFormData);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Start Over
        </button>
      </div>
    </div>
  );
  
  // Progress indicator component
  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10"></div>
        
        <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
          1
        </div>
        
        <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
          2
        </div>
        
        <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
          3
        </div>
      </div>
      
      {/* <div className="flex justify-between mt-2 text-sm text-gray-600">
        <div className="w-20 text-center">Personal</div>
        <div className="w-20 text-center">Address</div>
        <div className="w-20 text-center">Additional</div>
      </div> */}
    </div>
  );
  
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {!isSubmitted ? (
        <>
          <ProgressBar />
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </form>
        </>
      ) : (
        renderSummary()
      )}
    </div>
  );
};

export default CalculatorForm;