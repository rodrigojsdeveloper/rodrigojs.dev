import Paragraphy from '@/components/Paragraphy'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import List from '@/components/List'
import Job from '@/components/Job'
import jobs from '@/utils/jobs'

const Experiences = () => {
  return (
    <section className="mt-6 flex w-full max-w-none animate-up flex-col gap-y-6 lg:mt-0 lg:max-w-800">
      <Title title="Experiences" />
      <Paragraphy text="Discover my professional journey and the skills I've gained along the way, as well as the courses that have helped me grow and excel." />
      <List>
        {jobs.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </List>

      <Footer />
    </section>
  )
}

export default Experiences
