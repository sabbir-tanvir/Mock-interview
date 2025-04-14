import { Button } from '@/components/ui/button';
import InterviewCard from '@/components/ui/InterviewCard';
import { dummyInterviews } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Get ready for your next exam with PrepWise!

          </h2>
          <p className='text-lg'>
            practice on real intervie questions, get personalized feedback, and track your progress over time.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">
              Start Practicing
            </Link>
          </Button>

        </div>
        <Image src="/robot.png" alt='robo-dude'
          width={400} height={400} className="max-sm:hidden" />

      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>
          Your Interview
        </h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (

            <InterviewCard {...interview}  key={interview.id} />
          ))}

        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>
          Take an Interview
        </h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (

            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>

      </section>








    </>
  );
};

export default Page;