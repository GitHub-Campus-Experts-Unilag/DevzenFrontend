import * as React from "react";
import { Stage, Layer } from "react-konva";
import Konva from "konva";
import { ACTIONS } from "./constants";

import {
  Square,
  Circle,
  Gallery,
  Kite,
  Triangle,
  TShape,
  Erase,
  Add,
  BoardArrow,
} from "@/assets/svg";

export const BoardSketch = () => {
  const stageRef = React.useRef<Konva.Stage>(null);
  const [action, setAction] = React.useState(ACTIONS.SQUARE);

  const onPointerMove = () => {};
  const onPointerDown = () => {};
  const onPointerUp = () => {};
  return (
    <>
      <div className="bg-white relative pt-6">
        <div className="bg-[#1C1C1C] absolute flex items-center px-12 py-3 rounded-xl gap-x-4 left-24">
          <img
            src={Square}
            className={action == ACTIONS.SQUARE ? "bg-[#098597] rounded" : ""}
            alt="Square"
            onClick={() => setAction(ACTIONS.SQUARE)}
          />
          <img
            src={Kite}
            className={action == ACTIONS.KITE ? "bg-[#098597] rounded" : ""}
            alt="Kite"
            onClick={() => setAction(ACTIONS.KITE)}
          />
          <img
            src={Circle}
            className={action == ACTIONS.CIRCLE ? "bg-[#098597] rounded" : ""}
            alt="Circle"
            onClick={() => setAction(ACTIONS.CIRCLE)}
          />
          <img
            src={Triangle}
            className={action == ACTIONS.TRIANGLE ? "bg-[#098597] rounded" : ""}
            alt="Triangle"
            onClick={() => setAction(ACTIONS.TRIANGLE)}
          />
          <img
            src={BoardArrow}
            className={
              action == ACTIONS.BOARDARROW ? "bg-[#098597] rounded" : ""
            }
            alt="BoardArrow"
            onClick={() => setAction(ACTIONS.BOARDARROW)}
          />
          <img
            src={TShape}
            className={action == ACTIONS.TSHAPE ? "bg-[#098597] rounded" : ""}
            alt="TShape"
            onClick={() => setAction(ACTIONS.TSHAPE)}
          />
          <img
            src={Erase}
            className={action == ACTIONS.ERASE ? "bg-[#098597] rounded" : ""}
            alt="Erase"
            onClick={() => setAction(ACTIONS.ERASE)}
          />
          <img
            src={Gallery}
            className={action == ACTIONS.GALLERY ? "bg-[#098597] rounded" : ""}
            alt="Gallery"
            onClick={() => setAction(ACTIONS.GALLERY)}
          />
          <img
            src={Add}
            className={action == ACTIONS.ADD ? "bg-[#098597] rounded" : ""}
            alt="Add"
            onClick={() => setAction(ACTIONS.ADD)}
          />
        </div>
        {/* Controls */}
        <Stage
          ref={stageRef}
          height={window.innerHeight}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <Layer></Layer>
        </Stage>
      </div>
    </>
  );
};
