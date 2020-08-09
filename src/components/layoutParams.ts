interface SingleParamSet {
  isHorizontal: boolean;
  cols: number;
  cellHeight: number;
  videoSize: string;
}

interface LayoutParams {
  [x: string]: SingleParamSet;
}

const layoutParams: LayoutParams = {
  xs: { isHorizontal: false, cols: 2, cellHeight: 140, videoSize: "90%" },
  sm: { isHorizontal: false, cols: 3, cellHeight: 140, videoSize: "90%" },
  md: { isHorizontal: true, cols: 5, cellHeight: 120, videoSize: "900px" },
  lg: { isHorizontal: true, cols: 6, cellHeight: 140, videoSize: "1200px" },
  xl: { isHorizontal: true, cols: 7, cellHeight: 150, videoSize: "1200px" },
};

export default layoutParams;
