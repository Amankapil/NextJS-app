import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <header className='bg-gray-100 mt-20 py-4 max-w-6xl mx-auto'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex items-center justify-between'>
            <span className='text-[30px] font-bold text-gray-900 dark:text-gray-50'>
              Privacy Policy
            </span>
          </div>
        </div>
      </header>
      <main className=' my-12 px-4 md:px-6 max-w-6xl mx-auto'>
        <div className='grid gap-8 lg:grid-cols-[2fr_1fr]'>
          <div>
            <p className='text-gray-500 dark:text-gray-400 pb-10'>
              At Hiring Tech, we are committed to ensuring your privacy is
              protected. This Privacy Policy outlines how we collect, use, and
              protect your personal information when you use our website.
            </p>
            <section className='space-y-6'>
              <h1 className='text-3xl font-bold'>Information We Collect:</h1>
              <p className='text-gray-500 dark:text-gray-400 pb-10'>
                When you visit our website, we may collect certain information
                such as your IP address to analyse site usage and diagnose
                technical issues. If you register on our site, we may collect
                your name, email address, and demographic details to personalise
                your experience and communicate relevant information. When you
                engage with us through order forms, surveys, or contests, we may
                collect additional information like contact details and
                demographic data to improve our services and tailor content.
              </p>
            </section>
            <section className='space-y-6'>
              <h2 className='text-2xl font-bold'>
                How We Use Your Information:
              </h2>
              <p className='text-gray-500 dark:text-gray-400'>
                We use the information to provide personalized experiences on
                our website and send you relevant updates and promotional
                material. Your data helps us verify user identity, process
                orders, and analyze user preferences to improve our services.
              </p>
            </section>
            <section className='space-y-6 mt-10'>
              <h2 className='text-2xl font-bold'>Protection of Your Data:</h2>
              <p className='text-gray-500 dark:text-gray-400'>
                Hiring Tech takes security seriously and implements measures to
                safeguard your personal information. However, please be aware
                that no data transmission over the internet can be guaranteed to
                be completely secure.
              </p>
            </section>
            <section className='space-y-6 mt-10'>
              <h2 className='text-2xl font-bold'>Disclosure of Information:</h2>
              <p className='text-gray-500 dark:text-gray-400'>
                We do not disclose your personally identifiable information to
                unauthorized third parties, except as required by law or to
                protect our rights and property. Children's Privacy:
                <br />
                Hiring Tech does not knowingly collect personal information from
                children without parental consent. Your Choices:
              </p>
            </section>
            <section className='space-y-6 mt-10'>
              <h2 className='text-2xl font-bold'>Data Security</h2>
              <p className='text-gray-500 dark:text-gray-400'>
                We take reasonable measures to protect your personal information
                from unauthorized access, disclosure, or misuse. This includes
                using encryption, firewalls, and other security technologies to
                safeguard your data.
              </p>
            </section>
            <section className='space-y-6'>
              {/* <h2 className='text-2xl font-bold'>User Rights</h2> */}
              <br />
              <br />

              <p className=''>
                You have the option to opt-out of receiving promotional emails
                or newsletters from Hiring Tech. By using our website, you
                consent to the collection and use of your information as
                described in this Privacy Policy. If you have any questions or
                concerns about our privacy practices, please contact us at
                <Link
                  href='mailto:career@hiringtech.in'
                  className='text-[#2d20a7]'
                >
                  {' '}
                  career@hiringtech.in{' '}
                </Link>
                <br />
                This Privacy Policy is effective from now and may be updated
                periodically. Please check this page regularly for any changes.
                <br />
                Thank you for trusting Hiring Tech with your privacy.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default page
