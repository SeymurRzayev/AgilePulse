import React, { useState } from "react";
import TrainingCard from "./TrainingCard";
import TrainingsViewAllContainer from "./TrainingsViewAllContainer";
import type { Module } from "../../types/types";

type TrainingCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  time?: string;
  authorAvatarUrl?: string;
  authorName?: string;
  publishedAt?: string;
  modules?: Module[];
};

type TrainingListContainerProps = {
  trainingCourses: TrainingCardProps[];
  count: number;
};
const TrainingListContainer: React.FC<TrainingListContainerProps> = ({
  trainingCourses,
  count,
}) => {

  const [visibilty, setVisibility] = useState<number>(6)

  const slicesData = count > 5 ? trainingCourses.slice(0, visibilty) : trainingCourses

  return (
    <div>
      <div className="w-full  flex flex-wrap mt-15 gap-y-15 justify-center gap-6">
        {slicesData?.map((course) => (
          <TrainingCard
            key={course.id}
            id={course.id}
            imgUrl={course.imageUrl}
            title={course.title}
            time={course.modules?.length} //modul sayi
            lessonCount={course.modules?.reduce((total, mod) => total + mod.lessons.length, 0)} //lesson sayi
            avatar={course.authorAvatarUrl}
            user={course.authorName}
            date={course.publishedAt}
            isCourse={true}
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
