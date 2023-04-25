
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's Application Tracker?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How was Application Tracker built",
    answer:
      "The app was built with the MERN stack, used Tailwind CSS for styling, and included a number of Node packages.",
  },
  {
    question: "Who was part of the build team?",
    answer:
      "Alex, Brittany, Jordan, Katie, and Robert",
  },
]

const Questions = () => {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-semiBold leading-10 tracking-tight text-gray-900">Learn more about <span className='text-[#2ECC40] font-bold'> Application Tracker</span></h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
}

export default Questions
