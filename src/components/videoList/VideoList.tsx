import React from "react";
import { useSelector } from "react-redux";

import withWidth from "@material-ui/core/withWidth";
import layoutParams from "../layoutParams";
import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";
import { CombinedStore } from "../../redux/reducers";

const videoListTitles = ["The newest hits", "Top movies", "Trending hits"];

interface VideoListProps {
  width: string;
}

const VideoList = ({ width }: VideoListProps) => {
  const { entitiesList } = useSelector((state: CombinedStore) => state.media);
  const { isHorizontal, cols, cellHeight } = layoutParams[width];

  return (
    <div>
      {isHorizontal
        ? entitiesList.map((entities: any, index: number) => {
            return (
              <HorizontalList
                key={index}
                tileData={entities}
                cols={entities.length < cols ? entities.length : cols}
                cellHeight={cellHeight}
                title={videoListTitles[index]}
              />
            );
          })
        : entitiesList.map((entities: any, index: number) => (
            <VerticalList
              key={index}
              tileData={entities}
              cols={entities.length < cols ? entities.length : cols}
              cellHeight={cellHeight}
              title={videoListTitles[index]}
            />
          ))}
    </div>
  );
};

export default withWidth()(VideoList);
