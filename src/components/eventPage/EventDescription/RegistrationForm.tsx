import React from 'react';
import Button  from '@/common/Button';
import Dropdown from '@/common/Dropdown';
import LabelInput from '@/common/LabelInput/LabelInput';
import { useFormik } from 'formik';
import * as yup from 'yup';


const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      houseAddress: '',
      landmark: '',
      sex: '',
      maritalStatus: '',
      occupation: '',
      dateOfBirth: '',
      hearAboutUs: '',
      loading: false,
    },
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      formik.resetForm();
    },
    validationSchema: yup.object({
      fullName: yup.string().required('Required'),
      phoneNumber: yup.string().required('Required'),
      houseAddress: yup.string().required('Required'),
      landmark: yup.string().required('Required'),
      sex: yup.string().required('Required'),
      maritalStatus: yup.string().required('Required'),
      occupation: yup.string().required('Required'),
      dateOfBirth: yup.date().required('Required'),
      hearAboutUs: yup.string().required('Required'),
    }),
  });

  const sexOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  const hearAboutOptions = [
    { label: 'Social Media', value: 'socialMedia' },
    { label: 'Friend / Family Referral', value: 'friendReferral' },
    { label: 'Search Engine', value: 'searchEngine' },
    { label: 'Advertisement', value: 'advertisement' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <section className="mt-20 px-4">
      <h2
        className={`text-[#002F72] text-2xl font-bold text-center mb-8`}
      >
        Register for the event
      </h2>
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={formik.handleSubmit}
      >
        <LabelInput
          name="fullName"
          placeholder="Full Name"
          type="text"
          formik={formik}
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none"
        />
        <LabelInput
          name="phoneNumber"
          placeholder="Phone Number"
          type="tel"
          formik={formik}
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none"
        />
        <LabelInput
          name="houseAddress"
          placeholder="House Address"
          type="text"
          formik={formik}
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none"
        />
        <LabelInput
          name="landmark"
          placeholder="Landmark"
          type="text"
          formik={formik}
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none"
        />
        <Dropdown
          name="sex"
          label=""
          formik={formik}
          placeholder="Sex"
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] text-[#002F72] font-normal rounded outline-none"
          values={sexOptions}
          value={formik.values.sex}
          error={formik.errors.sex}
          showError={formik.touched.sex && Boolean(formik.errors.sex)}
          onChange={(value: string) => {
            formik.setFieldValue('sex', value);
            formik.setFieldTouched('sex', true);
          }}
        />
        <LabelInput
          name="maritalStatus"
          placeholder="Marital Status"
          type="text"
          formik={formik}
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none"
        />
        <LabelInput
          name="occupation"
          placeholder="Occupation"
          type="text"
          formik={formik}
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none"
        />
        <LabelInput
          name="dateOfBirth"
          placeholder="Date of Birth"
          type="date"
          formik={formik}
          className="w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none"
        />
        <Dropdown
          name="hearAboutUs"
          label=""
          formik={formik}
          placeholder="How did you hear about us?"
          className="w-full max-w-[500px] border border-[#0D57BE] text-[#002F72] font-normal rounded outline-none"
          values={hearAboutOptions}
          value={formik.values.hearAboutUs}
          error={formik.errors.hearAboutUs}
          showError={
            formik.touched.hearAboutUs && Boolean(formik.errors.hearAboutUs)
          }
          onChange={(value: string) => {
            formik.setFieldValue('hearAboutUs', value);
            formik.setFieldTouched('hearAboutUs', true);
          }}
        />
        <Button
          type="submit"
          className={`bg-[#FF6634] w-[313px] max-w-[500px] h-[60px] mt-4 rounded p-6 hover:bg-[#FF6634] text-base font-bold`}
          loading={formik.values.loading}
        >
          Submit
        </Button>
      </form>
      <div className="mt-20 flex flex-col md:flex-row gap-4 items-center justify-between">
        <Button
          aria-label="Previous Event"
        >
          Previous Event
        </Button>
        <Button
          aria-label="Next Event"
        >
          Next Event
        </Button>
      </div>
    </section>
  );
};

export default Registration;
