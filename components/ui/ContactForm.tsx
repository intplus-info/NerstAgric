interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  placdholder?: string;
}

export function FormInput({
  label,
  type,
  id,
  placeholder,
  ...props
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[0.75rem] md:text-[0.875rem] leading-normal tracking-[0.14em] font-medium"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
        className="w-full border rounded-[5px] bg-white/9 px-3 py-[9.5px] placeholder:text-white/46 placeholder:text-[0.75rem] placeholder:md:text-[0.875rem] placeholder:leading-normal placeholder:tracking-[0.015em]"
      />
    </div>
  );
}

export const ContactForm = () => {
  return (
    <section className="w-full primary-gradient text-white px-8 sm:px-14 md:px-20 lg:px-24.5 py-14 md:py-16">
      <div className="grid justify-center grid-cols-1 md:grid-cols-[minmax(0,391px)_minmax(0,646px)] gap-12 md:gap-11.75">
        {/* Left — heading */}
        <div className="flex flex-col gap-4 font-urbanist md:gap-5.75">
          <h2 className="text-[1.6rem] md:text-[2rem] lg:text-[2.3325rem] leading-10 md:leading-[52.23px] font-medium text-pretty">
            Talk to Our Agriculture Experts
          </h2>
          <p className="section-text font-light">
            Speak directly with our experts to discuss your agribusiness ideas,
            project plans, or investment opportunities and receive professional
            guidance on the most effective implementation strategies.
          </p>
        </div>

        {/* Right — form */}
        <form className="flex flex-col gap-6.75 form-container">
          <FormInput
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="Full Name"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-6.75">
            <FormInput
              id="email"
              label="Email Address"
              type="email"
              placeholder="Email Address"
              required
            />
            <FormInput
              id="phone"
              label="Phone Number"
              type="tel"
              placeholder="Phone Number"
              required
            />
            <FormInput
              id="company"
              label="Company"
              type="text"
              placeholder="Your Company"
              required
            />
            <FormInput
              id="jobTitle"
              label="Job Title"
              type="text"
              placeholder="Job Title"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-[0.75rem] md:text-[0.875rem] leading-normal tracking-[0.14em] font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Describe your needs"
              rows={7}
              className="border rounded-[5px] bg-white/9 p-3 placeholder:text-white/46 placeholder:text-[0.75rem] placeholder:md:text-[0.875rem] placeholder:leading-normal placeholder:tracking-[0.015em]"
            />
          </div>

          <button
            type="submit"
            className="w-full text-[#14293E] text-[0.75rem] md:text-[0.875rem] leading-normal tracking-[0.015em] border rounded-[5px] bg-white px-3 py-[14.5px] hover:bg-white/90 transition-colors mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
