import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectContainer,
  ProjectImage,
  TitleDiv,
  ProjectTitle,
  TimeDiv,
  TimePara,
  Description,
  Visit,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <ProjectContainer>
      <ProjectImage alt="project" src={data.imageUrl} />
      <TitleDiv>
        <ProjectTitle>{data.projectTitle}</ProjectTitle>
        <TimeDiv>
          <AiFillCalendar />
          <TimePara>{data.duration}</TimePara>
        </TimeDiv>
      </TitleDiv>
      <Description>{data.description}</Description>
      <Visit target="#" href={data.projectUrl}>
        Visit
      </Visit>
    </ProjectContainer>
  )
}

export default ProjectTimelineCard
