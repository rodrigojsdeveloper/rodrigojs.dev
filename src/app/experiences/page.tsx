import Paragraphy from '@/components/Paragraphy'
import Title from '@/components/Title'
import List from '@/components/List'
import Job from '@/components/Job'
import jobs from '@/utils/jobs'

const Experiences = () => {
  return (
    <>
      <Title title="Experiences" />
      <Paragraphy text="Discover my professional journey and the skills I've gained along the way, as well as the courses that have helped me grow and excel." />
      <List>
        {jobs.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </List>
    </>
  )
}

export default Experiences
