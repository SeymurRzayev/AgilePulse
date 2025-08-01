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
  count?: number;
};

type TrainingListContainerProps = {
  trainingCourses: TrainingCardProps[];
  count?: number;
};

const TrainingListContainer: React.FC<TrainingListContainerProps> = ({
  trainingCourses,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const visibleTrainings = trainingCourses.slice(0, visibleCount);
  
  const hasMoreItems = visibleCount < trainingCourses.length;

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, trainingCourses.length));
  };

  return (
    <div>
      <div className="w-full flex flex-wrap mt-15 gap-y-15 justify-center gap-6">
        {visibleTrainings?.map((course) => (
          <TrainingCard
            className="w-[325px] md:w-[381px]"
            isCurveBig={true}
            key={course.id}
            id={course.id}
            imgUrl={course.imageUrl}
            title={course.title}
            time={course.modules?.length} // modul sayı
            lessonCount={course.modules?.reduce((total, mod) => total + mod.lessons.length, 0)} // lesson sayı
            avatar={course.authorAvatarUrl}
            user={course.authorName}
            date={course.publishedAt}
            isCourse={true}
          />
        ))}
      </div>
      
      {hasMoreItems && (
        <TrainingsViewAllContainer
          text="Hamısına bax"
          clickFunction={handleViewMore}
        />
      )}
    </div>
  );
};

export default TrainingListContainer;