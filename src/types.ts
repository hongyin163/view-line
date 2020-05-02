
export type TLineType = 'vl' | 'vm' | 'vr' | 'ht' | 'hm' | 'hb';
export type IDirection = 'v' | 'h';

export interface ILine {
    type: TLineType;
    pos: number;
    start: number;
    end: number;
}

export interface ISpace {
    from: ILine;
    to: ILine;
    dist: number;

}

export interface ILineStore {
    vLines: Array<ILine>;
    hLines: Array<ILine>;
}
