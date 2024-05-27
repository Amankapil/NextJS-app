import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './train.scss'
// import Link from "next/link";
// import hero from './assets/prime.png'

const Choose = () => {
  return (
    <section className='w-full py12 bggryy h-[735px] relative overflow-hidden max-md:h-full'>
      <div className='w-full max-w-[1300px] mx-auto '>
        <div className="w-4px] text-400 text-white   font-normal font['Graphik'] max-md:text-[50px] max-md:leading-[54px]  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-start items-start h-[500px] flex-col max-md:h-full">
          <div className='servidc mt-12 w-1/2 max-lg:w-full max-md:p-4 '>
            <h3 className='self-start text-left text-[#062B43] text-xl font-bold leading-[51.2px]'>
              Why Choose us
            </h3>
            <h1 className='self-start text-left text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
              Dive into Online Courses on diverse subject.
            </h1>
          </div>

          <div className='flex flex-wrap mt-10 items-center justify-center gap-10 max-md:h-full'>
            <div className='card-0 max-w-[629px] h-[153px] flex gap-4 items-start shadow-md p-4 rounded-[30px] max-md:h-full'>
              <div className='iconnn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='84'
                  height='83'
                  viewBox='0 0 84 83'
                  fill='none'
                >
                  <g filter='url(#filter0_d_345_209)'>
                    <rect
                      x='14.5'
                      y='4'
                      width='55'
                      height='55'
                      rx='14.8253'
                      fill='#D79442'
                      shape-rendering='crispEdges'
                    />
                    <g clip-path='url(#clip0_345_209)'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M48.5304 18.3004C48.633 18.1355 48.7822 18.0048 48.9592 17.9248C49.1361 17.8447 49.3327 17.8189 49.5243 17.8506L54.5745 18.6932C54.8313 18.7361 55.0605 18.8791 55.2119 19.0909C55.3633 19.3027 55.4244 19.5659 55.3818 19.8227L54.5411 24.8749C54.509 25.0664 54.4209 25.2441 54.2878 25.3855C54.1548 25.5269 53.9828 25.6258 53.7936 25.6695C53.6044 25.7132 53.4065 25.6999 53.2249 25.6312C53.0433 25.5624 52.8861 25.4414 52.7733 25.2834L51.41 23.3781L44.3897 27.8645C44.0903 28.0561 43.7318 28.1329 43.3802 28.081C43.0286 28.029 42.7076 27.8516 42.4765 27.5816L38.5617 23.0048L31.2408 26.7665C30.8933 26.9451 30.4891 26.9785 30.117 26.8591C29.7449 26.7398 29.4355 26.4775 29.2568 26.13C29.0781 25.7825 29.0448 25.3783 29.1642 25.0063C29.2835 24.6342 29.5458 24.3248 29.8933 24.1461L38.2513 19.8502C38.5464 19.6986 38.884 19.651 39.2095 19.7152C39.5349 19.7794 39.8292 19.9515 40.0447 20.2038L43.8829 24.6922L49.6972 20.9757L48.5638 19.3906C48.4511 19.2325 48.3878 19.0446 48.3819 18.8505C48.3759 18.6565 48.4276 18.4651 48.5304 18.3004ZM35.6722 27.945L29.9718 31.2057C29.7466 31.3344 29.5594 31.5202 29.429 31.7444C29.2986 31.9686 29.2298 32.2232 29.2293 32.4825V43.7772C29.2293 44.5904 29.8893 45.2504 30.7026 45.2504H35.6722V27.945ZM38.1275 45.2504H45.3325V31.8697L42.0934 33.4883L38.8563 27.8232C38.6928 27.5351 38.4367 27.3108 38.1295 27.1868L38.1275 45.2504ZM53.2918 45.2504H47.7879V30.642L52.6338 28.2181C52.8584 28.1059 53.1079 28.0531 53.3587 28.0645C53.6095 28.0759 53.8532 28.1511 54.0667 28.2832C54.2802 28.4152 54.4564 28.5996 54.5787 28.8189C54.7009 29.0382 54.765 29.2851 54.765 29.5361V43.7772C54.765 44.1679 54.6098 44.5426 54.3335 44.8189C54.0573 45.0952 53.6825 45.2504 53.2918 45.2504Z'
                        fill='white'
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_345_209'
                      x='0.5'
                      y='0'
                      width='83'
                      height='83'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='10' />
                      <feGaussianBlur stdDeviation='7' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.991667 0 0 0 0 0.902417 0 0 0 0 0.902417 0 0 0 1 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_345_209'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_345_209'
                        result='shape'
                      />
                    </filter>
                    <clipPath id='clip0_345_209'>
                      <rect
                        width='27.5'
                        height='27.5'
                        fill='white'
                        transform='translate(28.25 17.75)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='riht'>
                <h1 className='text-[#175574] text-[22px] text-left font-semibold  leading-[26px]'>
                  Progress Tracking and Certifications
                </h1>
                <p className='text-[#175574] text-[20px] leading-[26px] text-left'>
                  Provide features to track user progress, such as completion
                  percentage module wise performance achievements.
                </p>
              </div>
            </div>
            <div className='card-0 max-w-[629px] h-[153px] flex gap-4 items-start shadow-md p-4 rounded-[30px] max-md:h-full'>
              <div className='iconnn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='84'
                  height='83'
                  viewBox='0 0 84 83'
                  fill='none'
                >
                  <g filter='url(#filter0_d_345_216)'>
                    <rect
                      x='14.5'
                      y='4'
                      width='55'
                      height='55'
                      rx='14.8253'
                      fill='#062B43'
                      shape-rendering='crispEdges'
                    />
                    <path
                      d='M31.793 21.2917C31.793 19.6875 33.1055 18.375 34.7097 18.375H44.918C44.0317 19.5586 43.526 20.9836 43.468 22.4612C43.41 23.9387 43.8024 25.399 44.5932 26.6485C45.384 27.898 46.5358 28.8776 47.896 29.4575C49.2563 30.0375 50.7606 30.1903 52.2097 29.8958V42.4083C52.2097 43.4583 51.1451 44.1583 50.1826 43.75L42.0013 40.25L33.8201 43.75C33.5986 43.8462 33.3565 43.8856 33.116 43.8645C32.8754 43.8434 32.6439 43.7625 32.4425 43.6292C32.2411 43.4959 32.0762 43.3144 31.9628 43.1012C31.8494 42.888 31.791 42.6498 31.793 42.4083V21.2917ZM56.6868 18.8708C57.2555 19.4396 57.2555 20.3583 56.6868 20.9271L51.5243 26.0896C51.3893 26.2248 51.2291 26.332 51.0527 26.4052C50.8763 26.4784 50.6871 26.5161 50.4961 26.5161C50.3051 26.5161 50.116 26.4784 49.9396 26.4052C49.7632 26.332 49.6029 26.2248 49.468 26.0896L47.4118 24.0333C47.2767 23.8983 47.1696 23.738 47.0966 23.5616C47.0235 23.3852 46.9859 23.1961 46.9859 23.0052C46.9859 22.8143 47.0235 22.6252 47.0966 22.4488C47.1696 22.2724 47.2767 22.1121 47.4118 21.9771C47.5468 21.8421 47.7071 21.735 47.8835 21.6619C48.0599 21.5888 48.2489 21.5512 48.4399 21.5512C48.6308 21.5512 48.8199 21.5888 48.9963 21.6619C49.1727 21.735 49.333 21.8421 49.468 21.9771L50.5034 23.0125L54.6305 18.8854C55.1993 18.3021 56.118 18.3021 56.6868 18.8708Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_345_216'
                      x='0.5'
                      y='0'
                      width='83'
                      height='83'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='10' />
                      <feGaussianBlur stdDeviation='7' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.991667 0 0 0 0 0.902417 0 0 0 0 0.902417 0 0 0 1 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_345_216'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_345_216'
                        result='shape'
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className='riht'>
                <h1 className='text-[#175574] text-[22px] text-left font-semibold  leading-[26px]'>
                  Accessibility and Convenience.
                </h1>
                <p className='text-[#175574] text-[20px] leading-[26px] text-left'>
                  Provide the flexibility to learn anytime, anywhere, making
                  education accessible to a wider audience.
                </p>
              </div>
            </div>
            <div className='card-0 max-w-[629px] h-[153px] flex gap-4 items-start shadow-md p-4 rounded-[30px] max-md:h-full'>
              <div className='iconnn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='84'
                  height='83'
                  viewBox='0 0 84 83'
                  fill='none'
                >
                  <g filter='url(#filter0_d_345_223)'>
                    <rect
                      x='14.5'
                      y='4'
                      width='55'
                      height='55'
                      rx='14.8253'
                      fill='#175574'
                      shape-rendering='crispEdges'
                    />
                    <g clip-path='url(#clip0_345_223)'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M52.2716 21.887C52.2712 21.5164 52.1611 21.1542 51.9551 20.8462C51.749 20.5382 51.4563 20.2981 51.1139 20.1563C50.7715 20.0145 50.3947 19.9774 50.0312 20.0496C49.6677 20.1218 49.3338 20.3001 49.0716 20.562L44.2866 25.3445C43.9755 25.6473 43.7794 26.0488 43.7319 26.4803C43.6845 26.9118 43.7887 27.3464 44.0266 27.7095C44.1972 27.9709 44.4304 28.1855 44.705 28.334C44.9796 28.4824 45.2869 28.5599 45.5991 28.5595H50.3891L50.4316 28.562C50.732 28.5697 51.0321 28.5864 51.3316 28.612C51.9391 28.662 52.4266 28.737 52.6241 28.8095C53.6113 29.1651 54.4522 29.8392 55.0139 30.7255C55.5757 31.6118 55.8264 32.6599 55.7266 33.7045C55.7151 33.8234 55.7151 33.9431 55.7266 34.062C55.7927 34.7549 55.7049 35.4538 55.4694 36.1088C55.234 36.7638 54.8568 37.3587 54.3648 37.8509C53.8728 38.3432 53.2781 38.7207 52.6232 38.9564C51.9683 39.1921 51.2695 39.2803 50.5766 39.2145C50.5167 39.2091 50.4567 39.2066 50.3966 39.207C49.4716 39.207 48.4616 38.707 47.2341 37.497C46.0066 36.287 44.8291 34.637 43.5291 32.7995L43.4741 32.7195C42.2391 30.9795 40.8841 29.067 39.3991 27.5995C37.9091 26.132 36.0241 24.8445 33.6941 24.812C32.4717 24.7073 31.2412 24.8692 30.0876 25.2867C28.934 25.7041 27.8848 26.3671 27.0125 27.2299C26.1403 28.0926 25.4658 29.1345 25.0357 30.2834C24.6056 31.4324 24.4302 32.6611 24.5216 33.8845C24.4307 35.109 24.6071 36.3386 25.0383 37.4883C25.4696 38.6379 26.1455 39.6801 27.0193 40.5427C27.8931 41.4053 28.9439 42.0678 30.099 42.4842C31.2541 42.9006 32.4859 43.0611 33.7091 42.9545C35.4418 42.9067 37.1055 42.265 38.4216 41.137C38.6104 40.9774 38.7659 40.782 38.8789 40.562C38.9919 40.3421 39.0603 40.1019 39.0802 39.8554C39.1 39.6089 39.0709 39.3609 38.9945 39.1257C38.9181 38.8905 38.7959 38.6728 38.635 38.485C38.4741 38.2972 38.2776 38.1431 38.0569 38.0316C37.8362 37.92 37.5956 37.8533 37.349 37.8351C37.1023 37.8169 36.8545 37.8477 36.6199 37.9257C36.3852 38.0037 36.1683 38.1273 35.9816 38.2895C35.3066 38.8645 34.4566 39.1895 33.5691 39.207C33.5207 39.2075 33.4723 39.21 33.4241 39.2145C32.7312 39.2806 32.0323 39.1928 31.3773 38.9574C30.7223 38.722 30.1274 38.3448 29.6352 37.8528C29.1429 37.3607 28.7654 36.766 28.5297 36.1111C28.294 35.4563 28.2058 34.7574 28.2716 34.0645C28.2831 33.9448 28.2831 33.8242 28.2716 33.7045C28.2059 33.0119 28.294 32.3132 28.5296 31.6586C28.7651 31.0039 29.1424 30.4093 29.6344 29.9173C30.1264 29.4254 30.7209 29.0481 31.3756 28.8125C32.0303 28.5769 32.7289 28.4888 33.4216 28.5545C33.4814 28.5599 33.5415 28.5624 33.6016 28.562C34.5266 28.562 35.5366 29.0595 36.7641 30.2695C37.9916 31.4795 39.1691 33.132 40.4691 34.9695L40.5241 35.0445C41.7591 36.7895 43.1141 38.6995 44.5991 40.167C46.0891 41.6345 47.9741 42.922 50.3041 42.9545C51.5261 43.0588 52.7562 42.8966 53.9094 42.4791C55.0627 42.0617 56.1116 41.3989 56.9837 40.5365C57.8558 39.6742 58.5303 38.6328 58.9607 37.4843C59.3911 36.3358 59.5671 35.1076 59.4766 33.8845C59.615 32.0368 59.1438 30.1946 58.135 28.6403C57.1262 27.0861 55.6356 25.9055 53.8916 25.2795C53.3654 25.1078 52.8223 24.993 52.2716 24.937V21.887Z'
                        fill='white'
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_345_223'
                      x='0.5'
                      y='0'
                      width='83'
                      height='83'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='10' />
                      <feGaussianBlur stdDeviation='7' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.991667 0 0 0 0 0.902417 0 0 0 0 0.902417 0 0 0 1 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_345_223'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_345_223'
                        result='shape'
                      />
                    </filter>
                    <clipPath id='clip0_345_223'>
                      <rect
                        width='35.0022'
                        height='34.9728'
                        fill='white'
                        transform='translate(24.498 14.0137)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='riht'>
                <h1 className='text-[#175574] text-[22px] text-left font-semibold  leading-[26px]'>
                  Diverse Course Selection.
                </h1>
                <p className='text-[#175574] text-[20px] leading-[26px] text-left'>
                  Offer a vast range of subjects and topics to choose from
                  allowing users to explore their interests, acquire new skills.
                </p>
              </div>
            </div>
            <div className='card-0 max-w-[629px] h-[153px] flex gap-4 items-start shadow-md p-4 rounded-[30px] max-md:h-full'>
              <div className='iconnn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='84'
                  height='83'
                  viewBox='0 0 84 83'
                  fill='none'
                >
                  <g filter='url(#filter0_d_345_230)'>
                    <rect
                      x='14.5'
                      y='4'
                      width='55'
                      height='55'
                      rx='14.8253'
                      fill='#ABE0F8'
                      shape-rendering='crispEdges'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M35.0656 16.9167H48.9344C50.6246 16.9167 51.469 16.9167 52.1515 17.1545C52.795 17.3825 53.3772 17.7559 53.853 18.2456C54.3287 18.7352 54.6852 19.328 54.8946 19.9778C55.125 20.6807 55.125 21.5499 55.125 23.2897V43.7122C55.125 44.9634 53.6885 45.6284 52.78 44.7972C52.5251 44.5616 52.1908 44.4308 51.8438 44.4308C51.4967 44.4308 51.1624 44.5616 50.9075 44.7972L50.2031 45.4417C49.7566 45.8547 49.1707 46.084 48.5625 46.084C47.9543 46.084 47.3684 45.8547 46.9219 45.4417C46.4753 45.0288 45.8895 44.7994 45.2812 44.7994C44.673 44.7994 44.0872 45.0288 43.6406 45.4417C43.1941 45.8547 42.6082 46.084 42 46.084C41.3918 46.084 40.8059 45.8547 40.3594 45.4417C39.9128 45.0288 39.327 44.7994 38.7188 44.7994C38.1105 44.7994 37.5247 45.0288 37.0781 45.4417C36.6316 45.8547 36.0457 46.084 35.4375 46.084C34.8293 46.084 34.2434 45.8547 33.7969 45.4417L33.0925 44.7972C32.8376 44.5616 32.5033 44.4308 32.1562 44.4308C31.8092 44.4308 31.4749 44.5616 31.22 44.7972C30.3115 45.6284 28.875 44.9634 28.875 43.7122V23.2897C28.875 21.5499 28.875 20.6792 29.1054 19.9792C29.5429 18.6478 30.5565 17.6036 31.8485 17.1545C32.531 16.9167 33.3754 16.9167 35.0656 16.9167ZM34.7083 23.8438C34.4183 23.8438 34.1401 23.9591 33.9349 24.1642C33.7298 24.3693 33.6146 24.6475 33.6146 24.9376C33.6146 25.2277 33.7298 25.5059 33.9349 25.711C34.1401 25.9161 34.4183 26.0313 34.7083 26.0313H35.4375C35.7276 26.0313 36.0058 25.9161 36.2109 25.711C36.416 25.5059 36.5312 25.2277 36.5312 24.9376C36.5312 24.6475 36.416 24.3693 36.2109 24.1642C36.0058 23.9591 35.7276 23.8438 35.4375 23.8438H34.7083ZM39.8125 23.8438C39.5224 23.8438 39.2442 23.9591 39.0391 24.1642C38.834 24.3693 38.7188 24.6475 38.7188 24.9376C38.7188 25.2277 38.834 25.5059 39.0391 25.711C39.2442 25.9161 39.5224 26.0313 39.8125 26.0313H49.2917C49.5817 26.0313 49.8599 25.9161 50.0651 25.711C50.2702 25.5059 50.3854 25.2277 50.3854 24.9376C50.3854 24.6475 50.2702 24.3693 50.0651 24.1642C49.8599 23.9591 49.5817 23.8438 49.2917 23.8438H39.8125ZM34.7083 28.948C34.4183 28.948 34.1401 29.0632 33.9349 29.2683C33.7298 29.4735 33.6146 29.7517 33.6146 30.0417C33.6146 30.3318 33.7298 30.61 33.9349 30.8151C34.1401 31.0203 34.4183 31.1355 34.7083 31.1355H35.4375C35.7276 31.1355 36.0058 31.0203 36.2109 30.8151C36.416 30.61 36.5312 30.3318 36.5312 30.0417C36.5312 29.7517 36.416 29.4735 36.2109 29.2683C36.0058 29.0632 35.7276 28.948 35.4375 28.948H34.7083ZM39.8125 28.948C39.5224 28.948 39.2442 29.0632 39.0391 29.2683C38.834 29.4735 38.7188 29.7517 38.7188 30.0417C38.7188 30.3318 38.834 30.61 39.0391 30.8151C39.2442 31.0203 39.5224 31.1355 39.8125 31.1355H49.2917C49.5817 31.1355 49.8599 31.0203 50.0651 30.8151C50.2702 30.61 50.3854 30.3318 50.3854 30.0417C50.3854 29.7517 50.2702 29.4735 50.0651 29.2683C49.8599 29.0632 49.5817 28.948 49.2917 28.948H39.8125ZM34.7083 34.0522C34.4183 34.0522 34.1401 34.1674 33.9349 34.3725C33.7298 34.5776 33.6146 34.8558 33.6146 35.1459C33.6146 35.436 33.7298 35.7142 33.9349 35.9193C34.1401 36.1244 34.4183 36.2397 34.7083 36.2397H35.4375C35.7276 36.2397 36.0058 36.1244 36.2109 35.9193C36.416 35.7142 36.5312 35.436 36.5312 35.1459C36.5312 34.8558 36.416 34.5776 36.2109 34.3725C36.0058 34.1674 35.7276 34.0522 35.4375 34.0522H34.7083ZM39.8125 34.0522C39.5224 34.0522 39.2442 34.1674 39.0391 34.3725C38.834 34.5776 38.7188 34.8558 38.7188 35.1459C38.7188 35.436 38.834 35.7142 39.0391 35.9193C39.2442 36.1244 39.5224 36.2397 39.8125 36.2397H49.2917C49.5817 36.2397 49.8599 36.1244 50.0651 35.9193C50.2702 35.7142 50.3854 35.436 50.3854 35.1459C50.3854 34.8558 50.2702 34.5776 50.0651 34.3725C49.8599 34.1674 49.5817 34.0522 49.2917 34.0522H39.8125Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_345_230'
                      x='0.5'
                      y='0'
                      width='83'
                      height='83'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='10' />
                      <feGaussianBlur stdDeviation='7' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.991667 0 0 0 0 0.902417 0 0 0 0 0.902417 0 0 0 1 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_345_230'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_345_230'
                        result='shape'
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className='riht'>
                <h1 className='text-[#175574] text-[22px] text-left font-semibold  leading-[26px]'>
                  Interactive Learning Experience
                </h1>
                <p className='text-[#175574] text-[20px] leading-[26px] text-left'>
                  Attractive elements like you quizzes, exercises, and
                  discussion forums, and enhancing the learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
