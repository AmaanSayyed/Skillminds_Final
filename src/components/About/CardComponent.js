const CardComponent = ({ title, content, image, isReversed }) => {
    return (
        <div className={`tw-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] tw-rounded-md tw-flex tw-flex-col ${isReversed ? 'sm:tw-flex-row-reverse' : 'sm:tw-flex-row'} tw-gap-12 tw-w-full sm:tw-w-3/4 tw-items-center tw-p-8`}>
          <div className="img tw-w-full sm:tw-w-1/2 tw-flex tw-justify-center">
            <img src={image} alt={title} className="tw-w-64 tw-h-72 sm:tw-w-96 sm:tw-h-96 tw-rounded-full tw-object-cover tw-shadow-md tw-px-2 tw-py-2 tw-bg-gray-300" />
          </div>
          <div className="tw-relative content tw-w-full sm:tw-w-1/2">
            <h2 className="tw-text-3xl tw-text-blue-500 tw-font-semibold tw-mb-4">{title}</h2>
            <p className="tw-text-lg tw-text-gray-800 tw-font-medium tw-leading-relaxed tw-text-justify tw-indent-12" dangerouslySetInnerHTML={{__html:content}}></p>
            <blockquotes>
              <img src="/assets/img/blockquote.svg" className='tw-absolute tw-top-10 tw-z-30 tw-left-0 tw-w-10 tw-h-10' alt="quote" />
              <img src="/assets/img/blockquote.svg" className={`tw-rotate-180 tw-absolute tw-z-30 tw-w-10 tw-h-10 tw-bottom-4 tw-right-0 ${isReversed ? 'sm:tw-bottom-4 sm:tw-left-24' : 'sm:tw-right-20 sm:tw-bottom-4'} `} alt="quote" />
            </blockquotes>
          </div>
        </div>
      );
}
 
export default CardComponent;