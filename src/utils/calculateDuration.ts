
const getHoursAndMinutes = (time: string): number => {
      const [hour, minutes] = time.split(":").map((el) => +el); 
      return( hour * 3600 + minutes * 60);
}

export const calculateDuration = (startTime: string, endTime: string) => {
      const startedTimeInSeconds = getHoursAndMinutes(startTime);
      const endedTimeInSeconds   = getHoursAndMinutes(endTime);

      let timeDifferenceInMinutes = (endedTimeInSeconds - startedTimeInSeconds) / 60

      return timeDifferenceInMinutes;
}

export const formatTime = (startTime: string, endTime: string) => {
      const timeInMinutes = calculateDuration(startTime, endTime)
      let result = [];



      if(timeInMinutes > 60) {
            const hours = +(timeInMinutes / 60).toFixed();
            const minutes = timeInMinutes - hours * 60;

            result.push(hours, minutes)
      } else {
            result.push("00", timeInMinutes)
      }

      return result.join(":");
}

