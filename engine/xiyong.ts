// 喜用神计算算法（从fate/xiyong.go移植）

export interface XiYong {
  wuXingFen: Record<string, number>;
  similar: string[];
  similarPoint: number;
  heterogeneous: string[];
  heterogeneousPoint: number;
}

const sheng = ['木', '火', '土', '金', '水'];

export function createXiYong(): XiYong {
  return {
    wuXingFen: {},
    similar: [],
    similarPoint: 0,
    heterogeneous: [],
    heterogeneousPoint: 0
  };
}

export function addFen(xiyong: XiYong, wuxing: string, point: number): void {
  if (xiyong.wuXingFen[wuxing] !== undefined) {
    xiyong.wuXingFen[wuxing] += point;
  } else {
    xiyong.wuXingFen[wuxing] = point;
  }
}

export function getFen(xiyong: XiYong, wuxing: string): number {
  return xiyong.wuXingFen[wuxing] || 0;
}

function minFenWuXing(xiyong: XiYong, ...wuxings: string[]): string {
  let min = Infinity;
  let result = '';
  for (const wx of wuxings) {
    const fen = getFen(xiyong, wx);
    if (fen < min) {
      min = fen;
      result = wx;
    } else if (fen === min) {
      result += wx;
    }
  }
  return result;
}

export function isQiangRuo(xiyong: XiYong): boolean {
  return xiyong.similarPoint > xiyong.heterogeneousPoint;
}

export function getXiYongShen(xiyong: XiYong): string {
  if (!isQiangRuo(xiyong)) {
    return minFenWuXing(xiyong, ...xiyong.similar);
  }
  return minFenWuXing(xiyong, ...xiyong.heterogeneous);
}

export function calcSimilar(xiyong: XiYong, riZhuWuXing: string): void {
  for (let i = 0; i < sheng.length; i++) {
    if (sheng[i] === riZhuWuXing) {
      xiyong.similar.push(sheng[i]);
      xiyong.similarPoint = getFen(xiyong, sheng[i]);
      
      const prevIndex = i === 0 ? sheng.length - 1 : i - 1;
      xiyong.similar.push(sheng[prevIndex]);
      xiyong.similarPoint += getFen(xiyong, sheng[prevIndex]);
      break;
    }
  }
}

export function calcHeterogeneous(xiyong: XiYong): void {
  for (const wx of sheng) {
    if (!xiyong.similar.includes(wx)) {
      xiyong.heterogeneous.push(wx);
      xiyong.heterogeneousPoint += getFen(xiyong, wx);
    }
  }
}

export function filterXiYong(yong: string, charsWuXing: string[]): boolean {
  for (const wuxing of charsWuXing) {
    if (yong.includes(wuxing)) {
      return true;
    }
  }
  return false;
}

export function calcXiYong(baziWuXing: string[], riZhu: string): XiYong {
  const xiyong = createXiYong();
  
  for (const wx of baziWuXing) {
    addFen(xiyong, wx, 100);
  }
  
  calcSimilar(xiyong, riZhu);
  calcHeterogeneous(xiyong);
  
  return xiyong;
}