import React from 'react'
import Image from 'next/image'
import hero from './assets/html.2ba4fabc69a89a8f71e6.png'
import hero2 from './assets/javascript.1ccd6ef9bb1f9c84ef00.png'
import hero3 from './assets/react.0cf951a69d8e58f83f9d.png'
import hero4 from './assets/css.69a82c2d9e45c933a9cb.png'
import hero5 from './assets/nextjs.48ddc8121a0fcb543d64.png'
import hero6 from './assets/github.3b9e32903aa89111875d.png'
import hero7 from './assets/graphql.fc6b9451733c620ceb86.png'
import hero8 from './assets/tailwind.e47ac876b8d4d0bba47a.png'
import imgte from './assets/Group 129.png'
import java from './assets/javaa.png'
import net from './assets/net.png'
import py from './assets/pythn.jpeg'
import vp from './assets/vps.png'
import aws from './assets/aws.jpeg'
import './style.scss'

const Tech2 = () => {
  return (
    <>
      <div className='w-full visio-bg py-20'>
        <div className='techstack w-full relative  bgyan-800 rounded-[35px_2px] my10 max-w-7xl mx-auto'>
          <div className='max-w-7xl mx-auto max-md:hidden'>
            <div className='flex flex-col self-end mt-10 max-md:mt-10 max-md:max-w-full'>
              <div className='servidc mb-20'>
                <h3 className='self-start text-[#062B43] text-xl font-bold leading-[51.2px]'>
                  <span className='text-[#D79442]'>|</span> Technologies
                </h3>
                <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
                  Technology we serve
                </h1>
              </div>
            </div>

            <div className='max-w-7xl overflowhidden'>
              <div className='w[250%] flex max-md:flex-wrap'>
                {/* <div> */}
                {/* </div>  */}
                <div className='w-full justify-center items-start max-sm:w-[100%] flex max-md:flex-wrap rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech'>
                  <div className='w-full justify-center items-center max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech max-md:flex-row max-md:flex-wrap'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>HTML</p>
                    </div>
                    <div className='w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno '>
                      <Image
                        src={hero4}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>CSS</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero2}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>JavaScript</p>
                    </div>
                  </div>

                  <div className='w-full justify-center items-center max-md:flex-wrap max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech mt-28 max-md:flex-row max-md:mt-8'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero3}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>React</p>
                    </div>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero8}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>Tailwind</p>
                    </div>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero5}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>Next JS</p>
                    </div>
                  </div>
                  <div className='w-full justify-center items-center max-md:flex-wrap max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech max-md:flex-row'>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero7}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>GraphQL</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        className='w-20 mx-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='#000000'
                      >
                        <path d='M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.262.82-.58 0-.288-.012-1.05-.015-2.06-3.338.724-4.042-1.498-4.042-1.498-.546-1.386-1.334-1.755-1.334-1.755-1.09-.744.083-.728.083-.728 1.205.086 1.838 1.24 1.838 1.24 1.07 1.835 2.808 1.305 3.495.998.108-.776.42-1.306.763-1.605-2.67-.3-5.473-1.336-5.473-5.93 0-1.31.465-2.383 1.235-3.224-.125-.3-.54-1.526.118-3.18 0 0 1.008-.322 3.3 1.23a11.573 11.573 0 0 1 3-.402 11.573 11.573 0 0 1 3 .402c2.29-1.552 3.297-1.23 3.297-1.23.66 1.654.244 2.88.12 3.18.77.84 1.234 1.914 1.234 3.224 0 4.607-2.808 5.625-5.484 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.29 0 .322.215.695.825.577C20.566 21.795 24 17.296 24 12c0-6.63-5.37-12-12-12z' />
                      </svg>

                      <p className='mt-4'>GitHub</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#4479A1'
                        className='w-20 mx-auto'
                      >
                        <path d='M12.174 0C18.894 0 24 2.975 24 5.852c0 2.877-5.106 5.852-11.826 5.852C5.094 11.704 0 8.729 0 5.852 0 2.975 5.094 0 12.174 0zm0 9.54c5.107 0 8.658-1.937 8.658-3.688 0-1.75-3.55-3.688-8.658-3.688-5.106 0-8.658 1.937-8.658 3.688 0 1.75 3.552 3.688 8.658 3.688zm0 11.384c5.107 0 8.658-1.937 8.658-3.688 0-1.75-3.55-3.688-8.658-3.688-5.106 0-8.658 1.937-8.658 3.688 0 1.75 3.552 3.688 8.658 3.688zM.696 12.447h2.608c.398 3.012 2.5 5.58 5.47 7.17-4.397-1.408-7.474-4.183-8.078-7.17zm17.452 7.17c2.97-1.59 5.072-4.158 5.47-7.17h2.608c-.604 2.987-3.682 5.762-8.078 7.17z' />
                      </svg>

                      <p className='mt-4'>SQL</p>
                    </div>
                  </div>
                  <div className='w-full justify-center items-center max-md:flex-wrap max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech mt-28 max-md:flex-row'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={java}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>Java</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={py}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>Python</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={net}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>DotNet</p>
                    </div>
                  </div>

                  <div className='w-full justify-center items-center max-md:flex-wrap max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech max-md:flex-row max-md:mt-8'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={aws}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>AWS</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={vp}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>VPS</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        width='70'
                        height='71'
                        viewBox='0 0 70 71'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-full'
                      >
                        <path
                          d='M34.9999 66.4579C34.1736 66.4583 33.3617 66.241 32.6461 65.8279L25.1561 61.3938C24.0383 60.7682 24.583 60.5473 24.9527 60.4182C26.1418 60.0515 27.2801 59.5371 28.3411 58.8869C28.4298 58.8452 28.5278 58.8271 28.6255 58.8344C28.7232 58.8417 28.8174 58.8741 28.8989 58.9285L34.6543 62.3476C34.7614 62.4043 34.8808 62.4339 35.0021 62.4339C35.1233 62.4339 35.2427 62.4043 35.3499 62.3476L57.7936 49.3932C57.8991 49.3308 57.9863 49.2418 58.0466 49.135C58.1069 49.0283 58.1381 48.9076 58.1371 48.7851V22.872C58.1374 22.7475 58.1055 22.6252 58.0445 22.5167C57.9836 22.4082 57.8957 22.3174 57.7893 22.2529L35.3455 9.30945C35.2399 9.24923 35.1204 9.21755 34.9988 9.21755C34.8772 9.21755 34.7577 9.24923 34.6521 9.30945L12.2214 22.2573C12.1144 22.3205 12.0256 22.4104 11.9635 22.5181C11.9014 22.6258 11.8682 22.7477 11.8671 22.872V48.7741C11.8685 48.8961 11.9017 49.0155 11.9635 49.1206C12.0253 49.2258 12.1134 49.3129 12.2193 49.3735L18.3749 52.926C21.7108 54.5929 23.7539 52.6285 23.7539 50.6554V25.0813C23.7539 24.9073 23.8231 24.7404 23.9462 24.6173C24.0692 24.4942 24.2361 24.4251 24.4102 24.4251H27.2539C27.428 24.4251 27.5949 24.4942 27.718 24.6173C27.8411 24.7404 27.9102 24.9073 27.9102 25.0813V50.6576C27.9102 55.1091 25.4864 57.6576 21.2646 57.6576C19.4434 57.688 17.6509 57.201 16.0955 56.2532L10.1958 52.8691C9.48019 52.4514 8.88639 51.8536 8.47346 51.1352C8.06053 50.4168 7.84285 49.6028 7.84206 48.7741V22.872C7.83949 22.0418 8.05569 21.2256 8.4689 20.5055C8.88211 19.7855 9.47774 19.187 10.1958 18.7704L32.6418 5.81164C33.365 5.41684 34.1759 5.20996 34.9999 5.20996C35.8239 5.20996 36.6347 5.41684 37.358 5.81164L59.8018 18.7704C60.5171 19.1875 61.111 19.7845 61.5243 20.5021C61.9376 21.2197 62.1559 22.0329 62.1577 22.861V48.7741C62.1567 49.603 61.9387 50.4171 61.5253 51.1355C61.112 51.854 60.5178 52.4517 59.8018 52.8691L37.358 65.8279C36.6411 66.2418 35.8277 66.4591 34.9999 66.4579Z'
                          fill='#83CD29'
                        />
                        <path
                          d='M30.7432 40.1054C30.7432 39.9313 30.8123 39.7644 30.9354 39.6414C31.0584 39.5183 31.2254 39.4491 31.3994 39.4491H34.3022C34.4573 39.4496 34.6072 39.5051 34.7254 39.6056C34.8435 39.7061 34.9222 39.8452 34.9475 39.9982C35.385 42.9535 36.6975 44.4432 42.6322 44.4432C47.3594 44.4432 49.3741 43.3735 49.3741 40.8645C49.3741 39.4185 48.8032 38.3445 41.4554 37.6248C35.3129 37.0166 31.5154 35.656 31.5154 30.7473C31.5154 26.2191 35.3325 23.5176 41.731 23.5176C48.9213 23.5176 52.4804 26.0135 52.931 31.3685C52.9379 31.4579 52.9263 31.5478 52.8972 31.6326C52.868 31.7173 52.8217 31.7952 52.7612 31.8615C52.7008 31.9277 52.6274 31.9808 52.5456 32.0175C52.4638 32.0543 52.3753 32.0738 52.2857 32.0751H49.3632C49.2166 32.073 49.0749 32.0219 48.9607 31.9299C48.8465 31.838 48.7664 31.7104 48.7332 31.5676C48.0354 28.4591 46.3269 27.466 41.7332 27.466C36.5707 27.466 35.9713 29.2641 35.9713 30.6116C35.9713 32.2435 36.68 32.7204 43.6494 33.6413C50.5466 34.5535 53.8235 35.8441 53.8235 40.6916C53.8235 45.5829 49.746 48.3829 42.6344 48.3829C32.8016 48.396 30.7432 43.8876 30.7432 40.1054Z'
                          fill='#83CD29'
                        />
                      </svg>
                      <p className='mt-4'>Node JS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='max-w-7xl mx-auto hidden max-md:block'>
            <div className='flex flex-col self-end mt-10 max-md:mt-10 max-md:max-w-full'>
              <div className='servidc mb-20'>
                <h3 className='self-start text-[#062B43] text-xl font-bold leading-[51.2px]'>
                  <span className='text-[#D79442]'>|</span> Technologies
                </h3>
                <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
                  Technology we serve
                </h1>
              </div>
            </div>

            <div className='max-w-7xl overflowhidden'>
              <div className='w[250%] flex max-md:flex-wrap'>
                <div className='w-full justify-center items-start max-sm:w-[100%] flex max-md:flex-wrap rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech'>
                  <div className='w-full justify-center items-center max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech max-md:flex-row max-md:flex-wrap'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>HTML</p>
                    </div>
                    <div className='w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno '>
                      <Image
                        src={hero4}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>CSS</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero2}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>JavaScript</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero3}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>React</p>
                    </div>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero8}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>Tailwind</p>
                    </div>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero5}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>Next JS</p>
                    </div>

                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={vp}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>VPS</p>
                    </div>
                  </div>

                  <div className='w-full justify-center items-center max-md:flex-wrap max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech max-md:flex-row'>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero7}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>GraphQL</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        className='w-20 mx-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='#000000'
                      >
                        <path d='M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.262.82-.58 0-.288-.012-1.05-.015-2.06-3.338.724-4.042-1.498-4.042-1.498-.546-1.386-1.334-1.755-1.334-1.755-1.09-.744.083-.728.083-.728 1.205.086 1.838 1.24 1.838 1.24 1.07 1.835 2.808 1.305 3.495.998.108-.776.42-1.306.763-1.605-2.67-.3-5.473-1.336-5.473-5.93 0-1.31.465-2.383 1.235-3.224-.125-.3-.54-1.526.118-3.18 0 0 1.008-.322 3.3 1.23a11.573 11.573 0 0 1 3-.402 11.573 11.573 0 0 1 3 .402c2.29-1.552 3.297-1.23 3.297-1.23.66 1.654.244 2.88.12 3.18.77.84 1.234 1.914 1.234 3.224 0 4.607-2.808 5.625-5.484 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.29 0 .322.215.695.825.577C20.566 21.795 24 17.296 24 12c0-6.63-5.37-12-12-12z' />
                      </svg>

                      <p className='mt-4'>GitHub</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#4479A1'
                        className='w-20 mx-auto'
                      >
                        <path d='M12.174 0C18.894 0 24 2.975 24 5.852c0 2.877-5.106 5.852-11.826 5.852C5.094 11.704 0 8.729 0 5.852 0 2.975 5.094 0 12.174 0zm0 9.54c5.107 0 8.658-1.937 8.658-3.688 0-1.75-3.55-3.688-8.658-3.688-5.106 0-8.658 1.937-8.658 3.688 0 1.75 3.552 3.688 8.658 3.688zm0 11.384c5.107 0 8.658-1.937 8.658-3.688 0-1.75-3.55-3.688-8.658-3.688-5.106 0-8.658 1.937-8.658 3.688 0 1.75 3.552 3.688 8.658 3.688zM.696 12.447h2.608c.398 3.012 2.5 5.58 5.47 7.17-4.397-1.408-7.474-4.183-8.078-7.17zm17.452 7.17c2.97-1.59 5.072-4.158 5.47-7.17h2.608c-.604 2.987-3.682 5.762-8.078 7.17z' />
                      </svg>

                      <p className='mt-4'>SQL</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={java}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>Java</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={py}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>Python</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={net}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>DotNet</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={aws}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>AWS</p>
                    </div>

                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        width='70'
                        height='71'
                        viewBox='0 0 70 71'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-full'
                      >
                        <path
                          d='M34.9999 66.4579C34.1736 66.4583 33.3617 66.241 32.6461 65.8279L25.1561 61.3938C24.0383 60.7682 24.583 60.5473 24.9527 60.4182C26.1418 60.0515 27.2801 59.5371 28.3411 58.8869C28.4298 58.8452 28.5278 58.8271 28.6255 58.8344C28.7232 58.8417 28.8174 58.8741 28.8989 58.9285L34.6543 62.3476C34.7614 62.4043 34.8808 62.4339 35.0021 62.4339C35.1233 62.4339 35.2427 62.4043 35.3499 62.3476L57.7936 49.3932C57.8991 49.3308 57.9863 49.2418 58.0466 49.135C58.1069 49.0283 58.1381 48.9076 58.1371 48.7851V22.872C58.1374 22.7475 58.1055 22.6252 58.0445 22.5167C57.9836 22.4082 57.8957 22.3174 57.7893 22.2529L35.3455 9.30945C35.2399 9.24923 35.1204 9.21755 34.9988 9.21755C34.8772 9.21755 34.7577 9.24923 34.6521 9.30945L12.2214 22.2573C12.1144 22.3205 12.0256 22.4104 11.9635 22.5181C11.9014 22.6258 11.8682 22.7477 11.8671 22.872V48.7741C11.8685 48.8961 11.9017 49.0155 11.9635 49.1206C12.0253 49.2258 12.1134 49.3129 12.2193 49.3735L18.3749 52.926C21.7108 54.5929 23.7539 52.6285 23.7539 50.6554V25.0813C23.7539 24.9073 23.8231 24.7404 23.9462 24.6173C24.0692 24.4942 24.2361 24.4251 24.4102 24.4251H27.2539C27.428 24.4251 27.5949 24.4942 27.718 24.6173C27.8411 24.7404 27.9102 24.9073 27.9102 25.0813V50.6576C27.9102 55.1091 25.4864 57.6576 21.2646 57.6576C19.4434 57.688 17.6509 57.201 16.0955 56.2532L10.1958 52.8691C9.48019 52.4514 8.88639 51.8536 8.47346 51.1352C8.06053 50.4168 7.84285 49.6028 7.84206 48.7741V22.872C7.83949 22.0418 8.05569 21.2256 8.4689 20.5055C8.88211 19.7855 9.47774 19.187 10.1958 18.7704L32.6418 5.81164C33.365 5.41684 34.1759 5.20996 34.9999 5.20996C35.8239 5.20996 36.6347 5.41684 37.358 5.81164L59.8018 18.7704C60.5171 19.1875 61.111 19.7845 61.5243 20.5021C61.9376 21.2197 62.1559 22.0329 62.1577 22.861V48.7741C62.1567 49.603 61.9387 50.4171 61.5253 51.1355C61.112 51.854 60.5178 52.4517 59.8018 52.8691L37.358 65.8279C36.6411 66.2418 35.8277 66.4591 34.9999 66.4579Z'
                          fill='#83CD29'
                        />
                        <path
                          d='M30.7432 40.1054C30.7432 39.9313 30.8123 39.7644 30.9354 39.6414C31.0584 39.5183 31.2254 39.4491 31.3994 39.4491H34.3022C34.4573 39.4496 34.6072 39.5051 34.7254 39.6056C34.8435 39.7061 34.9222 39.8452 34.9475 39.9982C35.385 42.9535 36.6975 44.4432 42.6322 44.4432C47.3594 44.4432 49.3741 43.3735 49.3741 40.8645C49.3741 39.4185 48.8032 38.3445 41.4554 37.6248C35.3129 37.0166 31.5154 35.656 31.5154 30.7473C31.5154 26.2191 35.3325 23.5176 41.731 23.5176C48.9213 23.5176 52.4804 26.0135 52.931 31.3685C52.9379 31.4579 52.9263 31.5478 52.8972 31.6326C52.868 31.7173 52.8217 31.7952 52.7612 31.8615C52.7008 31.9277 52.6274 31.9808 52.5456 32.0175C52.4638 32.0543 52.3753 32.0738 52.2857 32.0751H49.3632C49.2166 32.073 49.0749 32.0219 48.9607 31.9299C48.8465 31.838 48.7664 31.7104 48.7332 31.5676C48.0354 28.4591 46.3269 27.466 41.7332 27.466C36.5707 27.466 35.9713 29.2641 35.9713 30.6116C35.9713 32.2435 36.68 32.7204 43.6494 33.6413C50.5466 34.5535 53.8235 35.8441 53.8235 40.6916C53.8235 45.5829 49.746 48.3829 42.6344 48.3829C32.8016 48.396 30.7432 43.8876 30.7432 40.1054Z'
                          fill='#83CD29'
                        />
                      </svg>
                      <p className='mt-4'>Node JS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tech2
