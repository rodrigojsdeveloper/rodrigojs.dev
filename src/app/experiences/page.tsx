import Paragraphy from '@/components/Paragraphy'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import List from '@/components/List'
import Job from '@/components/Job'
import jobs from '@/utils/jobs'

const Experiences = () => {
  return (
    <section className="flex w-full max-w-800 animate-up flex-col gap-y-6 max-lg:mt-6 max-lg:max-w-none">
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
