import { BarElement } from 'chart.js';
import { StatsBase, IStatsBaseOptions, IStatsBaseProps, TooltipArea } from './base';

export class Boxes extends StatsBase<IStatsBaseProps, IStatsBaseOptions> {
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    ctx.fillStyle = this.options.backgroundColor;
    ctx.strokeStyle = this.options.borderColor;
    ctx.lineWidth = this.options.borderWidth;
    const props = this.getProps(['x', 'width', 'startTimes', 'endTimes']);
    const { startTimes } = props;
    const { endTimes } = props;
    const { x } = props;
    const { width } = props;
    const x0 = x - width / 2;

    for (let i = 0; i < startTimes.length; i++) {
      ctx.fillRect(x0, startTimes[i], width, endTimes[i] - startTimes[i]);
    }

    ctx.save();
    ctx.restore();
  }

  _getBounds(useFinalPosition?: boolean): TooltipArea[] {
    let tooltipAreas = [];
    if (this.x == null) {
      tooltipAreas.push({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      });
      return tooltipAreas;
    }

    const { x, width, startTimes, endTimes } = this.getProps(
      ['x', 'width', 'startTimes', 'endTimes'],
      useFinalPosition
    );
    const x0 = x - width / 2;
    for (let i = 0; i < startTimes.length; i++) {
      tooltipAreas.push({
        left: x0,
        top: startTimes[i],
        right: x0 + width,
        bottom: endTimes[i],
      });
    }
    return tooltipAreas;
  }

  static id = 'boxes';

  static defaults = /* #__PURE__ */ {
    ...BarElement.defaults,
    medianColor: 'transparent',
    lowerBackgroundColor: 'transparent',
  };

  static defaultRoutes = /* #__PURE__ */ { ...BarElement.defaultRoutes };
}

declare module 'chart.js' {
  export interface ElementOptionsByType<TType extends ChartType> {
    boxplot: ScriptableAndArrayOptions<IStatsBaseOptions & CommonHoverOptions, ScriptableContext<TType>>;
  }
}
