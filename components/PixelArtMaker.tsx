"use client";
import React, { useState } from "react";
import { BorderBeam } from "./ui/border-beam";

const DEFAULT_GRID_SIZE = 16;
const DEFAULT_GRID_COLOR = "#fff";
const DEFAULT_SELECTED_COLOR = "#000";

const PixelArtMaker = () => {
  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);
  const [grid, setGrid] = useState<string[]>(
    Array(gridSize * gridSize).fill(DEFAULT_GRID_COLOR)
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    DEFAULT_SELECTED_COLOR
  );
  const handleCellClick = (index: number) => {
    const newGrid = [...grid];
    newGrid[index] = selectedColor;
    setGrid(newGrid);
  };

  const handleGridChange = (newGridSize: number) => {
    setGridSize(newGridSize);
    setGrid(Array(newGridSize * newGridSize).fill(DEFAULT_GRID_COLOR));
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex gap-5 md:gap-3 flex-col items-center md:flex-row">
        <label htmlFor="pickGrid">Pick grid size:</label>
        <input
          id="pickGrid"
          type="number"
          className=" py-1 px-2 rounded-sm border-2"
          value={gridSize}
          onChange={(e) => handleGridChange(+e.target.value)}
        />
        <label htmlFor="pickColor">Pick color:</label>
        <input
          id="pickColor"
          type="color"
          className="bg-neutral-50"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>
      <div
        className="grid w-[20rem] md:w-[30rem] md:h-[30rem] h-[20rem] relative border border-neutral-300 rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {grid.map((color, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="border border-neutral-200 rounded-sm"
            style={{ backgroundColor: color }}
          ></div>
        ))}
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
      </div>
    </div>
  );
};

export default PixelArtMaker;
