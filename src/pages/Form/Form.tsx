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
    <div className="p-12">
      <div className="bg-[#2c3789] text-white p-12 rounded-[30px] w-full mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 items-center">
        {/* Left Section */}
        <div className="w-full">
          <h2 className="text-[40px] font-bold mb-3">Get Expert Advice</h2>
          <p className="text-[20px] font-[400] text-[#ffffff91]">
            Bid goodbye to your home furnishing hassles with our expert
            supervision
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full">
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

            {/* Checkbox Fields */}
            {/* <label className="col-span-2 flex items-center space-x-2 mb-5">
            <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    whatsappUpdates: !prev.whatsappUpdates,
                  }))
                }
                className={`relative w-12 h-6 flex items-center rounded-full transition ${
                  formData.whatsappUpdates ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                <span
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform ${
                    formData.whatsappUpdates ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <span>Update me on WhatsApp</span>
            </label> */}

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
            <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="localPainter"
                  checked={formData.localPainter}
                  onChange={handleChange}
                  className="w-5 h-5"
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
                />
                <span>There is a local painter hired</span>
              </label>
            </div>
            <p className="mb-5 text-[#ffffff91]">
              By proceeding, you are authorizing Asian Paints and its suggested
              contractors to get in touch with you through calls, sms, or
              e-mail.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="col-span-2 bg-yellow-500 border border-yellow-500 text-black p-3 rounded-[0.5rem] font-bold flex items-center justify-center space-x-2 hover:bg-transparent hover:text-white hover:border-white transition duration-300 !mb-0 !text-[20px] inspired-by-button"
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
