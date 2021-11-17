

function mergeRange(meetings)
{
  const meetingsCopy = meetings;

  const sortedMeetings = meetingsCopy.sort((a,b)=> a.startTime - b.startTime);

  const mergeMeetings = [sortedMeetings[0]];
 

  for(let i=1;i<sortedMeetings.length;i++)
  {
      const currentMeeting = sortedMeetings[i];
      const lastMergeMeeting = mergeMeetings[mergeMeetings.length - 1];
     

      if(currentMeeting.startTime <= lastMergeMeeting.endTime)
      {
          lastMergeMeeting.endTime = Math.max(currentMeeting.endTime,lastMergeMeeting.endTime)
      }
      else{
        
        mergeMeetings.push(currentMeeting)
      }
  }
  return mergeMeetings

}

const fn = mergeRange([
    { startTime: 0,  endTime: 1 },      
     { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 9,  endTime: 10 },
    { startTime: 10, endTime: 12 },
  ])

//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },

  console.log(fn)