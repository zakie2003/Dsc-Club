type Props = {
    title: string;
    image: string;
    content: string;
    link: string;
  };
  
  const Past_Events = ({ title, image, content, link }: Props) => {
    return (
      <div className="max-w-sm border feature-card rounded-lg shadow bg-primary border-gray-700">
        <a href={link} rel="noreferrer" target="_blank">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5 flex flex-col justify-between items-center">
          <a href={link} rel="noreferrer" target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">{content}</p>
          <a
            
            rel="noreferrer"
            
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-600 hover:bg-red-700 focus:ring-blue-800"
          >
            Event Over
            {/* <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
          </a>
        </div>
      </div>
    );
  };
  
  export default Past_Events;
  