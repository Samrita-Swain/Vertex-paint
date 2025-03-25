import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaArrowRight } from "react-icons/fa";

interface Form {
  name: string;
  mobile: string;
  pincode: string;
  email: string;
  whatsappUpdates: boolean;
  constructionWork: boolean;
  localPainter: boolean;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    mobile: "",
    pincode: "",
    email: "",
    whatsappUpdates: true,
    constructionWork: false,
    localPainter: false,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bad7mo7",
        "template_959b86d",
        { ...formData } as Record<string, unknown>,
        "gX6EjQHilFXYsqv1b"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "Success!",
            text: "Your appointment has been booked successfully!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          setFormData({
            name: "",
            mobile: "",
            pincode: "",
            email: "",
            whatsappUpdates: true,
            constructionWork: false,
            localPainter: false,
          });
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK",
          });
        }
      );
  };

  return (
    <div className="lg:p-12">
      <div className="bg-[#2c3789] text-white p-12 lg:rounded-[30px] w-full mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 items-center">
        {/* Left Section - Now takes 1/3 of the space */}
        <div className="w-full lg:col-span-1 md:col-span-1">
        <h2 className="form-header text-5xl font-medium md:text-[40px] lg:text-[40px] mb-3">Get Expert Advice</h2>
          <p className="text-lg font-normal text-[#ffffff91]">
            Bid goodbye to your home furnishing hassles with our expert
            supervision
          </p>
        </div>

        {/* Right Section - Form - Now takes 2/3 of the space */}
        <div className="w-full lg:col-span-2 md:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Input Fields */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black w-full"
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="+91 Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black w-full"
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Enter your Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black w-full"
                required
              />
            </div>

            {/* Checkbox Fields - Fixed to use different names */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="constructionWork"
                  checked={formData.constructionWork}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{ width: '1.25rem', height: '1.25rem' }}
                />
                <span>There is construction work going on at my house</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="localPainter"
                  checked={formData.localPainter}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{ width: '1.25rem', height: '1.25rem' }}
                />
                <span>There is a local painter hired</span>
              </label>
            </div>
            <p className="mb-5 text-lg leading-6 text-[#ffffff91]">
              By proceeding, you are authorizing Asian Paints and its suggested
              contractors to get in touch with you through calls, sms, or
              e-mail.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="col-span-2 text-lg font-normal bg-yellow-500 border border-yellow-500 text-black p-3 rounded-[0.5rem] flex items-center justify-center space-x-2 hover:bg-transparent hover:text-white hover:border-white transition duration-300 !mb-0 inspired-by-button"
            >
              Book an appointment <FaArrowRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;