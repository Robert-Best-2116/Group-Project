
import { FolderOpenIcon, IdentificationIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Organize your applications',
    description:
      'Create a new tracking file for every application sent out and view anywhere whether on desktop or mobile.',
    icon: FolderOpenIcon,
  },
  {
    name: 'Keep application info up to date',
    description: 'You have the ability to recall or update any of the details on the application at anytime and delete the application if you choose not to track it anymore.',
    icon: IdentificationIcon,
  },
  {
    name: 'Get your dream job',
    description: 'By tracking your applications you can keep an organized log of all places you have applied to and land the job!',
    icon: HandThumbUpIcon,
  },
]

const Hero = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-[#2ECC40]">A better way</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">To organize your applications</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                    iste dolor cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#2ECC40]" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="/img/page.png"
                alt="Dashboard screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      )
}

export default Hero
