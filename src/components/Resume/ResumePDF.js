import iqraPdf from '../../assets/data/IqraAslam.pdf';

const ResumePDF = () => (
  <div>
    <object aria-label="resume-pdF" data={iqraPdf} type="application/pdf" className="w-full pdf" />
    <button
      onClick={() => window.open('https://drive.google.com/file/d/1iicG8MdG3b8DdmR0sWD2jNgIGG7FhK3M/view?usp=drive_link', '_blank')}
      type="submit"
      className="px-4 py-3 mt-5 ml-2 text-lg font-medium rounded bg-lightBlueColor text-skyColor hover:bg-secondaryColor hover:text-primaryColor"
    >
      Download Resume
    </button>
  </div>
);

export default ResumePDF;
