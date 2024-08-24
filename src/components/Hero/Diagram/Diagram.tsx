import {
  DiagramElement,
  DiagramSvg,
  DiagramTitle,
  GraphSvg,
  DiagramWrapper,
  GraphWrapper,
} from "./Diagram.styled";

import icon from "../../../assets/icon/icon.svg";

interface GraphProps {
  width: string;
  height: string;
  iconName: string;
}

interface DiagramProps {
  title: string;
  svgTitle: string;
  graph?: GraphProps[];
  children?: React.ReactNode;
  bgColor?: string;
}

export const Diagram = ({
  svgTitle,
  title,
  graph,
  children,
  bgColor,
}: DiagramProps) => {
  console.log(graph);

  return (
    <DiagramWrapper bgColor={bgColor}>
      <DiagramElement>
        <DiagramSvg>
          <use href={`${icon}${svgTitle}`} />
        </DiagramSvg>
        <DiagramTitle>{title}</DiagramTitle>
      </DiagramElement>
      {graph ? (
        <GraphWrapper>
          {graph.map((graph) => (
            <GraphSvg
              key={graph.iconName}
              width={graph.width}
              height={graph.height}
            >
              <use href={`${icon}#${graph.iconName}`} />
            </GraphSvg>
          ))}
        </GraphWrapper>
      ) : (
        children
      )}
    </DiagramWrapper>
  );
};