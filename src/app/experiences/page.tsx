import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import List from '@/components/List'
import Job from '@/components/Job'
import jobs from '@/utils/jobs'

const Experiences = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Experiences" />
        <Paragraph text="Discover my professional journey and the skills I've gained along the way, as well as the courses that have helped me grow and excel." />
      </div>
      <List>
        {jobs.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </List>
    </div>
  )
}

export default Experiences
