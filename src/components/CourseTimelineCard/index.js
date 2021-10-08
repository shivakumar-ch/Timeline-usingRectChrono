import {AiFillClockCircle} from 'react-icons/ai'
import {
  CardContainer,
  TitleDiv,
  CardTitle,
  TimeDiv,
  TimePara,
  Description,
  TagList,
  ListItem,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {data} = props

  return (
    <CardContainer>
      <TitleDiv>
        <CardTitle>{data.courseTitle}</CardTitle>
        <TimeDiv>
          <AiFillClockCircle />
          <TimePara>{data.duration}</TimePara>
        </TimeDiv>
      </TitleDiv>
      <Description>{data.description}</Description>
      <TagList>
        {data.tagsList.map(item => (
          <ListItem key={item.id}>
            <p>{item.name}</p>
          </ListItem>
        ))}
      </TagList>
    </CardContainer>
  )
}

export default CourseTimelineCard
