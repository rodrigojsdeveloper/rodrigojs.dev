import Paragraphy from '@/components/Paragraphy'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import Job from '@/components/Job'
import jobs from '@/utils/jobs'

const Experiences = () => {
  return (
    <>
      <Title title="Experiences" />
      <Paragraphy text="Discover my professional journey and the skills I've gained along the way, as well as the courses that have helped me grow and excel." />
      <ul className="grid gap-4 md:grid-cols-2">
        {jobs.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </ul>

      <Footer />
    </>
  )
}

export default Experiences
