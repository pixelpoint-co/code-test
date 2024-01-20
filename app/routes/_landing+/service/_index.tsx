import { json, redirect } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import clsx from 'clsx'
import Divider from '~/components/atoms/Divider'
import { db } from '~/utils/db.server'
const data = [
  {
    title: 'Beta',
    price: '10k USD',
    description: `The success of your innovation depends on finding the right product market fit. Pixel Beta is the most reliable way to reach your customers with core features and offerings. We help you take advantage of today's latest technologies and our best practices to reach out to market within 8 weeks, with just the right balance between agility and quality.`,
    pointList: [
      {
        title: 'Who is right for this service?',
        list: [
          `You have an idea but don't necessarily know where to start`,
          'Time-to-market is your top priority',
          'You want to start light-weight without a legacy system',
        ],
      },
      {
        title: 'Goals',
        list: [
          'Wire Frames and User journeys',
          'Beta Launch',
          'Post-beta kpi metric analysis',
        ],
      },
    ],
  },
  {
    title: 'LaunchPad',
    price: '25k USD ~ 100k USD',
    description: `
      Launching a successful product requires deep
      understanding of the software and the
      business. Modern users' expectation of your
      service is higher than ever. Pixel LaunchPad
      focuses not only your core value propositions,
      but also how to get you and your team best
      equipped to manage and scale. Build a strong
      foundation with an experienced technical
      partner for long-term success.
    `,
    pointList: [
      {
        title: 'Who is right for this service?',
        list: [
          `You have launched a beta (or POC) before, and now you are ready for v1 launch.`,
          'You have a functioning App launched, but feel you are not yet equipped with modern tools to respond to users needs as efficiently as you would like.',
        ],
      },
    ],
  },
  {
    title: 'Co-Pilot',
    price: 'Retainer',
    description: `
    As your business grows, you face new challenges. Scaling your system, team-building, continuous product discovery to name a few. We help you focus on your business by becoming your defacto CTO. Pixel co-pilot is the most reliable, cross-functional team for the task.
    `,
    pointList: [
      {
        title: 'Who is right for this service?',
        list: [
          `You have a running product/service that's growing, but feel the new technical challenges are getting in the way.`,
        ],
      },
    ],
  },
]
export async function loader() {
  return data
}

export async function action() {
  return null
}

export default function Service() {
  const data = useLoaderData<typeof loader>()
  return (
    <div
      className={clsx('tw-p-4', 'laptop:tw-px-14', 'dektop:tw-max-w-[1600px]')}
    >
      <div className={clsx('tw-pt-10')}>
        <p
          className={clsx(
            'tw-font-bold',
            'tw-text-3.5xl',
            'tw-uppercase',

            'tablet:tw-text-5.5xl',
            'tablet:tw-pr-1/8',
            'laptop:tw-text-7xl',
            'desktop:tw-text-8xl',
          )}
        >
          <span
            className={clsx(
              'tw-text-sm',
              'tw-font-normal',
              'tw-italic',
              'tw-mr-7',

              'laptop:tw-mr-15',
              'laptop:tw-text-base',
              'des:tw-pr-44',
            )}
          >
            Hello.
          </span>
          <span className={clsx('tw-inline-block')}>Explore How</span>
          <br />
          we reshape Products for a changing world.
        </p>
      </div>
      <Divider className={clsx('tw-bg-black')} verticalMargin={20} />
      <div className={clsx('tw-py-20')}>
        {data.map(({ title, price, description, pointList }, i) => (
          <>
            {i > 0 ? (
              <Divider className={clsx('tw-bg-black')} verticalMargin={20} />
            ) : null}
            <div className={clsx('tw-py-5')} key={title}>
              <div>
                <div className={clsx('tw-flex tw-justify-between ')}>
                  <h2 className={clsx('tw-text-2xl tw-font-semibold')}>
                    {title}
                  </h2>
                  <div
                    className={clsx(
                      'tw-inline-flex tw-self-center tw-bg-black tw-px-2.5 tw-py-1 tw-text-white',
                    )}
                  >
                    <p
                      className={clsx(
                        'tw-text-sm tw-font-semibold tw-leading-none',
                      )}
                    >
                      {price}
                    </p>
                  </div>
                </div>
                <p className={clsx('tw-mt-5 tw-text-lg')}>{description}</p>
              </div>
              {pointList.map(({ title, list }) => (
                <div className={clsx('tw-mt-10')} key={title}>
                  <span className={clsx('tw-font-bold tw-text-gray-300')}>
                    {title}
                  </span>
                  {list?.length > 0 ? (
                    <ul
                      className={clsx('tw-flex tw-flex-col tw-gap-5 tw-pt-5')}
                    >
                      {list.map(point => (
                        <li className={clsx('tw-flex tw-flex-row')} key={point}>
                          <div
                            className={clsx(
                              'tw-flex-0 tw-flex tw-pr-2.5 tw-text-gray-300',
                            )}
                          >
                            -
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
