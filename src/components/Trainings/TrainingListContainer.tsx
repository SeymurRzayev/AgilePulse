import React, { useState } from "react";
import TrainingCard from "./TrainingCard";
import TrainingsViewAllContainer from "./TrainingsViewAllContainer";

type TrainingCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  time?: string;
  avatar?: string;
  user?: string;
  date?: string;
};

type TrainingListContainerProps = {
  trainingCourses: TrainingCardProps[];
};
const TrainingListContainer: React.FC<TrainingListContainerProps> = ({
  trainingCourses,
}) => {

  const [visibilty, setVisibility] = useState<number>(6)

  const slicesData = trainingCourses.slice(0, visibilty)

  return (
    <div>
      <div className="w-full flex flex-wrap mt-15 gap-y-15 justify-center gap-6">
        {slicesData.map((course) => (
          <TrainingCard
            key={course.id}
            imgUrl={course.imgUrl}
            title={course.title}
            time={course.time}
            avatar={course.avatar}
            user={course.user}
            date={course.date}
          />
        ))}
      </div>
      <TrainingsViewAllContainer
        text="Hamısına bax"
        clickFunction={() => setVisibility(visibilty + 6)}
      />
    </div>
  );
};

export default TrainingListContainer;
